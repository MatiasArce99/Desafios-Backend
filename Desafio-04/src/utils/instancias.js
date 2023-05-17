import ProductManager from "../controller/ProductManager.js";
import CartsManager from "../controller/CartsManager.js";

export const listadoProductos = new ProductManager();
export const listadoCarrito = new CartsManager();