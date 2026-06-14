import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'gold' | 'ghost';

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: string;
    variant?: Variant;
    className?: string;
  }
>;

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-700 text-white shadow-glow hover:bg-brand-800 border border-brand-700',
  secondary:
    'bg-white text-ink border border-slate-200 hover:border-brand-700 hover:text-brand-700',
  gold: 'bg-gold text-ink border border-gold hover:brightness-95',
  ghost:
    'bg-white/10 text-white border border-white/20 hover:border-gold hover:text-gold',
};

const baseClass =
  'inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700';

export function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const classes = `${baseClass} ${variants[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link className={classes} to={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
