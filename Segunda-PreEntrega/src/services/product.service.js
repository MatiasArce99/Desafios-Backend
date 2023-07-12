import productModel from '../models/product.model.js';

class ProductService {

    constructor(){

        this.model = productModel;

    }

    async getProducts(limit = 10000, page = 1){

        return await this.model.find();

    }
}

const productService = new ProductService();

export default productService;