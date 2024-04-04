import { GetServerSideProps } from 'next';
import { getSlugElements } from '@/common/utils';
import { getProductById } from '@/common/api/products';
import { DetailsLayout } from '@/components/layouts/DetailsLayout';
import { ProductNoPriceData } from '@/types/products';
import { Maybe } from '@/types/common';
import { ProductDetails } from '@/components';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { pathNames } from '@/common/constants';
import { useEffect } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'

type Props = {
  product: Maybe<ProductNoPriceData>;
  errors?: string[];
};

export default function ProductPage({ product }: Props) {
  const router = useRouter();

  useEffect(() => {
    if (!product) {
      toast.error('Product not found');
      router.push(pathNames.home);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);
  
  if (product) {
    return (
      <DetailsLayout>
        <ProductDetails product={product} />
      </DetailsLayout>
    );
  }
  
  return null;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.productId as string;
  
  const productId = getSlugElements(slug);
  
  if (!productId) {
    return {
      redirect: {
        destination: '/404',
        statusCode: 307,
      }
    }
  }
  
  try {
    const productData = await getProductById(productId);

    if (productData) {
      return {
        props: {
          product: productData,
        },
      };
    } else {
      return {
        props: {
          product: null,
          error: 'Product not found'
        },
      };
    }

  } catch (_error) {
    return {
      props: {
        product: null,
        error: 'Product not found'
      },
    };
  }
};
