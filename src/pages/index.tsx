import { getProducts } from '@/common/api/products';
import { GetServerSideProps } from 'next';

type HomeProps = {
  products: any[];
}

export default function Home({ products }: HomeProps) {
  return (
    <main>
      <h1>Drinkfy</h1>
    </main>
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
    console.log('zzzz')
    return {
      props: {},
    };
  }
};
