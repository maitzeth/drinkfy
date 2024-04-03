import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "accent": {
          DEFAULT: "#FF9F24",
        },
        "black": {
          DEFAULT: "#0F0D23",
          'light-1': '#646464',
          'light-2': "#969696"
        },
        "white": {
          'dark-1': '#FAFAFA',
        }
      },
    },
  },
  plugins: [],
};
export default config;
