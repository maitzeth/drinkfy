import { withCustomIcon, IconProps } from './withCustomIcon';

export const PlusIcon = withCustomIcon(({ status }: IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="11" y="5" width="2" height="14" rx="1" fill={status} />
      <rect x="5" y="13" width="2" height="14" rx="1" transform="rotate(-90 5 13)" fill={status} />
    </svg>
  );
});
