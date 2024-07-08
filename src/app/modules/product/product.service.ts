import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";


// Create a New Product
const createdProduct = async (payload: TProduct) => {
    const result = await ProductModel.create(payload);
    return result;
  }


// Update Product Information
const updateProduct = async (id: string, updateProduct: TProduct) => {
  const result = await ProductModel.findByIdAndUpdate({ _id: id }, updateProduct, {new: true});
  return result;
}


  export const ProductService = {
    createdProduct,
    updateProduct
    
  }