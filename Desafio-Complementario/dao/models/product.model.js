import mongoose from 'mongoose';

export const productSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    code: {
        type: String,
        required: true,
        unique: true
    },

    thumbail: {
        type: String,
        required: true
    },

    stock: {
        type: Number,
        required: true
    }

});

export const productModel = mongoose.model('products', productSchema);