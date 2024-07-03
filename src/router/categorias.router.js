import * as service from "../service/categorias.service.js";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
    const categorias = await service.getCategorias();
    res.render("categorias", { categorias });
});

router.get("/crear", async (req, res) => {
    res.render("crear_categoria");
});

router.get("/editar/:id", async (req, res) => {
    const { id } = req.params;
    const categoria = await service.getCategoria(id);
    res.render("editar_categoria", { categoria });
});

router.post("/", async (req, res) => {
    const { categoria } = req.body;
    await service.createCategoria(categoria);
    res.status(200).json({ ok: true });
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { categoria } = req.body;
    await service.updateCategoria(id, categoria);
    res.status(200).json({ ok: true });
}); 

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await service.deleteCategoria(id);
    res.status(200).json({ ok: true });
})

export default router;