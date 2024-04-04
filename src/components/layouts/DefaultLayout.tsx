import { Fragment, PropsWithChildren } from 'react'
import { Container, BottonNavbar, HeaderNavbar } from '@/components';
import { withClassName } from '@/types/common';
import { cn } from '@/common/utils';

export const DefaultLayout = ({ children, className }: withClassName<PropsWithChildren>) => {
  return (
    <Fragment>
      <HeaderNavbar variant="default" />
      <Container className={cn("relative min-h-screen", className)}>
        {children}
      </Container>
      <BottonNavbar />
    </Fragment>
  );
};
