import { usePathname } from 'next/navigation';
import { Fragment, useMemo } from 'react';
import { HomeIcon } from '@/icons/HomeIcon';
import { CheckOutIcon } from '@/icons/CheckOutIcon';
import { ShoppingBagIcon } from '@/icons/ShoppingBagIcon';
import { SettingIcon } from '@/icons/SettingIcon';
import Link from 'next/link';
import { cn } from '@/common/utils';
import { NotificationDot } from '@/components';
import { useCartStore } from '@/stores/cart';
import { pathNames } from '@/common/constants';

const listIconClassName = 'w-11 h-11 rounded-full bg-transparent flex items-center justify-center relative'; 

export const Navbar = () => {
  const { count } = useCartStore();
  const pathname = usePathname();

  return (
    <Fragment>
      <nav className="px-4 py-4 bg-white fixed bottom-0 w-full">
        <ul className="flex justify-between max-w-80 mx-auto">
          <li className={cn(listIconClassName)}>
            <Link href={pathNames.home}>
              <HomeIcon status={pathname === pathNames.home ? 'active' : 'default'} />
            </Link>
          </li>
          <li className={cn(listIconClassName)}>
            <Link href={pathNames.checkout}>
              <CheckOutIcon status={pathname === pathNames.checkout ? 'active' : 'default'} />
            </Link>
          </li>
          <li className={cn(listIconClassName)}>
            <Link href={pathNames.cart} className="relative">
              {count > 0 && (
                <NotificationDot className="top-[2px] right-[1px]" />
              )}
              <ShoppingBagIcon status={pathname === pathNames.cart ? 'active' : 'default'} />
            </Link>
          </li>
          <li className={cn(listIconClassName)}>
            <Link href={pathNames.settings}>
              <SettingIcon status={pathname === pathNames.settings ? 'active' : 'default'} />
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};
