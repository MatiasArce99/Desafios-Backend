import mongoose from 'mongoose';
//import mongoosePaginate from 'mongoose-paginate-v2';

const productSchema = new mongoose.Schema({
    
    title: String,
    description: String,
    price: Number,
    thumbail: String,
    code: {
        type: String,
        unique: true,
        index: true
    },
    stock: Number,

});

//productSchema.plugin(mongoosePaginate);

const productModel = new mongoose.model('products', productSchema);

export default productModel;