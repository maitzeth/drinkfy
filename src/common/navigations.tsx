import { pathNames } from './constants';

export const generalNavigation = [
  {
    name: 'Home',
    href: pathNames.home,
  },
  {
    name: 'Checkout',
    href: pathNames.checkout,
  },
  {
    name: 'Cart',
    href: pathNames.cart,
  },
  {
    name: 'Settings',
    href: pathNames.settings,
  },
] as const;
