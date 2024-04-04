import { GetServerSideProps, NextApiRequest } from 'next';
export default function ProductPage() {
  return (
    <main>
      <h1>Product Details</h1>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context);

  try {
    return {
      props: {
        products: {},
      },
    };
  } catch (error) {
    return {
      props: {
        product: {},
      },
    };
  }
};
