import { Fragment, PropsWithChildren } from 'react'
import { Container, Navbar, Header } from '@/components';
import { withClassName } from '@/types/common';
import { cn } from '@/common/utils';

export const DetailsLayout = ({ children, className }: withClassName<PropsWithChildren>) => {
  return (
    <Fragment>
      <Container className={cn("relative min-h-screen", className)}>
        <Header variant="details" />
        {children}
      </Container>
    </Fragment>
  )
};
