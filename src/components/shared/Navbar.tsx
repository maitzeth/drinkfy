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

const listIconClassName = 'w-11 h-11 rounded-full bg-transparent flex items-center justify-center relative'; 
// TODO
const activeShadow = 'w-11 h-11 absolute bg-opacity-25 rounded-full';

export const Navbar = () => {
  const { count } = useCartStore();
  console.log(count);
  return (
    <Fragment>
      <nav className="px-4 py-4 bg-white fixed bottom-0 w-full">
        <ul className="flex justify-between max-w-80 mx-auto">
          <li
            className={cn(listIconClassName)}
          >
            <div className={cn(activeShadow)} />
            <Link href="/">
              <HomeIcon status="active" />
            </Link>
          </li>
          <li
            className={cn(listIconClassName)}
          >
            <Link href="/">
              <CheckOutIcon />
            </Link>
          </li>
          <li
            className={cn(listIconClassName)}
          >
            <Link href="/" className="relative">
              {count > 0 && (
                <NotificationDot className="top-[2px] right-[1px]" />
              )}
              <ShoppingBagIcon />
            </Link>
          </li>
          <li
            className={cn(listIconClassName)}
          >
            <Link href="/">
              <SettingIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};
