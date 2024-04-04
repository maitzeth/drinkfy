import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import Link from 'next/link';
import { cn } from '@/common/utils';
import { NotificationDot } from '@/components';
import { useCartStore } from '@/stores/cart';
import { pathNames } from '@/common/constants';

const listIconClassName = 'w-11 h-11 rounded-full bg-transparent flex items-center justify-center relative'; 

import { HomeIcon } from '@/icons/HomeIcon';
import { CheckOutIcon } from '@/icons/CheckOutIcon';
import { ShoppingBagIcon } from '@/icons/ShoppingBagIcon';
import { SettingIcon } from '@/icons/SettingIcon';

const bottomNavItems = [
  {
    icon: HomeIcon,
    href: pathNames.home,
  },
  {
    icon: CheckOutIcon,
    href: pathNames.checkout,
  },
  {
    icon: ShoppingBagIcon,
    href: pathNames.cart,
  },
  {
    icon: SettingIcon,
    href: pathNames.settings,
  },
];

export const BottonNavbar = () => {
  const { count } = useCartStore();
  const pathname = usePathname();

  return (
    <Fragment>
      <nav className="px-4 py-4 bg-white fixed bottom-0 w-full block xl:hidden">
        <ul className="flex justify-between max-w-80 mx-auto">
          {bottomNavItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index} className={cn(listIconClassName)}>
                <Link href={item.href} className="relative focus">
                  {count > 0 && item.href === pathNames.cart && (
                    <NotificationDot className="top-[2px] right-[1px]" />
                  )}
                  <Icon status={pathname === item.href ? 'active' : 'default'} />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Fragment>
  );
};
