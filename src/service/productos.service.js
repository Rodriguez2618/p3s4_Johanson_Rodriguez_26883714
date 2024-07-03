import ProductosModel from "../model/productos.model.js";

export async function getProductos() {
    const productos = await ProductosModel.findAll();
    return productos;
}

export async function getProducto(id) {
    const producto = await ProductosModel.findByPk(id);
    return producto;
}

export async function createProducto(producto) {
    const nuevoProducto = ProductosModel.build({ ...producto });
    await nuevoProducto.save();
    return nuevoProducto;
}

export async function updateProducto(id, producto) {
    const product = await ProductosModel.findByPk(id);
    const updated = await product.update({ ...producto });
    return updated;
}

export async function deleteProducto(id) {
    await ProductosModel.destroy({ where: { id } });
}