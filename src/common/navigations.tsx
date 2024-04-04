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
    name: 'Settings',
    href: pathNames.settings,
  },
] as const;
