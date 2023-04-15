class ProductManager {

    #id = 0;

    constructor() {

        this.products = [];

    }

    getProducts() {

        return this.products;
    }

    addProducto(title, description, price, thumbnail, code, stock) {

        const producto = {

            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        const codigo = this.products.findIndex(
            (producto) => producto.code === code
        );

        const valores = Object.values(producto);

        if (valores.includes(undefined)) {

            console.log('Los campos deben estar completos');
            return;

        } else if (codigo != -1) {

            console.log(`El código ${producto.code} ya existe`);
            return;
        } else {

            producto.id = this.#getID();
            this.products.push(producto);
            return;

        }

    }

    #getID() {

        this.#id ++;
        return this.#id;
    }

    getProductByID(idProducto) {

        const productoIndex = this.products.findIndex(
            (producto) => producto.id === idProducto
        );

        if (productoIndex === -1) {

            console.log('El producto no existe');
        } else {

            console.log(this.products[productoIndex]);
        }
    }
}

const productManager = new ProductManager();
console.log(productManager.getProducts());

productManager.addProducto('Yerba Mate', 'Producto prueba', '800', 'sin imagen', 'aa78', '10');
productManager.addProducto('Galletas', 'Producto prueba', '200', 'Sin imagen', 'bb11', '5');
console.log(productManager.getProducts());

productManager.addProducto('Yerba Mate', 'Producto prueba', '800', 'sin imagen', 'aa78', '10');
console.log(productManager.getProducts());

productManager.getProductByID(3);