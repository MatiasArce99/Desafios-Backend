import mongoose from 'mongoose';

export const productSchema = new mongoose.Schema({
    
    title: String,
    description: String,
    price: Number,
    thumbail: String,
    code: String,
    stock: Number

});

const productModel = new mongoose.model('products', productSchema);

export default productModel;