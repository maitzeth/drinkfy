import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import NextNProgress from 'nextjs-progressbar';
import { TAILWIND_COLORS } from '@/common/constants';
import { SWRConfig } from 'swr';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = DM_Sans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig 
      value={{
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <NextNProgress color={TAILWIND_COLORS.accent.DEFAULT} height={4} />
      <main className={`bg-white-1 ${inter.className} min-h-svh flex flex-col`}>
        <Component {...pageProps} />
        <ToastContainer />
      </main>
    </SWRConfig>
  );
}
