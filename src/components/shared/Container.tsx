import { PropsWithChildren } from 'react';
import { cn } from '@/common/utils';
import { withClassName } from '@/types/common';
import { createElement } from 'react';

type ContainerProps = PropsWithChildren<withClassName<{
  tag?: "div" | "section" | "main" | "article";
  fluid?: boolean;
}>>;

export const Container = ({ children, className, fluid, tag = 'div' }: ContainerProps) => {
  return createElement(
    tag,
    { className: cn('mx-auto', className, {
      'max-w-full': fluid,
      'container px-5': !fluid
    }) },
    children
  );
};
