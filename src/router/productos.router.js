import * as service from "../service/productos.service.js";
import * as categoriasService from "../service/categorias.service.js";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
    const productos = await service.getProductos();
    const categorias = await categoriasService.getCategorias();

    res.render("productos", { productos, categorias });
});

router.get("/crear", async (req, res) => {
    const categorias = await categoriasService.getCategorias();

    res.render("crear_producto", { categorias });
});

router.get("/editar/:id", async (req, res) => {
    const { id } = req.params;
    const producto = await service.getProducto(id);
    const categorias = await categoriasService.getCategorias();

    res.render("editar_producto", { producto, categorias });
});

router.post("/", async (req, res) => {
    const { codigo, nombre_producto, precio, existencia_actual, categoria_id } = req.body;
    await service.createProducto({
      codigo,
      nombre_producto,
      precio,
      existencia_actual,
      categoria_id,
    });
    res.status(200).json({ ok: true });
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { codigo, nombre_producto, precio, existencia_actual, categoria_id } = req.body;
    await service.updateProducto(id, {
      codigo,
      nombre_producto,
      precio,
      existencia_actual,
      categoria_id,
    });
    res.status(200).json({ ok: true });
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await service.deleteProducto(id);
    res.status(200).json({ ok: true });
});

export default router;
