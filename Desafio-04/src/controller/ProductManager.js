import * as fs from 'fs';

class ProductManager {

    #id = 0;
    #products;

    constructor() {

        this.path = '../src/productos.json';
    }

    #getId() {

        this.#id++;
        return this.#id;
    }

    async addProduct(producto) {

        try {

            const productosActuales = await this.getProducts();
            

            const nuevoProducto = [ ...productosActuales, producto ];
           
            await fs.promises.writeFile(this.path, JSON.stringify(nuevoProducto));

        } catch (error) {

            console.log(`Error al agregar producto ${error}`);
        }
    }

    /*async addProduct(producto) {

        try {

            const valores = Object.values(producto);
            const codigo = this.producto.findIndex(
                (pro) => pro.code === code
            );

            if (valores.includes(undefined)) {

                console.log('Los campos deben estar completos');
                return;
            } else if (codigo != -1) {

                console.log(`El código ${producto.code} ya existe`);
                return;
            } else {

                const actualProducts = await this.getProducts();
                producto.id = this.#getId();
                actualProducts.push(producto);
                await fs.promises.writeFile(this.path, JSON.stringify(actualProducts));
            }

        } catch (error) {

            console.log(`${error}`);
        }
    }*/

    async getProducts() {

        try {

            const actualProducts = await fs.promises.readFile(this.path, 'utf-8');
            return JSON.parse(actualProducts);

        } catch (error) {

            console.log(`${error}`);
        }
    }

    async getProductById(idProducto) {

        try {

            let productoIndex = await this.getProducts();
            let filtrado = productoIndex.find((pro) => pro.id === idProducto); //Find busque elemento

            /*if (filtrado === undefined) {

                console.log('Error. El producto no existe');

            } else {

                console.log(`Producto con id ${idProducto}\n`);
                console.log(filtrado);
            }*/
            return filtrado;

        } catch (error) {

            console.log(`${error}`);
        }
    }

    async updateProduct(id, { ...producto }) {

        let productList = await this.getProducts();
        let productoModificar;

        try {

            productoModificar = productList.findIndex((pro) => pro.id === id);

            if (productoModificar) {

                productList[productoModificar] = { ...producto, id };
                await fs.promises.writeFile(this.path, JSON.stringify(productList));
                //console.log('Listado Actualizado\n');
                //console.log(productList);

            } else {

                console.log('No existe id del producto');
            }

        } catch (error) {

            console.log(`${error}`);
        }
    }

    async deleteProduct(idProducto) {

        try {

            let productoIndex = await this.getProducts();
            let filtrado = productoIndex.filter((pro) => pro.id != idProducto); //Filter devuelve array de elementos
            await fs.promises.writeFile(this.path, JSON.stringify(filtrado));

            /*if (filtrado === undefined) {

                console.log('Error. El producto no existe');

            } else {

                console.log(`Se elimina producto con id ${idProducto} \n`);
                console.log(filtrado);
            }*/

        } catch (error) {

            console.log(`${error}`);
        }
    }
};

//const productManager = new ProductManager('./productos.json');

/*const test = async () => {

    //console.log(await productManager.getProducts());

    /*try {

        await productManager.addProduct({

            title: 'Yerba Mate',
            description: 'Producto prueba',
            price: 1000,
            thumbnail: 'Sin imagen',
            code: 'abc123',
            stock: 25
        });

        await productManager.addProduct({

            title: 'Coca Cola',
            description: 'Producto prueba',
            price: 800,
            thumbnail: 'Sin imagen',
            code: 'cc111',
            stock: 50
        });

        await productManager.addProduct({

            title: 'Arroz primavera',
            description: 'Producto prueba',
            price: 350,
            thumbnail: 'Sin imagen',
            code: 'ddd22',
            stock: 40
        });

        await productManager.addProduct({

            title: 'Puré instantáneo',
            description: 'Producto prueba',
            price: 200,
            thumbnail: 'Sin imagen',
            code: 'ee777',
            stock: 50
        });

        await productManager.addProduct({

            title: 'Atún',
            description: 'Producto prueba',
            price: 500,
            thumbnail: 'Sin imagen',
            code: 'qq99',
            stock: 60
        });

        await productManager.addProduct({

            title: 'Dulce de Leche',
            description: 'Producto prueba',
            price: 250,
            thumbnail: 'Sin imagen',
            code: 'aa20',
            stock: 35
        });

        await productManager.addProduct({

            title: 'Café Instantáneo',
            description: 'Producto prueba',
            price: 600,
            thumbnail: 'Sin imagen',
            code: 'cx99',
            stock: 50
        });

        await productManager.addProduct({

            title: 'Queso Untable',
            description: 'Producto prueba',
            price: 350,
            thumbnail: 'Sin imagen',
            code: 'pq12',
            stock: 40
        });

        await productManager.addProduct({

            title: 'Semillas Pipa',
            description: 'Producto prueba',
            price: 200,
            thumbnail: 'Sin imagen',
            code: 'xv74',
            stock: 50
        });

        await productManager.addProduct({

            title: 'Leche en Polvo',
            description: 'Producto prueba',
            price: 900,
            thumbnail: 'Sin imagen',
            code: 'ty10',
            stock: 60
        });*/

//console.log(await productManager.getProducts());

//await productManager.getProductById(3);

/*await productManager.updateProduct(2, {

    title: 'Coca Cola',
    description: 'Producto prueba',
    price: 1000,
    thumbnail: 'Sin imagen',
    code: 'cc111',
    stock: 50
});

//await productManager.deleteProduct(4);

} catch (error) {

console.log('Algo salió mal');
}
}*/

export default ProductManager;

//test();