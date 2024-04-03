import { z } from 'zod';

// Define a schema for the Stock
export const StockScchema = z.object({
  stock: z.number(),
  price: z.number(),
});

// Define a schema for the product
export type StockData = z.infer<typeof StockScchema>;
