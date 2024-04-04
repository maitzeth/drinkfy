import { PropsWithChildren } from 'react';
import { cn } from '@/common/utils';
import { withClassName } from '@/types/common';
import { createElement } from 'react';

type ContainerProps = PropsWithChildren<withClassName<{
  tag?: "div" | "section" | "main";
}>>

export const Container = ({ children, className, tag = 'div' }: ContainerProps) => {
  return createElement(
    tag,
    { className: cn('container mx-auto px-4', className) },
    children
  );
};
