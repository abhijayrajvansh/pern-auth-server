import { Request, Response } from "express";
import prisma from "../db/prisma";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { SECRET } from "../configs";


export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = await req.body;
    const saltRounds = 10;
    const saltedPassword = await hash(password, saltRounds);

    const newUser = await prisma.users.create({
      data: {
        email,
        password: saltedPassword,
      },
    });

    console.log(newUser);

    return res.status(201).json({
      msg: "user created",
    });
  } catch (error) {
    return res.status(400).json({
      error: "user with email already exists.",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = await req.body;

    // find if user exists or not
    const user = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (!user) return res.json({ msg: "user not found" });

    // check if the entered password id correct or not
    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      return res.json({
        msg: "wrong password",
      });
    }

    // sign the user payload with secret key
    const payload = { id: user.id, email: user.email };
    const token = sign(payload, SECRET);

    return res.status(201).json({ token });
    
  } catch (error) {
    return res.status(500).json({
      msg: "internal server error",
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = await req.body;

    // find if user exists or not
    const isUser = await prisma.users.findUnique({
      where: {
        id,
      },
    });

    if (!isUser) return res.status(404).json({ msg: "user not found" });

    await prisma.users.delete({
      where: {
        id,
      },
    });

    return res.status(201).json({
      msg: "user deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "internal server error",
    });
  }
};
