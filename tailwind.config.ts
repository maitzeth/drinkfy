import type { Config } from "tailwindcss";
import { TAILWIND_COLORS } from './src/common/constants';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        xs: '0 12px 73px -5px rgb(0 0 0 / 0.03)',
      },
      borderRadius: {
        'product-list': '12px 32px 12px 12px',
        'product-list--odd': '32px 12px 12px 12px',
      },
      'app-container': 'container mx-auto px-5',
      colors: TAILWIND_COLORS,
    },
  },
  plugins: [],
};
export default config;
