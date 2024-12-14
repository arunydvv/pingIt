import { cn } from '@/utils';
import React from 'react'

interface MaxWidthWrapper {
    classname?: string;
    children: React.ReactNode;
}

const MaxWidthWrapper = ({
    classname, children
}: MaxWidthWrapper) => {
  return (
      <div className={cn("h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20")}>
          
    </div>
  )
}

export default MaxWidthWrapper