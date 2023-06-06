import { cartModel } from '../models/cart.model.js'
import { productService } from './product.service.js'

class CartService {

    constructor(){

        this.model = cartModel;

    }

    async getAllCarts(){

        return await this.model.find().lean();

    }

    async addCart(cart){

        return await this.model.create(cart);

    }

    async addProductCart(idCart, idProduct){

        const cart = await this.model.findOne({id: idCart});
        
    }
}