import { cn } from '@/common/utils';
import { ButtonBase, BaseProps } from './ButtonBase';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<BaseProps> & {
  fullWith?: boolean;
};

const BASE_CLASSNAME = `
  max-w-[247px]
  w-full
  h-[54px]
  bg-accent
  rounded-xl
  text-white
  font-medium
  focus
  text-base
  disabled:opacity-50
`;

export const ButtonPrimary = ({ onClick, children, fullWith, ...rest }: Props) => {
  return (
    <ButtonBase
      {...rest}
      onClick={onClick}
      className={cn(BASE_CLASSNAME, {
        'max-w-full': fullWith
      })}
    >
      {children}
    </ButtonBase>
  );
};
