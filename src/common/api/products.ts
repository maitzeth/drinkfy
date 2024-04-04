import products from '@/db/products';
import { sleep, randomDelay } from '@/common/utils';
import { ProductData } from '@/types/products';

//  This function is used to fetch the products from the "database"
//  and it simulates a network delay by using the sleep function
export async function getProducts(): Promise<Omit<ProductData, 'price'>[]> {
  await sleep(randomDelay());
  return products;
}
