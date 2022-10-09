import Joi from "joi";
import jwt from "jsonwebtoken";

export const GradeSchema = Joi.object().keys({
    reactScore: Joi.number(),
    nodeScore: Joi.number(),
    javaScore: Joi.number(),
    csharpScore: Joi.number(),
})



export const registerUserSchema = Joi.object().keys({
    firstName: Joi.string().lowercase().required(),
    lastName: Joi.string().lowercase().required(),
    email: Joi.string().lowercase().required(),
    phone: Joi.number().required(),
    address: Joi.string().lowercase().required(),
    country: Joi.string().lowercase().required(),
    password:Joi.string().lowercase().required(),
    confirm_password:Joi.ref("password")   
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


export const loginSchema= Joi.object().keys({
    email: Joi.string().trim().lowercase().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
})

//Generate Token
export const generateToken=(user:{[key:string]:unknown}):unknown=>{
    const pass = process.env.JWT_SECRET as string
     return jwt.sign(user,pass, {expiresIn:'7d'})
  }

  export const options = {  
    abortEarly:false,
    errors:{
        wrap:{
            label: ''
        }
    }
}

