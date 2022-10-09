import express, {Request, Response, NextFunction} from "express";
import {v4 as uuidv4} from "uuid";
import {
    registerUserSchema,
    loginSchema,
    generateToken,
    options,
} from "../utils/utils";
import { UserInstance } from "../models/users";
import bcrypt from "bcryptjs";

export async function RegisterUser(
  req: Request,
  res: Response,
  next: NextFunction
)
{
  const id = uuidv4();
  console.log("before")
  try {
    //console.log("after")
    const validationResult = registerUserSchema.validate(req.body, options);
    if (validationResult.error) {
      return res.status(400).json({
        Error: validationResult.error.details[0].message,
      });
    }
    const duplicatEmail = await UserInstance.findOne({
      where: { email: req.body.email },
    });
    if (duplicatEmail) {
      return res.status(409).json({
        msg: "Email is used, please change email",
      });
    }
  const passwordHash = await bcrypt.hash(req.body.password, 8);
  const record = await UserInstance.create({
    id:id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    country: req.body.country,
    password: passwordHash
    });
    res.status(201).json({
      msg: "Welcome, Signup successful",
      record,
    });
  } catch (err) {
    res.status(500).json({
      msg: "failed to register",
      route: "/register",
    });
  }
}

export async function LoginUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = uuidv4();
  try {
    const validationResult = loginSchema.validate(req.body, options);
    if (validationResult.error) {
      return res.status(400).json({
        Error: validationResult.error.details[0].message,
      });
    }
    
    const User = (await UserInstance.findOne({
      where: { email: req.body.email },
    })) as unknown as { [key: string]: string };

    const { id } = User;

    const token = generateToken({ id });


    const validUser = await bcrypt.compare(req.body.password, User.password);

    if (!validUser) {
      res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    if (validUser) {
      res.status(200).json({
        message: "Successfully logged in",
        token,
        User,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      Error: "failed to login",
      route: "/login",
    });
  }
}


export async function UpdateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const { email, password } = req.body;
    const record = await UserInstance.findOne({
      where: {
        id,
      },
    });
    if (!record) {
      return res.status(404).json({ msg: "User not found" });
    }
    const updatedrecord = await record.update({ email, password });
    return res.status(200).json({
      msg: "You have successfully updated a user",
      record,
    });
  } catch (error) {}
  {
    res.status(500).json({
      msg: "failed to update",
      route: "/update/:id",
    });
  }
}

export async function DeleteUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const record = await UserInstance.destroy({
      where: { id },
    });
    return res.status(200).json({
      msg: "You have successfully deleted a user",
      record,
    });
  } catch (error) {
    res.status(500).json({
      msg: "failed to delete",
      route: "/delete",
    });
  }
}

export async function GetUsers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const limit = req.query?.limit as number | undefined;
    const offset = req.query?.offset as number | undefined;
    //  const record = await BookInstance.findAll({where: {},limit, offset})
    const record = await UserInstance.findAndCountAll({
      limit,
      offset,
    //   include: [
    //     {
    //       model: UserInstance,
    //       as: "User",
    //     },
    //   ],
    });
    // res.status(200).render("authors", { record });
    return res.status(200).json({
      msg: "You have successfully fetch all authors",
      count: record.count,
      record: record.rows,
    });
  } catch (error) {
    res.status(500).json({
      msg: "failed to read",
      route: "/all",
    });
  }
}
export async function GetUser(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const record = await UserInstance.findOne({
      where: { id },
      // include: [
      //   {
      //     model: BookInstance,
      //     attributes: ["id", "name", "isPublished", "serialNumber"],
      //     as: "Books",
      //   },
      // ],
    });
    res.status(200).json({
      msg: "You have successfully fetch author",
      record,
    });
    // return record;
  } catch (error) {
    res.status(500).json({
      msg: "failed to get user",
      route: "/all",
    });
  }
}
