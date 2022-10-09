"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const hire_1 = require("../controllers/hire");
const router = express_1.default.Router();
/*Get users*/
// router.get('/usergrade', gradeInfo )
router.post('/createEmployeesToHire', auth_1.auth, hire_1.createEmployeesToHire);
router.get('/getEmployeesToHire', hire_1.getEmployeesToHire);
exports.default = router;
