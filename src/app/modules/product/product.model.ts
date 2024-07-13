import { Schema, model } from 'mongoose';
import { TProduct } from "./product.interface";


// Product Schema
export const productSchema = new Schema<TProduct>({
    name: {
        type: String,
        // required: [true, 'Product name is required']
    },
    price: {
        type: Number,
        // required: [true, 'Product price is required']
    },
    description: { 
        type: String, 
        // required: [true, 'Product description is required'] 
        },
    image: { 
        type: String, 
        // required: [true, 'Product image is required'] 
        },
        category: { 
        type: String, 
        // required: [true, 'Product category is required'] 
        },
    stock: { 
        type: Number, 
        // required: [true, 'Product stock is required'] 
        },
    quantity: { 
        type: Number, 
        },
},{
    timestamps: true
});

// Create model
export const ProductModel = model<TProduct>('Product', productSchema);