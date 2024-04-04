import React, { MouseEvent } from 'react';
import { ButtonQuinary } from '@/components';
import { PlusIcon } from '@/icons/PlusIcon';
import Image from 'next/image';
import { ProductData } from '@/types/products';
import { cn } from '@/common/utils';
import Link from 'next/link';
import { useCartStore } from '@/stores/cart';
import { parseToUrl, formatCurrency } from '@/common/utils';
import { ImageWithFallback } from '@/components/ImageWithFallback';

type Props = {
  isOdd?: boolean;
  data: ProductData;
}

const titleBaseClassName = 'text-base text-black-3 font-medium mt-3 md:mt-0 ml-3';

export const ProductListItem = ({ isOdd, data }: Props) => {
  const { brand, price, id, image } = data;
  const { inc } = useCartStore();

  const handleAddProductToCart = () => {
    // Add product to cart
    // Simulation
    inc();
  };

  return (
    <article 
      className={cn("relative bg-white space-y-2", {
        'rounded-product-list--odd md:rounded-xl': isOdd,
        'rounded-product-list md:rounded-xl': !isOdd,
      })}
    >
      <Link href={`${id}_${parseToUrl(brand)}`} className="space-y-2 focus">
        <header>
          <h4 
            className={cn(titleBaseClassName, "block md:hidden", {
              'ml-5': isOdd
            })}
          >
            {brand}
          </h4>
        </header>
        <section>
          <div className="relative h-[145px] w-[145px] md:w-[220px] md:h-[220px] mx-auto">
            <ImageWithFallback
              src={image}
              alt={`Image of ${brand} product`}
              sizes="(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 33vw"
            />
          </div>
        </section>
      </Link>
      <footer className="flex justify-between items-center md:items-end">
        <div>
          <h4 className={cn(titleBaseClassName, "hidden md:block")}>
            {brand}
          </h4>
          <p className="text-black-3 ml-4 md:ml-3 font-medium">{formatCurrency(price)}</p>
        </div>
        <ButtonQuinary type="button" onClick={handleAddProductToCart} aria-label="add product to cart">
          <PlusIcon status="white" />
        </ButtonQuinary>
      </footer>
    </article>
  );
};
