import { formatCurrency } from '@/common/utils';
import {
  ButtonPrimary,
  ButtonSecondary,
  Container,
  TextClamp,
  ButtonTertiary,
  ImageWithFallback
} from '@/components';
import { ShoppingBagIcon } from '@/icons/ShoppingBagIcon';
import { Fragment, useEffect } from 'react';
import { ProductNoPriceData } from '@/types/products';
import useSWR from 'swr';
import { useQueryState } from 'nuqs';
import { StockData } from '@/types/stock';
import { FetchError } from '@/types/common';
import Skeleton from 'react-loading-skeleton';
import { toast } from 'react-toastify';

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

  useEffect(() => {
    if (data && data.error) {
      toast.error(data.error);
    }
  }, [data]);

  return (
    <Fragment>
      <section className="relative">
        <div className="relative mx-auto w-[240px] h-[240px] mt-auto">
          <ImageWithFallback
            src={image}
            alt={`detailed image for ${brand}`}
            sizes="(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 33vw"
          />
        </div>
      </section>
      <section className="py-8 bg-white rounded-tl-[48px] rounded-tr-[48px] mt-auto">
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
            <div className="flex-none">
              <ButtonSecondary
                onClick={() => {}}
                icon={<ShoppingBagIcon status="active" />}
              />
            </div>
            <ButtonPrimary
              disabled={!Boolean(size) || !Boolean(data?.stock)}
              onClick={() => {}}
              fullWith
            >
              Add to cart
            </ButtonPrimary>
          </footer>
        </Container>
      </section>
    </Fragment>
  );
};
