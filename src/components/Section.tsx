import { ReactNode, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export default function Section({ children, className = '', ...props }: SectionProps) {
  return (
    <section className={twMerge('px-4 py-16', className)} {...props}>
      {children}
    </section>
  );
}