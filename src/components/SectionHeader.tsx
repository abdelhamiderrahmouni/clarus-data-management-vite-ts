import { ReactNode, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionHeaderProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export default function SectionHeader({ children, className = '', ...props }: SectionHeaderProps) {
  return (
    <h2 className={twMerge('text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-astronaut-blue-950', className)} {...props}>
      {children}
    </h2>
  );
}