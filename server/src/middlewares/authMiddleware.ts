import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { SECRET } from "../configs";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const auth_token = req.header("authorization")?.replace("Bearer ", "");

  if (!auth_token) return res.json({ msg: "access denied" });

  try {
    verify(auth_token, SECRET);
    next();
  } catch (error) {
    return res.json({ msg: "access denied", signature: "invalid" });
  }
};
