import { DataTypes } from "sequelize"
import db from "../database/database.js"

// Modelo de productos en la base de datos
const ProductosModel = db.define("productos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  codigo: {
    type: DataTypes.STRING,
  },
  nombre_producto: {
    type: DataTypes.DECIMAL,
  },
  precio: {
    type: DataTypes.DECIMAL,
  },
  existencia_actual: {
    type: DataTypes.DECIMAL,
  },
  categoria_id: {
    type: DataTypes.STRING,
  },
});

export default ProductosModel;
