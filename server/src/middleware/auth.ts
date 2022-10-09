import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
const secret =  process.env.JWT_SECRET as string;
import { UserInstance } from "../models/users";

export async function auth(
  req: Request | any,
  res: Response,
  next: NextFunction
) {
  try {
    console.log('auth 13:=')
    const authorization = req.headers.authorization;

    if (!authorization) {
      res.status(401).json({
        Error: "Kindly sign in as a user",
      });
    }
    console.log('auth 20:=')
    const token = authorization?.slice(7, authorization.length) as string;
    // const token = authorization;
    console.log('auth 23:=')
    let verified = jwt.verify(token, secret);
    console.log('auth 25:=')

    if (!verified) {
      return res.status(401).json({
        Error: "User not verified, you cant access this route",
      });
    }

    console.log('auth 33:=')
    const { id } = verified as { [key: string]: string };

    console.log('auth 36:=')
    const user = await UserInstance.findOne({ where: { id } });

    console.log('auth 39:=')
    if (!user) {
      return res.status(404).json({
        Error: "User not verified",
      });
    }

    console.log('auth 46:=')
    req.user = verified;
    console.log('auth 48:=')
    next();
  } catch (error) {
    console.log(error,"pass")
    res.status(403).json({
      Error: "User not logged in",
    });
  }
}
