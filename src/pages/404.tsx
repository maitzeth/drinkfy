import React from 'react';
import { DefaultLayout } from '@/pages/layouts/DefaultLayout';

export default function Custom404() {
  return (
    <DefaultLayout>
      <h1 className="text-6xl xl:text-9xl text-black font-bold text-center">404</h1>
      <h2 className="text-xl text-center text-black-3">The page you are looking for doesnt exists</h2>
    </DefaultLayout>
  );
}