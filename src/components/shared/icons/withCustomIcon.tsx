import { ComponentType, FC } from 'react';
import { TAILWIND_COLORS } from '@/common/constants';

const colorStatus = {
  active: TAILWIND_COLORS.accent.DEFAULT,
  default: TAILWIND_COLORS.gray[2],
} as const;

// This props can be extended if you need to customize the icon further
export type IconProps = {
  status?: keyof typeof colorStatus;
};

export const withCustomIcon = <P extends object>(
  WrappedComponent: ComponentType<P>,
): FC<P & IconProps> => {
  const WithCustomIcon: FC<P & IconProps> = ({ status, ...props }) => {
    const color = colorStatus[status ?? 'default'];

    return <WrappedComponent status={color} {...props as P} />;
  };

  // Set display name for the higher-order component
  WithCustomIcon.displayName = `WithCustomIcon(${getComponentName(WrappedComponent)})`;

  return WithCustomIcon;
};

const getComponentName = (WrappedComponent: ComponentType<any>) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};
