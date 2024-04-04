import { GetServerSideProps } from 'next';
import { getSlugElements } from '@/common/utils';
import { getProductById } from '@/common/api/products';
import { DetailsLayout } from '@/pages/layouts/DetailsLayout';
import { ProductNoPriceData } from '@/types/products';
import { Maybe } from '@/types/common';
import { ProductDetails } from '@/components';
import 'react-loading-skeleton/dist/skeleton.css'

type Props = {
  product: Maybe<ProductNoPriceData>;
  errors?: string[];
};

export default function ProductPage({ product }: Props) {

  if (!product) {
    // Here we can display a toaster maybe
    return (
      <DetailsLayout>
        <h1 className="text-2xl">Something weird happened</h1>
      </DetailsLayout>
    );
  }

  return (
    <DetailsLayout>
      <ProductDetails product={product} />
    </DetailsLayout>
  );
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

    return {
      props: {
        product: productData,
      },
    };
  } catch (_error) {
    return {
      props: {
        product: null,
        error: 'Product not found'
      },
    };
  }
};
