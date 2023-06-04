import { productModel } from '../models/product.model.js';

class ProductService {

    constructor() {

        this.model = productModel;

    }

    async getAllProducts() {

        return await this.model.find().lean();

    }

    async addProduct(product) {

        return await this.model.create(product);

    }

    async removeProduct(productId) {

        return await this.model.deleteOne({ _id: productId });
    }

    async getProductById(productId) {

        return await this.model.findOne({ _id: productId });

    }
}

export const productService = new ProductService();