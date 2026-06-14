import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-dark-gradient py-20 sm:py-24">
      <div className="absolute -right-20 top-[-120px] h-96 w-96 rounded-full bg-brand-700/40 blur-3xl" />
      <Container className="relative text-center">
        <Reveal className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-indigo-100/75">
            {description}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
