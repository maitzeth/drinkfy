import { cn } from '@/common/utils';
import { ButtonBase, BaseProps } from './ButtonBase';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<BaseProps>;

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

export const ButtonPrimary = ({ onClick, children, ...rest }: Props) => {
  return (
    <ButtonBase onClick={onClick} className={cn(BASE_CLASSNAME)} {...rest}>
      {children}
    </ButtonBase>
  );
};
