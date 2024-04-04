import React, { MouseEvent } from 'react';
import { ButtonQuinary } from '@/components';
import { PlusIcon } from '@/icons/PlusIcon';
import Image from 'next/image';
import { ProductData } from '@/types/products';
import { cn } from '@/common/utils';
import Link from 'next/link';
import { useCartStore } from '@/stores/cart';

type Props = {
  isOdd?: boolean;
  data: ProductData;
}

export const ProductListItem = ({ isOdd, data }: Props) => {
  const { brand, price } = data;
  const { inc } = useCartStore();

  const handleAddProductToCart = () => {
    // Add product to cart
    // Simulation
    inc();
  };

  return (
    <article 
      className={cn("relative bg-white space-y-2", {
        'rounded-product-list--odd': isOdd,
        'rounded-product-list': !isOdd,
      })}
    >
      <Link href="/" className="space-y-2">
        <header>
          <h4 
            className={cn("text-base text-black-3 font-medium mt-3 ml-3", {
              'ml-5': isOdd
            })}
          >
            {brand}
          </h4>
        </header>
        <section>
          <div className="relative h-[145px] w-full">
            <Image
              src="/products/modelo-especial.png"
              alt="Your user avatar"
              className="rounded-full"
              fill
              objectFit="cover"
            />
          </div>
        </section>
      </Link>
      <footer className="flex justify-between items-center">
        <p className="text-black-3 ml-4 font-medium">${price}</p>
        <ButtonQuinary type="button" onClick={handleAddProductToCart} aria-label="add product to cart">
          <PlusIcon status="white" />
        </ButtonQuinary>
      </footer>
    </article>
  );
};
