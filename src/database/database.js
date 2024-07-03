import { Sequelize } from "sequelize"
import SQLite from "sqlite3"

// Conexion a la base de datos
const db = new Sequelize("db", "", "", {
  dialect: "sqlite",
  storage: "./db.sqlite3",
  dialectOptions: {
    mode: SQLite.OPEN_READWRITE | SQLite.OPEN_CREATE,
  },
  logging: false
})

// Verificando que se establezca la base de datos correctamente
try {
  db.authenticate();
  console.log("Connection has been established successfully.")
} catch (error) {
  console.error("Unable to connect to the database:", error)
}

export default db
