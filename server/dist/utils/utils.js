"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.generateToken = exports.loginSchema = exports.registerUserSchema = exports.GradeSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.GradeSchema = joi_1.default.object().keys({
    reactScore: joi_1.default.number(),
    nodeScore: joi_1.default.number(),
    javaScore: joi_1.default.number(),
    csharpScore: joi_1.default.number(),
});
exports.registerUserSchema = joi_1.default.object().keys({
    firstName: joi_1.default.string().lowercase().required(),
    lastName: joi_1.default.string().lowercase().required(),
    email: joi_1.default.string().lowercase().required(),
    phone: joi_1.default.number().required(),
    address: joi_1.default.string().lowercase().required(),
    country: joi_1.default.string().lowercase().required(),
    password: joi_1.default.string().lowercase().required(),
    confirm_password: joi_1.default.ref("password")
}).with('password', 'confirm_password');
// })
// export const registerAdminSchema = Joi.object().keys({
//     firstName: Joi.string().lowercase().required(),
//     lastName: Joi.string().lowercase().required(),
//     email: Joi.string().lowercase().required(),
//     phone: Joi.number().required(),
//     address: Joi.string().lowercase().required(),
//     country: Joi.string().lowercase().required(),
//     reactScore: Joi.number(),
//     nodeScore: Joi.number(),
//     javaScore: Joi.number(),
//     csharpScore: Joi.number(),
//     password:Joi.string().lowercase().required(),
//         confirm_password:Joi.ref("password")   
//     }).with('password', 'confirm_password');
exports.loginSchema = joi_1.default.object().keys({
    email: joi_1.default.string().trim().lowercase().required(),
    password: joi_1.default.string().regex(/^[a-zA-Z0-9]{3,30}$/)
});
//Generate Token
const generateToken = (user) => {
    const pass = process.env.JWT_SECRET;
    return jsonwebtoken_1.default.sign(user, pass, { expiresIn: '7d' });
};
exports.generateToken = generateToken;
exports.options = {
    abortEarly: false,
    errors: {
        wrap: {
            label: ''
        }
    }
};
