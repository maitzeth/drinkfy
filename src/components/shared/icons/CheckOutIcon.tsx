import { withCustomIcon, IconProps } from './withCustomIcon';

export const CheckOutIcon = withCustomIcon(({ status }: IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 8H14" stroke={status} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 16H14" stroke={status} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12H16" stroke={status} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="3.75" y="2.75" width="16.5" height="18.5" rx="3.25" stroke={status} stroke-width="1.5"/>
    </svg>
  );
});
