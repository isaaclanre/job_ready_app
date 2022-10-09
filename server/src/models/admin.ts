import { DataTypes, Model } from "sequelize";
import db from "../config/database.config";

interface AdminAttributes {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  address: string;
  country: string;
  // reactScore: number;
  // nodeScore: number;
  // javaScore: number;
  // csharpScore: number;
  password: string;

}

export class AdminInstance extends Model<AdminAttributes> {}

AdminInstance.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
    },
    phone: {
      type: DataTypes.NUMBER,
      primaryKey: false,
      allowNull: false,
    },
      address: {
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "Admin",
  }
);
