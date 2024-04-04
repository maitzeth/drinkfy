import { getProducts } from '@/common/api/products';
import {
  ButtonQuaternary,
  DividerTitle,
  ProductListItem,
  SearchInput
} from '@/components';
import { DefaultLayout } from '@/pages/layouts/DefaultLayout';
import { ProductData } from '@/types/products';
import { GetServerSideProps } from 'next';
import Image from 'next/image';

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
        <DividerTitle title="Drink Category" href="/drinks?category=all" />
        <div className="flex space-x-2 w-full">
          <ButtonQuaternary isSelected={false} onClick={() => console.log('zzz')}>
            All
          </ButtonQuaternary> 
          <ButtonQuaternary
            isFlexFull
            isSelected
            onClick={() => console.log('zzz')}
          >
            <div className="flex space-x-3 items-center -ml-10">
              <div>
                <Image
                  src="/images/beer.png"
                  height={20}
                  width={20}
                  alt="Beer Icon"
                />
              </div>
              <span>Beer</span>
            </div>
          </ButtonQuaternary> 
          <ButtonQuaternary isFlexFull onClick={() => console.log('zzz')}>
            <div className="flex space-x-3 items-center -ml-10">
              <div>
                <Image
                  src="/images/wine-glass.png"
                  height={20}
                  width={20}
                  alt="Wine Icon"
                />
              </div>
              <span>Wine</span>
            </div>
          </ButtonQuaternary>
        </div>
        <DividerTitle title="Popular" href="/drinks?popular=all" />
        <section className="grid gap-4 grid-cols-2">
          {products.map((product, index) => {
            const isOdd = (index + 1) % 2 === 0;
            return <ProductListItem key={product.id} isOdd={isOdd} data={product} />;
          })}
        </section>
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
