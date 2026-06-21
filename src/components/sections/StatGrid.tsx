import type { Stat } from '../../types';
import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';

type StatGridProps = {
  stats: Stat[];
  dark?: boolean;
};

export function StatGrid({ stats, dark = false }: StatGridProps) {
  const hasFiveStats = stats.length === 5;

  return (
    <section className={`${dark ? 'bg-ink' : 'bg-white'} py-16`}>
      <Container>
        <div
          className={`grid grid-cols-1 gap-6 md:grid-cols-3 ${
            hasFiveStats ? 'lg:grid-cols-5' : 'sm:grid-cols-2 xl:grid-cols-4'
          }`}
        >
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.06}
              className={`h-full ${
                hasFiveStats && index === 3
                  ? 'md:col-start-1 lg:col-start-auto'
                  : hasFiveStats && index === 4
                    ? 'md:col-start-3 lg:col-start-auto'
                    : ''
              }`}
            >
              <div
                className={`flex h-full min-h-[176px] flex-col items-center justify-center rounded-[1.125rem] border px-6 py-8 text-center ${
                  dark
                    ? 'border-white/10 bg-transparent'
                    : 'border-line bg-cloud'
                }`}
              >
                <div
                  className={`font-display text-[clamp(1.65rem,2.2vw,2.25rem)] font-extrabold leading-tight tracking-tight ${
                    dark ? 'text-white' : 'text-brand-700'
                  }`}
                >
                  {stat.value}
                </div>
                <p className={`mt-3 text-sm font-medium leading-6 ${dark ? 'text-indigo-100/70' : 'text-muted'}`}>
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
