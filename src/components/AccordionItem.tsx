import { HTMLAttributes, ReactNode, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface AccordionItemProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode,
  title: string,
  className?: string,
}

export default function AccordionItem({children, title, className = '', ...props }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={twMerge('py-4 flex flex-col gap-x-3', className)} {...props}>
        <div className="flex gap-x-4 items-center" onClick={() => setIsOpen(!isOpen)}>
            <svg className='shrink-0' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)"><path d="M15 28.928c7.693 0 13.93-6.236 13.93-13.928S22.692 1.07 15 1.07 1.073 7.307 1.073 15s6.236 13.928 13.929 13.928" stroke="#AA7A24" strokeWidth="1.714" strokeLinecap="round" strokeLinejoin="round"/><path d="M11.787 11.786A3.214 3.214 0 1 1 15.001 15v2.143" stroke="#AA7A24" strokeWidth="1.714" strokeLinecap="round" strokeLinejoin="round"/><path d="M15.002 20.357a1.607 1.607 0 1 0 1.607 1.607 1.63 1.63 0 0 0-1.607-1.607" fill="#AA7A24"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h30v30H0z"/></clipPath></defs></svg>
            <div className="flex-grow text-lg font-bold">
                {title}
            </div>
            <svg className='shrink-0' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .617v14.857M.571 8H15.43" stroke="#AA7A24" strokeWidth="1.714" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        {isOpen && <div className="px-12 transition-all duration-300 ease-in-out">
            {children}
        </div>}
    </li>
  );
}