import { cn } from '@/common/utils';
import { ButtonBase, ButtonAttrs, CustomBaseProps } from './ButtonBase';
import { ReactNode } from 'react';

type Props = ButtonAttrs & CustomBaseProps & {
  icon: ReactNode
};

const BASE_CLASSNAME = `
  w-[54px]
  h-[54px]
  rounded-xl
  bg-white
  text-accent
  focus
  flex
  items-center
  justify-center
  border-[0.8px]
  border-accent
`;

export const ButtonSecondary = ({ onClick, icon, ...rest }: Props) => {
  return (
    <ButtonBase onClick={onClick} className={cn(BASE_CLASSNAME)} {...rest}>
      {icon}
    </ButtonBase>
  );
};
