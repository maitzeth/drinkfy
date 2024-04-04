import React from 'react';
import { ButtonQuinary } from '@/components';
import { PlusIcon } from '@/icons/PlusIcon';
import Image from 'next/image';
import { ProductData } from '@/types/products';
import { cn } from '@/common/utils';

type Props = {
  isOdd?: boolean;
  data: ProductData;
}

export const ProductListItem = ({ isOdd, data }: Props) => {
  console.log(data);
  const { brand } = data;

  return (
    <article className={cn("relative bg-white space-y-2", {
      'rounded-product-list--odd': isOdd,
      'rounded-product-list': !isOdd,
    })}>
      <header>
        <h4 className={cn("text-base text-black-3 font-medium mt-3 ml-3", {
          'ml-5': isOdd
        })}>{brand}</h4>
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
      <footer className="flex justify-between items-center">
        <p className="text-black-3 ml-4">$28.65</p>
        <ButtonQuinary onClick={() => console.log('plus')}>
          <PlusIcon />
        </ButtonQuinary>
      </footer>
    </article>
  );
};
