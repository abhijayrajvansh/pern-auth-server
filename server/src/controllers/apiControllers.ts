import { Request, Response } from "express";
import prisma from "../db/prisma";
import { verify, JwtPayload } from "jsonwebtoken";
import { SECRET } from "../configs";

interface AuthTokenPayload extends JwtPayload {
  id: number,
  email: string,
  iat: number
}

export const getUsers = async (req: Request, res: Response) => {
  const auth_token = req.header("authorization")?.replace("Bearer ", "");
  verify(auth_token, SECRET);
  try {
    const allUsers = await prisma.users.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        updatedAt: true,
      },
    });
    return res.status(200).json({
      users: allUsers,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const profile = async (req: Request, res: Response) => {
  const auth_token = req.header("authorization")?.replace("Bearer ", "");
  
  const decoded_token = verify(auth_token, SECRET) as AuthTokenPayload;
  
  const email = decoded_token.email
  
  try {

    return res.status(200).json({
      email: email,
      profilePic: 'https://github.com/abhijayrajvansh.png'
    })


  } catch (error) {
    console.log(error.message);
  }
};


export const dashboard = (req: Request, res: Response) => {
  return res.json({
    route_protected: true,
    msg: "dashboard",
  });
};