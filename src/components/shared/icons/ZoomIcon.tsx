import { withCustomIcon, IconProps } from './withCustomIcon';

export const ZoomIcon = withCustomIcon(({ status }: IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.3">
        <circle cx="11.0647" cy="11.0647" r="6.31471" stroke={status} strokeWidth="1.5"/>
        <path d="M16.0924 15.8441L19 18.6466" stroke={status} strokeWidth="1.5" strokeLinecap="round"/>
      </g>
    </svg>
  );
});
