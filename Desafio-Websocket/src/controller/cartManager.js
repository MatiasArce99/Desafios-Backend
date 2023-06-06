import * as fs from 'fs';
import ProductManager from './productManager';

const productos = new ProductManager('./src/productos.json');

export default class CartManager {

    constructor(path) {

        this.path = path;

    }

    #getId() {

        let a = Date.now();
        return a;

    }

    async leerCarrito() {

        let carts = await fs.promises.readFile(this.path, 'utf-8');
        return JSON.parse(carts);

    }

    async escribirCarrito(carts) {

        await fs.promises.writeFile(this.path, JSON.stringify(carts));

    }

    async existeCarrito(id) {

        let carts = await this.leerCarrito();
        return carts.find((carrito) => carrito.id === id);

    }

    async carritoPorId(id) {

        let cartById = await this.existeCarrito(id);

        if (!cartById) {

            return 'Carrito no encontrado';

        }

        return cartById;
    }

    async agregarCarrito() {

        try {

            let cartsOld = await this.leerCarrito();
            let id = this.#getId();
            let cartsConcatenado = [{ id: id, products: [] }, ...cartsOld];
            await this.escribirCarrito(cartsConcatenado);

            return `Carrito agregado`;

        } catch (error) {

            console.log(`${error}`);

        }
    }

    async agregarProductoEnCarrito(cartId, productId) {

        try {

            let cartById = await this.existeCarrito(cartId);

            if (!cartById) return 'Carrito no encontrado';

            let productById = await productos.existeProducto(productId);

            if (!productById) return 'Producto no encontrado';

            let cartAll = await this.leerCarrito();
            let cartFilter = cartAll.filter((cart) => cart.id != cartId);

            if (cartById.products.some((prod) => prod.id === productId)) {

                let productoEnCarrito = cartById.products.find((prod) => prod.id === productId);
                productoEnCarrito.quantity++;
                let cartConcat = [productoEnCarrito, ...cartFilter];

                await fs.promises.writeFile(this.path, JSON.stringify(cartConcat));

                return 'Producto sumado al carrito';
            }

            let cartConcat = [{ id: cartId, products: [{ id: productById.id, quantity: 1 }] }, ...cartFilter];

            await fs.promises.writeFile(this.path, JSON.stringify(cartConcat));

            return 'Producto agregado al carrito';

        } catch (error) {

        }
    }
};