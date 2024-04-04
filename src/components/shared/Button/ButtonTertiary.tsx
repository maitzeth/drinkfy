import { cn } from '@/common/utils';
import { ButtonBase, ButtonAttrs, CustomBaseProps } from './ButtonBase';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<ButtonAttrs & CustomBaseProps & {
  isSelected: boolean;
}>;

const CLASSNAME = `
  min-w-[87px]
  px-2
  h-[31px]
  bg-white
  rounded-full
  flex
  items-center
  justify-center
  border
  border-black-2
  text-black-2
  font-normal
  text-sm
  focus
`;

export const ButtonTertiary = ({ onClick, children, isSelected, ...rest }: Props) => {
  return (
    <ButtonBase
      onClick={onClick}
      className={cn(CLASSNAME, { 'text-accent border-accent': isSelected })}
      {...rest}
    >
      {children}
    </ButtonBase>
  );
};
