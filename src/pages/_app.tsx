import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import NextNProgress from 'nextjs-progressbar';
import { TAILWIND_COLORS } from '@/common/constants';
import { SWRConfig } from 'swr';
import { ToastContainer } from 'react-toastify';
import { AnimatePresence, motion } from "framer-motion";
import 'react-toastify/dist/ReactToastify.css';

const inter = DM_Sans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <SWRConfig 
      value={{
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <NextNProgress color={TAILWIND_COLORS.accent.DEFAULT} height={4} />
      <AnimatePresence mode="wait">
        <motion.div key={router.route}>
          <motion.div
            initial={{ opacity: 0, translateX: -50,  }}
            animate={{ opacity: 1, translateX: 0, transition: { delay: 0.1 } }}
          >
            <main className={`bg-white-1 ${inter.className} min-h-svh flex flex-col`}>
              <Component {...pageProps} />
              <ToastContainer />
            </main>
          </motion.div>
          </motion.div>
      </AnimatePresence>
    </SWRConfig>
  );
}
