import products from '@/db/products';
import { z } from 'zod';

// Define a schema for the SKU
export const SkuSchema = z.object({
  code: z.string(),
  name: z.string(),
});

// Define a schema for the product
export const ProductSchema = z.object({
  id: z.number(),
  brand: z.string(),
  image: z.string(),
  style: z.string(),
  substyle: z.string(),
  abv: z.string(),
  origin: z.string(),
  information: z.string(),
  skus: z.array(SkuSchema),
});

export type ProductData = z.infer<typeof ProductSchema>;
