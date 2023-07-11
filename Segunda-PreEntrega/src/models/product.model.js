import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    
    title: String,
    description: String,
    price: Number,
    thumbail: String,
    code: String,
    stock: Number,

});

const productNodel = new mongoose.model('products', productSchema);

export default productNodel;