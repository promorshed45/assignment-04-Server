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

// Update Product Information
const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const updatedProduct = await ProductService.updateProduct(id, payload);
        // send respone
        if (updatedProduct) {
            res.status(200).json({
                success: true,
                message: "Product updated successfully!",
                data: updatedProduct,
            });
        } else {
            res.status(404).json({ message: 'Product updated failed' });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Products updated failed',
            error: err
        });
    }
}

export const ProductController = {
    createNewProduct,
    updateProduct,
}