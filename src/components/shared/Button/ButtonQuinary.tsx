import { cn } from '@/common/utils';
import { ButtonBase, ButtonAttrs, CustomBaseProps } from './ButtonBase';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<ButtonAttrs & CustomBaseProps>;

const BASE_CLASSNAME = `
  w-[40px]
  h-[40px]
  bg-accent
  flex
  items-center
  justify-center
  rounded-tl-[8px]
  rounded-br-[8px]
  focus
`;

export const ButtonQuinary = ({ onClick, children, ...rest }: Props) => {
  return (
    <ButtonBase
      onClick={onClick}
      className={cn(BASE_CLASSNAME)}
      {...rest}
    >
      {children}
    </ButtonBase>
  );
};
