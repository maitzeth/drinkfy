import { cn } from '@/common/utils';
import { PropsWithChildren, ButtonHTMLAttributes } from 'react';

export type CustomBaseProps<T = unknown> = T & {
  onClick: () => void;
};

export type ButtonAttrs = ButtonHTMLAttributes<HTMLButtonElement>;

export type BaseProps = ButtonAttrs & PropsWithChildren<CustomBaseProps>;

export const ButtonBase = ({ onClick, children, className, type = "button", ...rest }: BaseProps) => {
  return (
    <button
      type={type}
      {...rest}
      className={
        cn(className, 'hover:shadow-md transition-all')
      }
      onClick={onClick}
    >
      {children}
    </button>
  )
};
