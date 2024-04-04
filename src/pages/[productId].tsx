import { GetServerSideProps } from 'next';
import { getSlugElements } from '@/common/utils';
import { DefaultLayout } from '@/pages/layouts/DetailsLayout';

export default function ProductPage() {
  return (
    <DefaultLayout>
      <h1>Product Details</h1>
    </DefaultLayout>
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
    return {
      props: {},
    };
  } catch (error) {
    return {
      props: {
        product: {},
      },
    };
  }
};
