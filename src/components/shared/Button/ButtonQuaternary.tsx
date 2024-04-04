import { cn } from '@/common/utils';
import { ButtonBase, ButtonAttrs, CustomBaseProps } from './ButtonBase';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<ButtonAttrs & CustomBaseProps & {
  isSelected?: boolean;
  isFullSize?: boolean;
}>;

const BASE_CLASSNAME = `
  text-black-3
  font-medium
  text-base
  rounded-xl
  min-w-[58px]
  h-[48px]
  flex
  items-center
  justify-center
  bg-white
  shadow-xs
  focus
`;

export const ButtonQuaternary = ({
  onClick,
  children,
  isSelected,
  isFullSize,
  ...rest
}: Props) => {
  return (
    <ButtonBase
      onClick={onClick}
      className={cn(BASE_CLASSNAME, {
        'bg-accent text-white': isSelected,
        'flex-1 md:flex-none px-8': isFullSize,
      })}
      {...rest}
    >
      {children}
    </ButtonBase>
  );
};
