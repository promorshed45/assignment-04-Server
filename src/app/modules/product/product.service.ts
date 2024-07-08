import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";


// Create a New Product
const createdProduct = async (payload: TProduct) => {
    const result = await ProductModel.create(payload);
    return result;
  }



  export const ProductService = {
    createdProduct,
    
  }