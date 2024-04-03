import stockPrices from '@/db/stock-price';
import { sleep, randomDelay } from '@/common/utils';

//  This function is used to fetch the products from the "database"
//  and it simulates a network delay by using the sleep function
export async function getStockPriceById(id: string) {
  await sleep(randomDelay());

  // This solution helps with performance (If there is a lot of data,
  // it will be faster to access the data by id instead of linear search)
  // We could use dataMap[id] too
  const dataMap = new Map(Object.entries(stockPrices));
  return dataMap.get(id);
}