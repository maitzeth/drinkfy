import { formatCurrency } from '@/common/utils';
import {
  ButtonPrimary,
  ButtonSecondary,
  Container,
  TextClamp,
  ButtonTertiary
} from '@/components';
import { ShoppingBagIcon } from '@/icons/ShoppingBagIcon';
import { Fragment } from 'react';
import { ProductNoPriceData } from '@/types/products';
import { ProductImage } from './ProductImage';
import useSWR from 'swr';
import { useQueryState } from 'nuqs';
import { StockData } from '@/types/stock';
import { FetchError } from '@/types/common';
import Skeleton from 'react-loading-skeleton';

type Props = {
  product: ProductNoPriceData;
}

type StockPriceResponse = StockData & FetchError;

export const ProductDetails = ({ product }: Props) => {
  const [size, setSize] = useQueryState('size')
  const { image, brand, origin, information, skus } = product;

  const { data, isLoading } = useSWR<StockPriceResponse>(size ? `/api/stock-price/${size}` : null, {
    refreshInterval: 5000,
  });

  return (
    <Fragment>
      <section className="relative">
        <ProductImage src={image} productBrand={brand} />
      </section>
      <section className="py-8 bg-white rounded-tl-[48px] rounded-tr-[48px]">
        <Container className="space-y-6">
          <header className="flex justify-between">
            <div className="space-y-1">
              <h1 className="text-2xl text-black font-bold">{brand}</h1>
              <div className="flex items-center gap-2">
                <span className="text-sm text-black-2">Origin: {origin}</span>
                <span className="h-[10px] w-[1px] bg-black-2" />
                {isLoading ? (
                  <Skeleton width={80} height={40} />
                ) : (
                  <span className="text-sm text-black-2">Stock: {data ? data.stock :  0}</span>
                )}
              </div>
            </div>
            <div>
              {isLoading ? (
                <Skeleton width={80} height={40} />
              ) : (
                <p className="text-2xl text-accent font-bold">{formatCurrency(data ? data.price : 0)}</p>
              )}
            </div>
          </header>
          <section className="space-y-2">
            <h2 className="text-lg text-black-3 font-bold">Description</h2>
            <TextClamp text={information} />
          </section>
          <section className="space-y-3">
            <h2 className="text-lg text-black-3 font-bold">Size</h2>
            <div className="flex flex-wrap gap-4">
              {skus.map((sku, index) => {
                return (
                  <ButtonTertiary
                    key={`sku-item-${index}`}
                    isSelected={size === sku.code}
                    onClick={() => setSize(sku.code)}
                  >
                    {sku.name}
                  </ButtonTertiary>
                );
              })}
            </div>
          </section>
          <footer className="flex gap-5">
            <ButtonSecondary onClick={() => {}} icon={<ShoppingBagIcon status="active" />} />
            <ButtonPrimary disabled={!Boolean(size)} onClick={() => {}}>Add to cart</ButtonPrimary>
          </footer>
        </Container>
      </section>
    </Fragment>
  );
};
