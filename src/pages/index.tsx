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
} from '@/components';
import { ShoppingBagIcon } from '@/icons/ShoppingBag';
import { PlusIcon } from '@/icons/PlusIcon';
import Image from 'next/image';


type HomeProps = {
  products: ProductData[];
}

export default function Home({ products }: HomeProps) {
  console.log(products);
  return (
    <Container className="relative bg-white-1 space-y-10 py-20">
      <ButtonPrimary type="button" onClick={() => console.log('testing...')}>
        Add to cart
      </ButtonPrimary>
      <ButtonSecondary onClick={() => console.log('secondary')} icon={<ShoppingBagIcon />} />
      <ButtonTertiary isSelected={false} onClick={() => console.log('tertiary')}>
        12 - 24oz
      </ButtonTertiary>
      <ButtonTertiary isSelected onClick={() => console.log('tertiary')}>
        18 - 12oz
      </ButtonTertiary>
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
                alt="Your Name"
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
                alt="Your Name"
              />
            </div>
            <span>Wine</span>
          </div>
        </ButtonQuaternary>
      </div>
      <ButtonQuinary onClick={() => console.log('plus')}>
        <PlusIcon />
      </ButtonQuinary>
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
