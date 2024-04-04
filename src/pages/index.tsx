import { getProducts } from '@/common/api/products';
import { ProductData } from '@/types/products';
import { GetServerSideProps } from 'next';
import {
  Container,
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
  ButtonQuaternary,
  ButtonQuinary,
  SearchInput,
} from '@/components';
import { ShoppingBagIcon } from '@/components/shared/icons/ShoppingBagIcon';
import { PlusIcon } from '@/icons/PlusIcon';
import Image from 'next/image';
import { DefaultLayout } from '@/pages/layouts/DefaultLayout';

type HomeProps = {
  products: ProductData[];
}

export default function Home({ products }: HomeProps) {
  console.log(products);
  return (
    <DefaultLayout className="space-y-6">
      <header className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-base font-normal text-black-1">Hi Mr. Michael,</h2>
          <h1 className="text-2xl text-black-3 font-bold">Welcome Back!</h1>
        </div>
        <SearchInput placeholder="Search burger, pizza, drink or ect..." />
      </header>
    </DefaultLayout>
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
