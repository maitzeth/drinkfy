import { withCustomIcon, IconProps } from './withCustomIcon';

export const HomeIcon = withCustomIcon(({ status }: IconProps) => {
  return (
    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20H16.8936C18.0602 20 19.0107 19.071 18.9999 17.9309V8.1763C18.9999 7.57456 18.7299 6.99393 18.2546 6.60333L10.8663 0.490895C10.0778 -0.163632 8.92207 -0.163632 8.13356 0.490895L0.745306 6.60333C0.270038 6.99393 0 7.564 0 8.1763V17.9309C0 19.071 0.950535 20 2.1171 20H7V14.5C7 13.1193 8.11929 12 9.5 12C10.8807 12 12 13.1193 12 14.5V20Z"
        fill={status}
      />
    </svg>
  );
});
