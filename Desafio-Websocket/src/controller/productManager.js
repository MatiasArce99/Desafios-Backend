import * as fs from 'fs';

export default class ProductManager {

    constructor(path) {

        this.path = path;      

    }

    #getId() {

        let a = Date.now();
        return a;
    }

    async obtenerProducto() {

        try {

            const productosActuales = await fs.promises.readFile(this.path, 'utf-8');
            return JSON.parse(productosActuales);

        } catch (error) {

            console.log(`${error}`);

        }
    }

    async agregarProducto(producto) {

        try {

            const productosActuales = await this.obtenerProducto();
            producto.id = this.#getId();
            productosActuales.push(producto);

            await fs.promises.writeFile(this.path, JSON.stringify(productosActuales));

        } catch (error) {

            console.log(`${error}`);

        }
    }

    async obtenerProductoPorId(id) {

        try {

            const productosActuales = await this.obtenerProducto();
            let index = productosActuales.find((pro) => pro.id === id);

            return index;

        } catch (error) {

            console.log(`${error}`);

        }
    }

    async eliminarProducto(idProducto) {

        try {

            const productosActuales = await this.obtenerProducto();
            const index = productosActuales.filter((pro) => pro.id != idProducto);
            await fs.promises.writeFile(this.path, JSON.stringify(index));

        } catch (error) {

            console.log(`${error}`);

        }
    }

    async actualizarProducto(id, { ...producto }) {

        let productosActuales = await this.obtenerProducto();
        let productoModificar;

        try {

            productoModificar = productosActuales.findIndex((pro) => pro.id === id);

            if (productoModificar) {

                productosActuales[productoModificar] = { ...producto, id };
                await fs.promises.writeFile(this.path, JSON.stringify(productosActuales));

            } else {

                console.log('No existe ID del producto');

            }
        } catch (error) {

            console.log(`${error}`);

        }
    }

    async existeProducto(id){

        let productos = await this.obtenerProducto();
        return productos.find((prod) => prod.id === id);
        
    }
};