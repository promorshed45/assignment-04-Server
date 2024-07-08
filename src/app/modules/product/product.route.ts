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
router.put(
    "/:id",
    ProductController.updateProduct
);
router.delete(
    "/:id",
    ProductController.deleteProduct
);

export const ProductRoute = router;

