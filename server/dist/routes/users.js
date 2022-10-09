"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { getAllUsers } from "../controllers/hire";
const users_1 = require("../controllers/users");
const router = express_1.default.Router();
/* GET users listing. */
router.post("/reg", users_1.RegisterUser);
router.post("/login", users_1.LoginUser);
router.delete("/delete/:id", users_1.DeleteUser);
router.put("/update/:id", users_1.UpdateUser);
router.get("/all", users_1.GetUsers);
router.get("/:id", users_1.GetUser);
// router.post("/create/questions",
//  )
exports.default = router;
