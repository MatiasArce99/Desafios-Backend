const fs = require('fs');

class ProductManager {

    #id = 0;

    constructor(path) {

        this.path = path;
        this.producto = [];
        fs.promises.writeFile(this.path, JSON.stringify(this.producto));
    }

    #getId() {

        this.#id++;
        return this.#id;
    }

    async addProduct(producto) {

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
    }

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
            let filtrado = productoIndex.find((pro) => pro.id === idProducto);

            if (filtrado === undefined) {

                console.log('Error. El producto no existe');

            } else {

                console.log(`Producto con id ${idProducto}\n`);
                console.log(filtrado);
            }



        } catch (error) {

            console.log(`${error}`);
        }
    }

    async updateProduct(idProducto) {

        try {

            const listadoProductos = await this.getProducts();

            const productoIndex = listadoProductos.find((pro) => pro.id === idProducto);

            if (productoIndex === undefined) {

                console.log('No existe el producto');
                return;
            }

            const productoVector = [productoIndex];
            const modificacion = productoVector.map((elemento) => {

                return{
                    title: elemento.title,
                    description: elemento.description,
                    price: elemento.price * 1.21,
                    thumbnail: elemento.thumbnail,
                    code: elemento.code,
                    stock: elemento.stock,
                    id: 2
                }
            });

            console.log('Producto modificado\n');
            console.log(modificacion);
            listadoProductos.push(modificacion);
            await fs.promises.writeFile(this.path, JSON.stringify(listadoProductos));

            const listadoFinal = await this.getProducts();
            console.log('Lista actualizada\n');
            console.log(listadoFinal);

        } catch (error) {

            console.log(`${error}`);
        }
    }

    async deleteProduct(idProducto) {

        try {

            let productoIndex = await this.getProducts();
            let filtrado = productoIndex.filter((pro) => pro.id != idProducto);
            await fs.promises.writeFile(this.path, JSON.stringify(filtrado));

            if (filtrado === undefined) {

                console.log('Error. El producto no existe');

            } else {

                console.log(`Se elimina producto con id ${idProducto} \n`);
                console.log(filtrado);
            }

        } catch (error) {

            console.log(`${error}`);
        }
    }
};

const productManager = new ProductManager('./productos.json');

const test = async () => {

    console.log(await productManager.getProducts());

    try {

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
        })

        console.log(await productManager.getProducts());

        await productManager.getProductById(3);

        await productManager.updateProduct(2);

        await productManager.deleteProduct(4);        

    } catch (error) {

        console.log('Algo salió mal');
    }
}

test();