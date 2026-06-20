import { Link } from 'react-router-dom';

type LogoProps = {
  dark?: boolean;
};

export function Logo({ dark = false }: LogoProps) {
  return (
    <Link to="/" aria-label="Orinon Info Tech home" className="inline-flex items-center gap-3">
      <span className="relative inline-flex h-10 w-10 items-center justify-center">
        <span
          className={`absolute inset-1 rounded-full border-[3px] ${
            dark ? 'border-white' : 'border-brand-700'
          } border-r-transparent`}
        />
        <span className="absolute left-1.5 top-1.5 h-3 w-3 rounded-full bg-white" />
      </span>
      <span
        className={`font-display text-xl font-bold tracking-tight sm:text-2xl ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        Orinon Info Tech
      </span>
    </Link>
  );
}
