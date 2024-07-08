import { Request, Response } from "express";
import { ProductService } from "./product.service";



// Create a New Product
const createNewProduct = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const result = await ProductService.createdProduct(payload);

        // send respone
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Product created failed',
            error: err
        });
    }
}



export const ProductController = {
    createNewProduct,
}