import { DataTypes, Model } from "sequelize";
import db from "../config/database.config";
import {GradeInstance} from "./hire"

interface UserAttributes {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  address: string;
  country: string;
  password: string;

}

export class UserInstance extends Model<UserAttributes> {}

UserInstance.init(
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
      unique: true,
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
    password: {
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "Users",
  }
);


UserInstance.hasMany(GradeInstance, {foreignKey:'userId',
as:'product'
}) //the foreign key is what's linking the UserInstance and the TodoInstance

GradeInstance.belongsTo(UserInstance, {foreignKey:'userId',
as:'user'
})
