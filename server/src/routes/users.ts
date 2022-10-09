import express from "express";
// import { getAllUsers } from "../controllers/hire";
import { RegisterUser, LoginUser, DeleteUser, UpdateUser, GetUser,GetUsers } from "../controllers/users";
const router = express.Router();

/* GET users listing. */
router.post("/reg", RegisterUser);
router.post("/login", LoginUser);
router.delete("/delete/:id", DeleteUser);
router.put("/update/:id", UpdateUser);
router.get("/all", GetUsers)
router.get("/:id", GetUser)







// router.post("/create/questions",
//  )




export default router;
