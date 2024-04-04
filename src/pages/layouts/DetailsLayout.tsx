import { Fragment, PropsWithChildren } from 'react'
import { Container, HeaderNavbar } from '@/components';
import { withClassName } from '@/types/common';
import { cn } from '@/common/utils';
import { useRouter } from 'next/navigation';
import { pathNames } from '@/common/constants';

export const DetailsLayout = ({ children, className }: withClassName<PropsWithChildren>) => {
  const router = useRouter();

  return (
    <Fragment>
      <HeaderNavbar variant="details" onClick={() => router.push(pathNames.home)} />
      {children}
    </Fragment>
  )
};
