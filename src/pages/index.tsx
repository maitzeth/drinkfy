import { getProducts } from '@/common/api/products';
import { getStockPriceById } from '@/common/api/stock';
import {
  DividerTitle,
  ProductListItem,
  SearchInput,
  CategoriesBtnGroup,
} from '@/components';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { ProductData } from '@/types/products';
import { GetServerSideProps } from 'next';

type HomeProps = {
  products: ProductData[];
};

export default function Home({ products }: HomeProps) {
  return (
    <DefaultLayout className="space-y-6 md:space-y-14 pb-24">
      <section className="space-y-4">
        <div className="space-y-4 md:space-y-0 md:flex items-end justify-between">
          <div className="space-y-1">
            <h2 className="text-base md:text-xl font-normal text-black-1">Hi Mr. Michael,</h2>
            <h1 className="text-2xl md:text-4xl text-black-3 font-bold">Welcome Back!</h1>
          </div>
          <div>
            <SearchInput
              wrapperClassName="w-full md:w-80"
              placeholder="Search burger, pizza, drink or ect..."
            />
          </div>
        </div>
      </section>
      <div className="space-y-2 md:space-y-4">
        <DividerTitle title="Drink Category" href="/drinks?category=all" />
        <CategoriesBtnGroup />
      </div>
      <div className="space-y-2 md:space-y-4">
        <DividerTitle title="Popular" href="/drinks?popular=all" />
        <section className="grid gap-4 grid-cols-2 md:grid-cols-3">
          {products.map((product, index) => {
            const isOdd = (index + 1) % 2 === 0;
            return <ProductListItem key={product.id} isOdd={isOdd} data={product} />;
          })}
        </section>
      </div>
    </DefaultLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const productsResponse = await getProducts();

    const products: ProductData[] = [];

    // Assigning the price to the product
    for (const product of productsResponse) {
      const defaultSku = product.skus[0];
      
      // Maybe this can leads to performance issues, maybe an custom SQL query would be better
      // but isnt a big deal for this example
      const stockResponse = await getStockPriceById(defaultSku.code);
      products.push({ ...product, price: stockResponse?.price ?? 0 });
    }

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
