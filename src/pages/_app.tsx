import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import NextNProgress from 'nextjs-progressbar'

const inter = DM_Sans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#01402F" height={4} />
      <main className={`pt-4 pb-24 bg-white-1 ${inter.className}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
