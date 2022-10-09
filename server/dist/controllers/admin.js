"use strict";
// import express, {Request, Response, NextFunction} from "express";
// import {v4 as uuidv4} from "uuid";
// import {
//     registerAdminSchema,
//     loginSchema,
//     generateToken,
//     options,
// } from "../utils/utils";
// import { AdminInstance } from "../models/admin";
// import bcrypt from "bcryptjs";
// export async function RegisterAdmin(
//   req: Request,
//   res: Response,
//   next: NextFunction
// )
// {
//   const id = uuidv4();
//   console.log("before")
//   try {
//     //console.log("after")
//     const validationResult = registerAdminSchema.validate(req.body, options);
//     if (validationResult.error) {
//       return res.status(400).json({
//         Error: validationResult.error.details[0].message,
//       });
//     }
//     const duplicatEmail = await AdminInstance.findOne({
//       where: { email: req.body.email },
//     });
//     if (duplicatEmail) {
//       return res.status(409).json({
//         msg: "Email is used, please change email",
//       });
//     }
//   const passwordHash = await bcrypt.hash(req.body.password, 8);
//   const record = await AdminInstance.create({
//     id:id,
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     phone: req.body.phone,
//     address: req.body.address,
//     country: req.body.country,
//   // reactScore: req.body.reactScore,
//   // nodeScore: req.body.nodeScore,
//   // javaScore: req.body.javaScore,
//   // csharpScore: req.body.csharpScore,
//     password: passwordHash,
//     });
//     res.status(201).json({
//       msg: "Welcome, Signup successful",
//       record,
//     });
//   } catch (err) {
//     res.status(500).json({
//       msg: "failed to register",
//       route: "/register",
//     });
//   }
// }
// export async function LoginAdmin(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   const id = uuidv4();
//   try {
//     const validationResult = loginSchema.validate(req.body, options);
//     if (validationResult.error) {
//       return res.status(400).json({
//         Error: validationResult.error.details[0].message,
//       });
//     }
//     const User = (await AdminInstance.findOne({
//       where: { email: req.body.email },
//     })) as unknown as { [key: string]: string };
//     const { id } = User;
//     const token = generateToken({ id });
//     const validUser = await bcrypt.compare(req.body.password, User.password);
//     if (!validUser) {
//       res.status(401).json({
//         message: "Invalid Credentials",
//       });
//     }
//     if (validUser) {
//       res.status(200).json({
//         message: "Successfully logged in",
//         token,
//         User,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       msg: "failed to login",
//       route: "/login",
//     });
//   }
// }
