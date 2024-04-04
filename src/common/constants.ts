export const TAILWIND_COLORS = {
  "accent": {
    DEFAULT: "#FF9F24",
  },
  "black": {
    DEFAULT: "#0F0D23",
    '1': '#646464',
    '2': "#969696",
    '3': '#323232',
  },
  "gray": {
    DEFAULT: "#F7F7F7",
    '1': '#C4C4C4',
    '2': '#8F8F8F',
  },
  "white": {
    DEFAULT: '#FFFFFF',
    '1': '#FAFAFA',
  }
} as const;

export const pathNames = {
  home: '/',
  checkout: '/checkout',
  cart: '/cart',
  settings: '/settings',
} as const;
