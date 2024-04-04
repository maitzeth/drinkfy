import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";

const inter = DM_Sans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
