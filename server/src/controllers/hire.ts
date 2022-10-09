import express, { Request,Response,NextFunction } from 'express'
import {v4 as uuidv4} from 'uuid'
import {  GradeSchema} from '../utils/utils'
import { UserInstance } from '../models/users'
import { GradeInstance } from '../models/hire'



// export async function getAllUsers(req:Request, res:Response, next:NextFunction) {
//   const id = uuidv4();
//   try{
// const limit = req.query?.limit as number | undefined;
// const offset = req.query?.offset as number | undefined;

//     const record = await UserInstance.findAll({ limit, offset,
//       }
//   ) as unknown as {[key: string]:string}
//   console.log("after");
//         res.status(200).json({
//           msg: "You have successfully fetched all top performing candidates",
//           record: record
//         });
//     } catch (error) {
//       console.log(error);
      
//       res.status(500).json({
//         msg: "failed to fetch top performing candidates",
//         route: "/hire",
//       });
//     }
// }

// export async function getSingleUser(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   try {
//     const { id } = req.params;
//     const record = await UserInstance.findOne({ where: { id } });
//     if(record){
//       const apiData = req.headers['postman-token'];
//       if (apiData){
//         return res.status(200).json({msg:"You have successfully fetched this candidate", record})
//       }else{
// res.render('edit', {record})
//       }
//       }  
//   } catch (error) {
//     res.status(500).json({
//       msg: "failed to read single product",
//       route: "/read/:id/hire",
//     });
//   }
// }



export async function createEmployeesToHire(
  req: Request | any,
  res: Response,
  next: NextFunction
) {
  const id = uuidv4();
  try {
    const verified = req.user;
    const validationResult = GradeSchema.validate(req.body,);
    if (validationResult.error) {
      return res.status(400).json({
        Error: validationResult.error.details[0].message,
      });
    }
    const record = await GradeInstance.create({
      id,
      ...req.body,
      userId: verified.id,
    });
    // const postmanCreate = req.headers['postman-token']
    // if(postmanCreate){
    //     res.status(201).json({
    //     msg: "You have successfully registered your score",
    //     record,
    // });
    // }else{
    //   res.redirect('/users/dashboard')
    // }

    res.status(201).json({
      msg: "You have successfully created an eligible employee",
      record,
    });
  } catch (err) {
    res.status(500).json({
      msg: "failed to create an eligible employee",
      route: "/create",
    });
  }
}

export async function getEmployeesToHire(
  req: Request,
  res: Response,
  next: NextFunction
) {

  try {
    const limit = req.query?.limit as number | undefined;
    const offset = req.query?.offset as number | undefined;
    //  const record = await ProductInstance.findAll({where: {},limit, offset})
    const record = await GradeInstance.findAll({ limit, offset,
      include:[{
         model:UserInstance,
         attributes:[
          "id",
          "firstName",
          "lastName",
          "email",
          "phone",
          "address",
          "country"     
           ],
         as:'user'
        }
        ]
   });
   //const postmanGetAll = req.headers['postman-token']
      res.status(200).json({
      msg: "You have successfully fetched all eligible candidates",
      //count: record,
      record: record
    });
   
   
  } catch (error) {
    console.log(error);
    
    res.status(500).json({
      msg: "failed to fetch eligible employees",
      route: "/read",
    });
  }
}

    

