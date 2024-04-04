import React, { PropsWithChildren } from 'react';
import { Container } from '@/components/shared/Container';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Container className="mb-6 xl:mb-10">
      {children}
    </Container>
  );
};
