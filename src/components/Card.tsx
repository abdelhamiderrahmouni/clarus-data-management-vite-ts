import { ReactNode, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export default function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div className={twMerge('p-8 bg-white rounded-2xl shadow-xl', className)} {...props}>
      {children}
    </div>
  );
}