import fs from 'fs';
import ProductManager from './ProductManager.js';

const listaProductos = new ProductManager();

class CartsManager {

    constructor() {

        this.path = '.src/carrito.json';
    }

    #validIdCart = async (id) => {

        let carts = await this.#readFileCarts();
        return carts.find((cart) => cart.id === id);

    };

    async getCart() {

        try {

            const actualProducts = await fs.promises.readFile(this.path, 'utf-8');
            return JSON.parse(actualProducts);

        } catch (error) {

            console.log(`${error}`);
        }
    }

    async addCart() {

        try {

            const productosActuales = await this.getCart();

            const cart = {

                productos: [],

            };

            productosActuales.push(cart);
            await fs.promises.writeFile(this.path, JSON.stringify(productosActuales));
            return productosActuales;

        } catch (error) {

            console.log(`${error}`);

        }
    }
    
}