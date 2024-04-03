import { getProducts } from '@/common/api/products';
import { ProductData } from '@/types/products';
import { GetServerSideProps } from 'next';
import { Container } from '@/components';

type HomeProps = {
  products: ProductData[];
}

export default function Home({ products }: HomeProps) {
  console.log(products);
  return (
    <Container className="relative bg-white-dark-1">
      <h1>qweqweqwe</h1>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const products = await getProducts();
    return {
      props: {
        products: JSON.parse(JSON.stringify(products)),
      },
    };
  } catch (error) {
    return {
      props: {
        products: [],
      },
    };
  }
};
