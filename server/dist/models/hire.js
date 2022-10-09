"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeInstance = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../config/database.config"));
class GradeInstance extends sequelize_1.Model {
}
exports.GradeInstance = GradeInstance;
GradeInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    reactScore: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true
    },
    nodeScore: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true
    },
    javaScore: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true
    },
    csharpScore: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true
    },
}, {
    sequelize: database_config_1.default,
    tableName: 'grade'
});
