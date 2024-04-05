import type { NextApiRequest, NextApiResponse } from "next";
import { getStockPriceById } from '@/common/api/stock';

type ReqData = {
  id: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { id } = req.query as ReqData;
    const stock = await getStockPriceById(id);
    res.json(JSON.parse(JSON.stringify(stock)))
  } catch (err) {
    const error = err as Error;

    res.status(400).json({
      stock: 0,
      price: 0,
      error: error.message,
    });
  }
}
