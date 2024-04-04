import React from 'react';
import { DefaultLayout } from '@/pages/layouts/DefaultLayout';

export default function Custom404() {
  return (
    <DefaultLayout>
      <h1 className="text-6xl font-bold text-center">404</h1>
      <h2 className="text-xl text-center">The page you are looking for doesnt exists</h2>
    </DefaultLayout>
  );
}