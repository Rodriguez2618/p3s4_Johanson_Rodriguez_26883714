import express from 'express';
import { config } from 'dotenv';
import { fileURLToPath } from "url";
import path, { dirname } from "path";

// Modelos
import ProductosModel from './src/model/productos.model.js';
import CategoriasModel from "./src/model/categorias.model.js";
import db from './src/database/database.js';

import ProductRouter from './src/router/productos.router.js';
import CategoriasRouter from './src/router/categorias.router.js';

import './src/database/database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Cargamos las variables de entorno
config()

// Variable principal de la aplicación
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static(path.join(__dirname + '/public')))
app.set(express.static(path.join(__dirname + 'views')))
app.set("view engine", "ejs");


new Promise((resolve, reject) => {
    db.sync()
    ProductosModel.sync()
    CategoriasModel.sync()
    resolve()
})

// Rutas
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/', (req, res) => {
    res.render('index')
})
app.use("/productos", ProductRouter);
app.use("/categorias", CategoriasRouter);

// Iniciamos el servidor
app.listen(3000, () => {
    console.log('Server running on "http://localhost:3000"')
})