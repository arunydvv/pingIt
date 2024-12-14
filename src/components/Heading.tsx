import React, { HTMLAttributes } from 'react';
import { cn } from '@/utils';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ className, children, ...props }) => {
  return (
    <h1 className={cn("text-4xl sm:text-5xl text-pretty font-heading font-semibold tracking-tight text-zinc-800", className)} {...props}>
      {children}
    </h1>
  );
};

export default Heading;

