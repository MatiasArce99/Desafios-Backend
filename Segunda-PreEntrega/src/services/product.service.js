import productModel from '../models/product.model.js';

class ProductService {

    constructor(){

        this.model = productModel;

    }

    async getAll(){

        return await this.model.find();

    }
}

const productService = new ProductService();

export default productService;