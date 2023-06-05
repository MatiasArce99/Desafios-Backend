import {cartModel} from '../models/cart.model.js';
import { productService } from './product.service.js';

class CartService {

    constructor(){

        this.model = cartModel;

    }

    async getAllCarts(){

        return await this.model.find().lean();

    }

    async addCart(cart){

        cart.products = [];
        return await this.model.create(cart);

    }

    async addProductCart(idProduct, idCart){

        const cart = await this.model.findOne({_id: idCart});
        const product = await productService.getProductById(idProduct);
        cart.products.push(product);
        return await cart.save();

    }
}

export const cartService = new CartService();