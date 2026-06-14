import type { HTMLAttributes, PropsWithChildren } from 'react';

type CardProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    className?: string;
  }
>;

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={`rounded-[1.125rem] border border-line bg-white shadow-card ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
