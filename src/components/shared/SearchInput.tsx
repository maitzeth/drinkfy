import { cn } from '@/common/utils';
import { InputHTMLAttributes } from 'react';
import { ZoomIcon  } from '@/icons/ZoomIcon';

export type Props = InputHTMLAttributes<HTMLInputElement> & {};

export const SearchInput = ({ onChange, value, placeholder, className, ...rest }: Props) => {
  return (
    <div className="relative">
      <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
        <ZoomIcon />
      </div>
      <input
        type="text"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={cn(className, 'w-full py-[12px] focus pl-[45px] rounded-xl font-sm font-normal text-black-3 transition-all')}
        {...rest}
      />
    </div>
  );
};
