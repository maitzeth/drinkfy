import { ButtonDefault } from '@/components';
import { Layout } from './Layout';
import Image from 'next/image';
import { generalNavigation } from '@/common/navigations';
import Link from 'next/link';
import { pathNames } from '@/common/constants';
import { cn } from '@/common/utils';
import { usePathname } from 'next/navigation';
import { CartIcon } from '@/components/CartIcon';

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

export const HeaderNavbar = (props: Props) => {
  const pathname = usePathname();
  const { variant } = props;

  const defaultNavbar = (
    <header className="flex justify-between items-center py-4 xl:border-b border-gray-200">
      {/* Mobile/Tablet */}
      <div className="block xl:hidden">
        <ButtonDefault onClick={() => {}}>
          {/* This a placeholder, but it can be created as a component - TODO */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="5" width="16" height="1.5" rx="0.75" fill="#0F0D23"/>
            <rect x="4" y="11" width="10" height="1.5" rx="0.75" fill="#0F0D23"/>
            <rect x="4" y="17" width="16" height="1.5" rx="0.75" fill="#0F0D23"/>
          </svg>
        </ButtonDefault>
      </div>

      <div className="hidden xl:block w-full max-w-[180px]">
        {/* Logo */}
        <Link href={pathNames.home} className="flex gap-2 items-center focus">
          <div className="bg-accent rounded-xl w-12 h-12"  />
          <h1 className="text-black text-4xl font-bold">Drinkfy</h1>
        </Link>
      </div>

      <nav className="hidden xl:block">
        <ul className="space-x-6">
          {generalNavigation.map((item, index) => (
            <li key={index} className="inline-block">
              <Link
                href={item.href}
                className={
                  cn("text-sm text-black-3 uppercase hover:text-accent transition-all focus", {
                    'text-accent': item.href === pathname,
                  })
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="w-full max-w-[180px] flex justify-end items-center gap-4">
        <Link href={pathNames.cart} className="focus">
          <div className="relative">
            <CartIcon />
          </div>
        </Link>
        <Image
          src="/images/user.jpg"
          height={40}
          width={40}
          alt="Your user avatar"
          className="rounded-full"
        />
      </div>
    </header>
  );

  if (variant === variants.default) {
    return (
      <Layout>
        {defaultNavbar}
      </Layout>
    );
  }

  if (variant === variants.details) {
    const { onClick } = props;

    // This will be only visible when the variant is details
    // No need to declare it outside of this block
    const detailsNavbar = (
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
    )

    return (
      <Layout>
        <div className="block xl:hidden">
          {detailsNavbar}
        </div>
        <div className="hidden xl:block">
          {defaultNavbar}
        </div>
      </Layout>
    );
  }

  return null;
};
