import products from '@/db/products';
import { ProductData } from '@/types/products';

//  This function is used to fetch the products from the "database"
//  and it simulates a network delay by using the sleep function
export async function getProducts(): Promise<Omit<ProductData, 'price'>[]> {
  return products;
}

export async function getProductById(id: string): Promise<Omit<ProductData, 'price'> | undefined> {
  const product = products.find((product) => product.id === parseInt(id));
  return product ?? undefined;
}
