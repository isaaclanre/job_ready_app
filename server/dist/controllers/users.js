"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = exports.GetUsers = exports.DeleteUser = exports.UpdateUser = exports.LoginUser = exports.RegisterUser = void 0;
const uuid_1 = require("uuid");
const utils_1 = require("../utils/utils");
const users_1 = require("../models/users");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
async function RegisterUser(req, res, next) {
    const id = (0, uuid_1.v4)();
    console.log("before");
    try {
        //console.log("after")
        const validationResult = utils_1.registerUserSchema.validate(req.body, utils_1.options);
        if (validationResult.error) {
            return res.status(400).json({
                Error: validationResult.error.details[0].message,
            });
        }
        const duplicatEmail = await users_1.UserInstance.findOne({
            where: { email: req.body.email },
        });
        if (duplicatEmail) {
            return res.status(409).json({
                msg: "Email is used, please change email",
            });
        }
        const passwordHash = await bcryptjs_1.default.hash(req.body.password, 8);
        const record = await users_1.UserInstance.create({
            id: id,
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
    }
    catch (err) {
        res.status(500).json({
            msg: "failed to register",
            route: "/register",
        });
    }
}
exports.RegisterUser = RegisterUser;
async function LoginUser(req, res, next) {
    const id = (0, uuid_1.v4)();
    try {
        const validationResult = utils_1.loginSchema.validate(req.body, utils_1.options);
        if (validationResult.error) {
            return res.status(400).json({
                Error: validationResult.error.details[0].message,
            });
        }
        const User = (await users_1.UserInstance.findOne({
            where: { email: req.body.email },
        }));
        const { id } = User;
        const token = (0, utils_1.generateToken)({ id });
        const validUser = await bcryptjs_1.default.compare(req.body.password, User.password);
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
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            Error: "failed to login",
            route: "/login",
        });
    }
}
exports.LoginUser = LoginUser;
async function UpdateUser(req, res, next) {
    try {
        const id = req.params.id;
        const { email, password } = req.body;
        const record = await users_1.UserInstance.findOne({
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
    }
    catch (error) { }
    {
        res.status(500).json({
            msg: "failed to update",
            route: "/update/:id",
        });
    }
}
exports.UpdateUser = UpdateUser;
async function DeleteUser(req, res, next) {
    try {
        const id = req.params.id;
        const record = await users_1.UserInstance.destroy({
            where: { id },
        });
        return res.status(200).json({
            msg: "You have successfully deleted a user",
            record,
        });
    }
    catch (error) {
        res.status(500).json({
            msg: "failed to delete",
            route: "/delete",
        });
    }
}
exports.DeleteUser = DeleteUser;
async function GetUsers(req, res, next) {
    try {
        const limit = req.query?.limit;
        const offset = req.query?.offset;
        //  const record = await BookInstance.findAll({where: {},limit, offset})
        const record = await users_1.UserInstance.findAndCountAll({
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
    }
    catch (error) {
        res.status(500).json({
            msg: "failed to read",
            route: "/all",
        });
    }
}
exports.GetUsers = GetUsers;
async function GetUser(req, res, next) {
    try {
        const id = req.params.id;
        const record = await users_1.UserInstance.findOne({
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
    }
    catch (error) {
        res.status(500).json({
            msg: "failed to get user",
            route: "/all",
        });
    }
}
exports.GetUser = GetUser;
