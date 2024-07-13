import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post(
    "/",
    ProductController.createNewProduct
);
router.get(
    "/",
    ProductController.getAllProduct
);
router.get(
    "/",
    ProductController.searchProduct
);
router.get(
    "/:id",
    ProductController.getSingleProduct
);
router.put(
    "/update/:id",
    ProductController.updateProduct
);
router.delete(
    "/:id",
    ProductController.deleteProduct
);

export const ProductRoute = router;

