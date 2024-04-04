import { cn } from '@/common/utils';
import { ButtonBase, BaseProps } from './ButtonBase';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<BaseProps>;

const BASE_CLASSNAME = `
  w-[40px]
  h-[40px]
  bg-white
  rounded-xl
  flex
  items-center
  justify-center
`;

export const ButtonDefault = ({ onClick, children, ...rest }: Props) => {
  return (
    <ButtonBase onClick={onClick} className={cn(BASE_CLASSNAME)} {...rest}>
      {children}
    </ButtonBase>
  );
};
