import express from "express";
import { auth } from "../middleware/auth";
import { createEmployeesToHire, getEmployeesToHire } from "../controllers/hire";
const router = express.Router();

/*Get users*/
// router.get('/usergrade', gradeInfo )
router.post('/createEmployeesToHire',auth, createEmployeesToHire )
router.get('/getEmployeesToHire', getEmployeesToHire )

export default router