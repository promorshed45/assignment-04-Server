import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post(
    "/",
    ProductController.createNewProduct
);
router.put(
    "/:id",
    ProductController.updateProduct
);

export const ProductRoute = router;

