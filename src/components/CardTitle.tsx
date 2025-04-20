import { ReactNode, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardTitleProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export default function CardTitle({ children, className = '', ...props }: CardTitleProps) {
  return (
    <div className={twMerge('text-black-pearl-950 text-lg font-semibold', className)} {...props}>
      {children}
    </div>
  );
}