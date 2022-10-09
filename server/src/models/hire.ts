import { DataTypes, Model } from "sequelize";
import db from '../config/database.config'

interface GradeAttributes {
    id: string;
    reactScore: number;
    nodeScore: number;
    javaScore: number;
    csharpScore: number;
    // password: string;
}

export class GradeInstance extends Model<GradeAttributes> {}

GradeInstance.init({
    id:{
        type:DataTypes.UUIDV4,
        primaryKey:true,
        allowNull:false
    },
      reactScore:{
        type:DataTypes.NUMBER,
        allowNull:true
      },
      nodeScore:{
        type:DataTypes.NUMBER,
        allowNull:true
      },
      javaScore:{
        type:DataTypes.NUMBER,
        allowNull:true
      },
      csharpScore:{
        type:DataTypes.NUMBER,
        allowNull:true
      },
  
}, {
    sequelize:db,
    tableName:'grade'
})