import { cn } from '@/common/utils';
import { InputHTMLAttributes } from 'react';
import { ZoomIcon } from '@/components/shared/icons/ZoomIcon';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  wrapperClassName?: string;
};

export const SearchInput = ({ onChange, value, placeholder, className, wrapperClassName, ...rest }: Props) => {
  return (
    <div className={cn(wrapperClassName, 'space-y-2')}>
      <label
        htmlFor="search-input"
        className="text-black hidden md:block font-bold text-right"
      >
        {`What's in your mind today?`}
      </label>
      <div className="relative">
        <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
          <ZoomIcon />
        </div>
        <input
          type="text"
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          id="search-input"
          className={
            cn(className,
              'w-full py-[12px] focus pl-[45px] rounded-xl font-sm font-normal text-black-3 transition-all'
            )}
          {...rest}
        />
      </div>
    </div>
  );
};
