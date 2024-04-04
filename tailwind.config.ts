import type { Config } from "tailwindcss";

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
      colors: {
        "accent": {
          DEFAULT: "#FF9F24",
        },
        "black": {
          DEFAULT: "#0F0D23",
          '1': '#646464',
          '2': "#969696",
          '3': '#323232',
        },
        "white": {
          DEFAULT: '#FFFFFF',
          '1': '#FAFAFA',
        }
      },
    },
  },
  plugins: [],
};
export default config;
