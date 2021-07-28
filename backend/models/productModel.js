import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    image:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required: true,
        index: true
    },
    brand:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required:true 
    },
    quantity:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        default: 1,
    },
    reviews:{
        type: Number,
        default:0, 
    },
    
},{timestamp: true});
const productModel = mongoose.model('productModel',productSchema );

 
export default productModel;