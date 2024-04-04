import React, { useState } from 'react';
import Image from 'next/image';

type Props = {
  src: string;
  sizes: string;
  alt: string;
};

export const ImageWithFallback = ({ src, alt, sizes }: Props) => {
    const [displayErrorImg, setDisplayErrorImg] = useState(false);

    return (
      <Image
        src={displayErrorImg ? '/products/not-found.png' : src}
        alt={alt}
        className="mx-auto"
        onError={() => setDisplayErrorImg(true)}
        fill
        sizes={sizes}
      />
    );
};
