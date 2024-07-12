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


// Retrieve a List of All Products
const getAllProduct = async (req: Request, res: Response) => {
    try {
        const result = await ProductService.getAllProduct();

        // send respone
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Products fetched failed',
            error: err
        });
    }
}


// Retrieve a List of Single Product
const getSingleProduct = async (req: Request, res: Response) => {
    try {

        const {id} = req.params;
        const result = await ProductService.getSingleProduct(id);

        // send respone
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Products fetched failed',
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

// Delete a Product
const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deleteProduct = await ProductService.deletedProduct(id);
        // send respone
        if (deleteProduct) {
            res.status(200).json({
                success: true,
                message: "Product deleted successfully!",
                data: deleteProduct,
            });
        } else {
            res.status(404).json({ message: 'Product deleted failed' });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Products deleted failed',
            error: err
        });
    }
}


// search a Product
const searchProduct = async (req: Request, res: Response) => {
    try {
        const { query } = req.query;
        const deleteProduct = await ProductService.searchProduct(query as string);
        // send respone
        if (deleteProduct) {
            res.status(200).json({
                success: true,
                message: "Product deleted successfully!",
                data: deleteProduct,
            });
        } else {
            res.status(404).json({ message: 'Product deleted failed' });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Products deleted failed',
            error: err
        });
    }
}


export const ProductController = {
    createNewProduct,
    updateProduct,
    deleteProduct,
    getAllProduct,
    getSingleProduct,
    searchProduct
}