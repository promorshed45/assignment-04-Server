import { z } from "zod";

// Zod Validation
export const ProductValidation = z.object({
        name: z.string(),
        price: z.number(),
        description: z.string(),
        images: z.string(),
        category: z.string(),
        stock: z.number(),
})