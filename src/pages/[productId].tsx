import { GetServerSideProps } from 'next';
import { getSlugElements } from '@/common/utils';
import { getProductById } from '@/common/api/products';
import { DetailsLayout } from '@/pages/layouts/DetailsLayout';
import { ProductNoPriceData } from '@/types/products';
import { Maybe } from '@/types/common';

type Props = {
  product: Maybe<ProductNoPriceData>;
  messages?: string[];
};

export default function ProductPage({ product }: Props) {
  console.log(product);
  return (
    <DetailsLayout>
      {/* <Image
        src="/images/user.jpg"
        height={40}
        width={40}
        alt="Your user avatar"
        className="rounded-full"
      /> */}
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
        messages: ['Product not found']
      },
    };
  }
};
