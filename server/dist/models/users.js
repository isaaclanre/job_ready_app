"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInstance = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../config/database.config"));
const hire_1 = require("./hire");
class UserInstance extends sequelize_1.Model {
}
exports.UserInstance = UserInstance;
UserInstance.init({
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
        unique: true,
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
    password: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: false,
        allowNull: false,
    },
}, {
    sequelize: database_config_1.default,
    tableName: "Users",
});
UserInstance.hasMany(hire_1.GradeInstance, { foreignKey: 'userId',
    as: 'product'
}); //the foreign key is what's linking the UserInstance and the TodoInstance
hire_1.GradeInstance.belongsTo(UserInstance, { foreignKey: 'userId',
    as: 'user'
});
