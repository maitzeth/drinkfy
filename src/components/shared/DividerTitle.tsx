import React from 'react';
import Link from 'next/link';

type Props = {
  title: string;
  href?: string;
};

export const DividerTitle = ({ title, href }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-lg text-black-3 font-bold">{title}</h3>
      <Link href={href ?? '/'} className="text-black-1 text-sm font-normal">
        See All
      </Link>
    </div>
  );
};