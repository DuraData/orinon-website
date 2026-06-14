import type { PropsWithChildren } from 'react';

type BadgeProps = PropsWithChildren<{
  className?: string;
  dark?: boolean;
}>;

export function Badge({ children, className = '', dark = false }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
        dark
          ? 'border-white/15 bg-white/5 text-gold'
          : 'border-brand-100 bg-brand-50 text-brand-700'
      } ${className}`.trim()}
    >
      {children}
    </span>
  );
}
