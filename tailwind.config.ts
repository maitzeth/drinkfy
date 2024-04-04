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
      colors: TAILWIND_COLORS,
    },
  },
  plugins: [],
};
export default config;
