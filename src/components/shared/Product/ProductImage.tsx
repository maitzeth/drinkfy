import React from 'react';
import Image from 'next/image';

type Props = {
  src: string;
  productBrand: string;
}

export const ProductImage = ({ src, productBrand }: Props) => {
  return (
    <Image
      src={src}
      height={240}
      width={240}
      alt={`Product image of ${productBrand} brand`}
      className="mx-auto"
    />
  );
};
