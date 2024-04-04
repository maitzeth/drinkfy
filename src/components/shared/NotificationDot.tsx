import { cn } from "@/common/utils";
import { withClassName } from '@/types/common';

export const NotificationDot = ({ className }: withClassName) => {
  return (
    <div className={cn("absolute w-[7px] h-[7px] bg-accent rounded-full border border-white", className)} />
  );
};
