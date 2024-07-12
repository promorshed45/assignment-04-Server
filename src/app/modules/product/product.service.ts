import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";


// Create a New Product
const createdProduct = async (payload: TProduct) => {
    const result = await ProductModel.create(payload);
    return result;
  }

// Retrieve a List of All Products
const getAllProduct = async () => {
  const products = await ProductModel.find();
  return products;
};


// Retrieve a List of Single Products
const getSingleProduct = async (id: string) => {
  const products = await ProductModel.findById({_id: id});
  return products;
};


// Update Product Information
const updateProduct = async (id: string, updateProduct: TProduct) => {
  const result = await ProductModel.findByIdAndUpdate({ _id: id }, updateProduct, {new: true});
  return result;
}


// Delete a Product
const deletedProduct = async (id: string) => {
  const result = await ProductModel.deleteOne({ _id: id });
  return result;
}

// search a Product
const searchProduct = async (query: string) => {
  
  const result = await ProductModel.find({ name: { $regex: query, $options: 'i' } });
  return result;
}

  export const ProductService = {
    createdProduct,
    updateProduct,
    deletedProduct,
    getAllProduct,
    getSingleProduct,
    searchProduct
    
  }