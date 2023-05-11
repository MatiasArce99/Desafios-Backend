import fs from 'fs';

class CartManager {

    constructor() {

        this.path = './src/carrito.json';
        this.producto = [];
        //fs.promises.writeFile(this.path, JSON.stringify(this.producto));
    }

    async addCart(producto) {

        try {

            const productList = await this.getProduct();
            const products = [...productList, producto];
            await fs.promises.writeFile(this.path, JSON.stringify(products));

        } catch (error) {

            console.log(`Error al agregar producto al carrito ${error}`);
        }
    }

    async getProduct() {

        try {

            const actualProducts = await fs.promises.readFile(this.path, 'utf-8');
            return JSON.parse(actualProducts);

        } catch (error) {

            console.log(`Error al obtener productos ${error}`);
        }
    }
}

export default CartManager;