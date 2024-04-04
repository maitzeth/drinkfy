import { formatCurrency } from '@/common/utils';
import {
  ButtonPrimary,
  ButtonSecondary,
  Container,
  TextClamp,
  ButtonTertiary,
  ImageWithFallback,
  ButtonDefault
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
import { useRouter } from 'next/navigation';
import { pathNames } from '@/common/constants';

type Props = {
  product: ProductNoPriceData;
}

type StockPriceResponse = StockData & FetchError;

export const ProductDetails = ({ product }: Props) => {
  const router = useRouter();
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

  const productInformation = (
    <section className="py-8 xl:px-5 bg-white rounded-tl-[48px] rounded-tr-[48px] xl:rounded-xl">
      <Container className="space-y-6">
        <header className="flex justify-between xl:items-center">
          <div className="space-y-1">
            <h1 className="text-2xl text-black font-bold">{brand}</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-black-2">Origin: {origin}</span>
              <span className="h-[10px] w-[1px] bg-black-2" />
              {isLoading ? (
                <Skeleton width={80} height={25} />
              ) : (
                <span className="text-sm text-black-2">Stock: {data ? data.stock :  0}</span>
              )}
            </div>
          </div>
          <div>
            {isLoading ? (
              <Skeleton width={80} height={25} />
            ) : (
              <p className="text-2xl xl:text-4xl text-accent font-bold">{formatCurrency(data ? data.price : 0)}</p>
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
        <footer className="flex gap-5 xl:border-t xl:border-t-gray-100 xl:pt-4">
          <div className="flex-none xl:hidden">
            <ButtonSecondary
              onClick={() => {}}
              icon={<ShoppingBagIcon status="active" />}
            />
          </div>
          <div className="w-full xl:max-w-56">
            <ButtonPrimary
              disabled={!Boolean(size) || !Boolean(data?.stock)}
              onClick={() => {}}
              fullWith
            >
              Add to cart
            </ButtonPrimary>
          </div>
        </footer>
      </Container>
    </section>
  );

  const content = (
    <Fragment>
      <div className="hidden xl:block">
        <ButtonDefault onClick={() => router.push(pathNames.home)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="11" width="15" height="1.5" fill="#323232"/>
            <path d="M11 5.20001L4 11.7L11 18.2" stroke="#323232" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </ButtonDefault>
      </div>
      <div className="flex flex-col flex-1 xl:flex-row">
        <section className="relative flex-1 md:flex md:items-center md:justify-center">
          <div className="relative mx-auto w-[240px] h-[240px] md:w-[400px] md:h-[400px]">
            <ImageWithFallback
              src={image}
              alt={`detailed image for ${brand}`}
              sizes="(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 33vw"
            />
          </div>
        </section>
        {productInformation}
      </div>
    </Fragment>
  );

  return (
    <>
      <article className="flex flex-col flex-1 xl:hidden xl:flex-none">
        {content}
      </article>
      <Container tag="article" className="hidden xl:flex">
        {content}
      </Container>
    </>
  );
};
