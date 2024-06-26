import { Fragment } from 'react';
import { ButtonDefault } from '@/components';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { pathNames } from '@/common/constants';

// This variants can be renamed to something more meaningful
// But for this example is enough to show the concept
const variants = {
  default: 'default',
  details: 'details',
} as const;

type GoBackProps = {
  onClick: () => void;
  variant: typeof variants['details'];
};

type DefaultProps = {
  variant: typeof variants['default']
}

type Props = GoBackProps | DefaultProps;

export const Header = (props: Props) => {
  const { variant } = props;


  if (variant === variants.default) {
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
  }

  if (variant === variants.details) {
    const { onClick } = props;

    return (
      <Fragment>
        <header className="flex justify-between items-center py-4">
          <section>
            <ButtonDefault onClick={onClick}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="11" width="15" height="1.5" fill="#323232"/>
                <path d="M11 5.20001L4 11.7L11 18.2" stroke="#323232" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </ButtonDefault>
          </section>
          <section>
            <h2 className="text-lg font-bold text-center text-black-3">Detail</h2>
          </section>
          <section>
            <ButtonDefault onClick={() => console.log('Opening menu')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5.5" cy="11.5" r="1.5" fill="#323232"/>
                <circle cx="12.5" cy="11.5" r="1.5" fill="#323232"/>
                <circle cx="19.5" cy="11.5" r="1.5" fill="#323232"/>
              </svg>
            </ButtonDefault>
          </section>
        </header>
      </Fragment>
    );
  }

  return null;
};
