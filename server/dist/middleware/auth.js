"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = process.env.JWT_SECRET;
const users_1 = require("../models/users");
async function auth(req, res, next) {
    try {
        console.log('auth 13:=');
        const authorization = req.headers.authorization;
        if (!authorization) {
            res.status(401).json({
                Error: "Kindly sign in as a user",
            });
        }
        console.log('auth 20:=');
        const token = authorization?.slice(7, authorization.length);
        // const token = authorization;
        console.log('auth 23:=');
        let verified = jsonwebtoken_1.default.verify(token, secret);
        console.log('auth 25:=');
        if (!verified) {
            return res.status(401).json({
                Error: "User not verified, you cant access this route",
            });
        }
        console.log('auth 33:=');
        const { id } = verified;
        console.log('auth 36:=');
        const user = await users_1.UserInstance.findOne({ where: { id } });
        console.log('auth 39:=');
        if (!user) {
            return res.status(404).json({
                Error: "User not verified",
            });
        }
        console.log('auth 46:=');
        req.user = verified;
        console.log('auth 48:=');
        next();
    }
    catch (error) {
        console.log(error, "pass");
        res.status(403).json({
            Error: "User not logged in",
        });
    }
}
exports.auth = auth;
