import { DataTypes } from "sequelize";
import db from "../database/database.js";

// Modelo de categorias en la base de datos
const CategoriasModel = db.define("categorias", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    hooks: {
        afterSync: async () => {
            if (await CategoriasModel.count() === 0) {
                await CategoriasModel.build({ categoria: "General" }).save();
            }
        }
    }
});

export default CategoriasModel;