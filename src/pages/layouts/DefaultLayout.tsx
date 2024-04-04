import { Fragment, PropsWithChildren } from 'react'
import { Container, Navbar } from '@/components';
import { withClassName } from '@/types/common';
import { cn } from '@/common/utils';

export const DefaultLayout = ({ children, className }: withClassName<PropsWithChildren>) => {
  return (
    <Fragment>
      <Container className={cn("relative bg-white-1 space-y-10 min-h-screen", className)}>
        {children}
      </Container>
      <Navbar />
    </Fragment>
  );
};
