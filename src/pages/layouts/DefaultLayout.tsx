import { Fragment, PropsWithChildren } from 'react'
import { Container, Navbar, Header } from '@/components';
import { withClassName } from '@/types/common';
import { cn } from '@/common/utils';

export const DefaultLayout = ({ children, className }: withClassName<PropsWithChildren>) => {
  return (
    <Fragment>
      <Container className={cn("relative space-y-10 min-h-screen", className)}>
        <Header />
        {children}
      </Container>
      <Navbar />
    </Fragment>
  );
};
