import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import NextNProgress from 'nextjs-progressbar';
import { TAILWIND_COLORS } from '@/common/constants';

const inter = DM_Sans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color={TAILWIND_COLORS.accent.DEFAULT} height={4} />
      <main className={`bg-white-1 bg-black ${inter.className} min-h-svh min-h-screen flex flex-col justify-between`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
