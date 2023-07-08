import mongoose from 'mongoose';
import productModel from '../models/product.model.js';
import products from '../data/productos.json' assert { type: 'json' };

await mongoose.connect(
    'mongodb+srv://matiasarce214:123@manager.tfxbp8u.mongodb.net/?retryWrites=true&w=majority'
);

const result = await productModel.insertMany(products);

console(result);