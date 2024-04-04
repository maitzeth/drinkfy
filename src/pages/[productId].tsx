import { GetServerSideProps } from 'next';
import { getSlugElements, formatCurrency } from '@/common/utils';
import { getProductById } from '@/common/api/products';
import { DetailsLayout } from '@/pages/layouts/DetailsLayout';
import { ProductNoPriceData } from '@/types/products';
import { Maybe } from '@/types/common';
import Image from 'next/image';
import { Container, ButtonPrimary, ButtonSecondary, TextClamp } from '@/components';
import { ShoppingBagIcon } from '@/icons/ShoppingBagIcon';

type Props = {
  product: Maybe<ProductNoPriceData>;
  messages?: string[];
};

export default function ProductPage({ product }: Props) {
  const productData = product;

  if (!productData) {
    // Here we can display a toaster maybe
    return (
      <DetailsLayout>
        <h1 className="text-2xl">Something weird happened</h1>
      </DetailsLayout>
    );
  }

  const { image, brand, origin, information } = productData;

  return (
    <DetailsLayout>
      <section className="relative">
        <Image
          src={image}
          height={240}
          width={240}
          alt="Your user avatar"
          className="mx-auto"
        />
      </section>
      <section className="py-8 bg-white rounded-tl-[48px] rounded-tr-[48px]">
        <Container className="space-y-6">
          <header className="flex justify-between">
            <div className="space-y-1">
              <h1 className="text-2xl text-black font-bold">{brand}</h1>
              <div className="flex items-center gap-2">
                <span className="text-sm text-black-2">Origin: {origin}</span>
                <span className="h-[10px] w-[1px] bg-black-2" />
                <span className="text-sm text-black-2">Stock: 456</span>
              </div>
            </div>
            <div>
              <p className="text-2xl text-accent font-bold">{formatCurrency(2640)}</p>
            </div>
          </header>
          <section className="space-y-2">
            <h2 className="text-lg text-black-3 font-bold">Description</h2>
            <div className="space-y-2">
              <TextClamp text={information} />
            </div>
          </section>
          <section>
            <h2 className="text-lg text-black-3 font-bold">Size</h2>
          </section>
          <footer className="flex justify-between gap-4">
            <ButtonSecondary onClick={() => {}} icon={<ShoppingBagIcon status="active" />} />
            <ButtonPrimary onClick={() => {}}>Add to cart</ButtonPrimary>
          </footer>
        </Container>
      </section>
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
