import fs from 'fs';
import ProductManager from './ProductManager.js';

const pm = new ProductManager();

export default class CartsManager {

    constructor() {

        this.path = '../src/carrito.json';
        this.producto = [];
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

    async getCart() {

        try {

            const actualCarts = await fs.promises.readFile(this.path, 'utf-8');
            return JSON.parse(actualCarts);

        } catch (error) {

            console.log(`Error al obtener productos ${error}`);
        }
    }

    async getCartById(idCarrito){

        try {
            
            let carritoIndex = await this.getCart();
            let filtrado = carritoIndex.find((cart) => cart.id === idCarrito);
            return filtrado;
            
        } catch (error) {
            
            console.log(`Error al encontrar ID del producto ${error}`);
        }
    }

    async addProductToCart(cid, pid){
        
        let validCart = await this.validarCarrito(cid);

        if(validCart === undefined){

            console.log('Carrito no encontrado');

        }

        let validProduct = await this.validarProducto();

        if(validProduct === undefined){

            console.log('Producto no encontrado');

        }

        const carrito = await this.getCart();
        
        let cartFilter = await carrito.filter((cart) => cart.id != cid);
        
        if(validCart.products.some((pro) => pro.id === pid)){
            
            let productExist = validCart.products.find(
                (pro) => pro.id === pid
            );

            productExist.quantity++;
            let newCart = [validCart, ...cartFilter];
            fs.promises.writeFile(this.path, JSON.stringify(newCart));

        } else {
            
            validCart.products.push({
                id: validProduct.id,
                quantity: 1
            });

            let newCart = [validCart, ...cartFilter];
            fs.promises.writeFile(this.path, JSON.stringify(newCart));
            return 'Producto agregado al carrito';
            
        }
    }

    async validarCarrito(idCarrito){

        try {
            
            let carritoIndex = await this.getCart();
            return filtrado = carritoIndex.find((cart) => cart.id === idCarrito);

        } catch (error) {
            
            console.log(`Error al encontrar el ID ${error}`);

        }
    }

    async validarProducto(idProducto){

        try {
            
            let products = await pm.getProducts();
            return await products.find((pro) => pro.id === idProducto);

        } catch (error) {
            
            console.log(`Error al encontrar el ID ${error}`);
        }
    }
}