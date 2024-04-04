import { Fragment } from 'react';
import { ButtonDefault } from '@/components';
import Image from 'next/image';

export const Header = () => {

  return (
    <Fragment>
      <header className="flex justify-between items-center py-4">
        <ButtonDefault onClick={() => {}}>
          {/* This a placeholder, but it can be created as a component - TODO */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="5" width="16" height="1.5" rx="0.75" fill="#0F0D23"/>
            <rect x="4" y="11" width="10" height="1.5" rx="0.75" fill="#0F0D23"/>
            <rect x="4" y="17" width="16" height="1.5" rx="0.75" fill="#0F0D23"/>
          </svg>
        </ButtonDefault>
        <div>
          <Image
            src="/images/user.jpg"
            height={40}
            width={40}
            alt="Your user avatar"
            className="rounded-full"
          />
        </div>
      </header>
    </Fragment>
  );
};
