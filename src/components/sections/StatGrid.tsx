import type { Stat } from '../../types';
import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';

type StatGridProps = {
  stats: Stat[];
  dark?: boolean;
};

export function StatGrid({ stats, dark = false }: StatGridProps) {
  return (
    <section className={`${dark ? 'bg-ink' : 'bg-white'} py-16`}>
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06}>
              <div
                className={`rounded-[1.125rem] border px-6 py-8 text-center ${
                  dark
                    ? 'border-white/10 bg-transparent'
                    : 'border-line bg-cloud'
                }`}
              >
                <div
                  className={`font-display text-4xl font-extrabold tracking-tight ${
                    dark ? 'text-white' : 'text-brand-700'
                  }`}
                >
                  {stat.value}
                </div>
                <p className={`mt-3 text-sm font-medium ${dark ? 'text-indigo-100/70' : 'text-muted'}`}>
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
