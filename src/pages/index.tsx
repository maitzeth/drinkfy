import { getProducts } from '@/common/api/products';
import { ProductData } from '@/types/products';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

type HomeProps = {
  products: ProductData[];
}

export default function Home({ products }: HomeProps) {
  console.log(products);
  return (
    <main>
      <h1>Drinkfy</h1>
      <Link href="/5-modelo-especial">Ir a detalle</Link>
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
    return {
      props: {
        products: [],
      },
    };
  }
};
