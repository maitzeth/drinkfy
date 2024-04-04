import React from 'react';
import { ShoppingBagIcon } from '@/icons/ShoppingBagIcon';
import { NotificationDot } from '@/components';
import { useCartStore } from '@/stores/cart';
import { colorStatus } from '@/components/shared/icons/withCustomIcon';

type Props = {
  status?: keyof typeof colorStatus;
};

export const CartIcon = ({ status }: Props) => {
  const { count } = useCartStore();

  return (
    <>
      {count > 0 && (
        <NotificationDot className="top-[2px] right-[1px]" />
      )}
      <ShoppingBagIcon status={status} />
    </>
  );
};
