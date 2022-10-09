"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminInstance = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../config/database.config"));
class AdminInstance extends sequelize_1.Model {
}
exports.AdminInstance = AdminInstance;
AdminInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: false,
        allowNull: false,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: false,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: false,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: false,
        allowNull: false,
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: false,
        allowNull: false,
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: false,
        allowNull: false,
    },
    // reactScore: {
    //   type: DataTypes.NUMBER,
    //   primaryKey: false,
    //   allowNull: false,
    // },
    // nodeScore: {
    //   type: DataTypes.NUMBER,
    //   primaryKey: false,
    //   allowNull: false,
    // },
    // javaScore: {
    //   type: DataTypes.NUMBER,
    //   primaryKey: false,
    //   allowNull: false,
    // },
    // csharpScore: {
    //   type: DataTypes.NUMBER,
    //   primaryKey: false,
    //   allowNull: false,
    // },
    password: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: false,
        allowNull: false,
    },
}, {
    sequelize: database_config_1.default,
    tableName: "Admin",
});
