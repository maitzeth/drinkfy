import { Fragment, PropsWithChildren } from 'react'
import { HeaderNavbar } from '@/components';
import { withClassName } from '@/types/common';
import { useRouter } from 'next/navigation';
import { pathNames } from '@/common/constants';

export const DetailsLayout = ({ children, className }: withClassName<PropsWithChildren>) => {
  const router = useRouter();

  return (
    <Fragment>
      <div className="flex-none">
        <HeaderNavbar variant="details" onClick={() => router.push(pathNames.home)} />
      </div>
      {children}
    </Fragment>
  )
};
