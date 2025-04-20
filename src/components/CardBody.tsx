import { ReactNode, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardBodyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export default function CardBody({ children, className = '', ...props }: CardBodyProps) {
  return (
    <div className={twMerge('space-y-3 text-silver-chalice-700', className)} {...props}>
      {children}
    </div>
  );
}