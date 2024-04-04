import { screen, render } from '../helpers';
import productsMock from '../../db/products';
import { ProductListItem } from '@/components/shared/Product/ProductListItem';
import { parseToUrl } from '@/common/utils';

const product = {
  ...productsMock[0],
  price: 1000,
};

describe('<ProductListItem />', () => {
  it('should render product information correctly without odd styling', () => {
    render(<ProductListItem data={product} />);

    const productCard = screen.getByRole('article'); 

    expect(productCard).toBeDefined();
    expect(productCard).not.to.toBeNull();

    expect(productCard.classList.contains('rounded-product-list')).toBe(true);

    // This means the text will be visible in the twice 
    expect(screen.getAllByText("Modelo Especial")).length(2);

    expect(screen.getByText("$10.00")).toBeDefined();
    expect(screen.getByLabelText(`Go to ${product.brand} product page`)
      .getAttribute("href"))
      .toBe(`${product.id}_${parseToUrl(product.brand)}`);
  });

  it('should render product information correctly with odd styling', () => {
    render(<ProductListItem data={product} isOdd />);

    const productCard = screen.getByRole('article');

    expect(productCard).toBeDefined();
    expect(productCard).not.to.toBeNull();

    expect(productCard.classList.contains('rounded-product-list--odd')).toBe(true);

    expect(screen.getAllByText("Modelo Especial")).length(2);

    expect(screen.getByText("$10.00")).toBeDefined();
    expect(screen.getByLabelText(`Go to ${product.brand} product page`)
      .getAttribute("href"))
      .toBe(`${product.id}_${parseToUrl(product.brand)}`);
  });
});