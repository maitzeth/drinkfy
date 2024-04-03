import Image from "next/image";
import { Inter } from "next/font/google";
import { getProducts } from '@/common/api/products';
import { GetServerSideProps } from 'next';

// const inter = Inter({ subsets: ["latin"] });

type HomeProps = {
  products: any[];
}

export default function Home({ products }: HomeProps) {
  console.log(products);

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
