import { productModel } from '../models/product.model';

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

        return await this.model.deleteOne({ id: idProduct });

    }

    async getProductById(idProduct) {

        return await this.model.findOne({ id: idProduct });

    }
}

export const productService = new ProductService();