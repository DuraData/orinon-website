import type { PropsWithChildren } from 'react';

import { Badge } from './Badge';

type SectionTitleProps = PropsWithChildren<{
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}>;

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  children,
}: SectionTitleProps) {
  const isCenter = align === 'center';

  return (
    <div className={`${isCenter ? 'mx-auto text-center' : ''} max-w-3xl`}>
      <Badge dark={dark}>{eyebrow}</Badge>
      <h2
        className={`mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 ${dark ? 'text-indigo-100/75' : 'text-muted'}`}>
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
