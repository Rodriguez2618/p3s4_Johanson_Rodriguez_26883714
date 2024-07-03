import CategoriasModel from "../model/categorias.model.js";
import ProductosModel from "../model/productos.model.js";

export async function getCategorias() {
    const categorias = await CategoriasModel.findAll();

    return categorias;
}

export async function getCategoria(id) {
  const categorias = await CategoriasModel.findByPk(id);

  return categorias;
}

export async function createCategoria(categoria) {
    const newCategoria = CategoriasModel.build({ categoria });
    await newCategoria.save();

    return newCategoria;
}

export async function updateCategoria(id, categoria) {
    const category = await CategoriasModel.findByPk(id);

    category.categoria = categoria;

    await category.save();

    return category;
}

export async function deleteCategoria(id) {
    if(id === 1) return "No se puede eliminar la categoría de la base de datos";
    
    await CategoriasModel.destroy({ where: { id } });

    await ProductosModel.update({ categoria_id: 1 }, { where: { categoria_id: id } });
}