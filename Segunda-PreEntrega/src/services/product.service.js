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

    async removeProduct(idProduct) {

        return await this.model.deleteOne({ _id: idProduct });

    }

    async getProductById(idProduct) {

        return await this.model.findOne({ _id: idProduct });

    }
}

export const productService = new ProductService();