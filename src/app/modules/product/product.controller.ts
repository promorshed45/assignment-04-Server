import { ProductService } from "./product.service";
import catchAsync from "../../utilis/catchAsync";
import sendResponse from "../../utilis/sendResponse";



// Create a New Product
const createNewProduct = catchAsync(async (req, res) => {
    const payload = req.body;
    const result = await ProductService.createdProduct(payload);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Product created successfully!",
        data: result,
    })
})



// Retrieve a List of All Products
const getAllProduct = catchAsync(async (req, res) => {
    const query = req.query;
    const result = await ProductService.getAllProduct(query);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Products fetched successfully!",
        data: result,
    })
})





// Retrieve a List of Single Product
const getSingleProduct = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProductService.getSingleProduct(id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Products fetched successfully!",
        data: result,
    })
})



// Update Product Information
const updateProduct = catchAsync(async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    const updatedProduct = await ProductService.updateProduct(id, payload);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Product updated successfully!",
        data: updatedProduct,
    })
})


// Delete a Product
const deleteProduct = catchAsync(async (req, res) => {
    const { id } = req.params;
    const deleteProduct = await ProductService.deletedProduct(id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Product deleted successfully!",
        data: deleteProduct,
    })
})


// search a Product
const searchProduct = catchAsync(async (req, res) => {
    const { query } = req.query;
    const searchProduct = await ProductService.searchProduct(query as string);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Product deleted successfully!",
        data: searchProduct,
    })
})


export const ProductController = {
    createNewProduct,
    updateProduct,
    deleteProduct,
    getAllProduct,
    getSingleProduct,
    searchProduct
}