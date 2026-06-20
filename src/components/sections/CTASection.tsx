import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';

export function CTASection() {
  return (
    <section className="bg-white px-0 pb-20 pt-8">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[1.75rem] bg-cta-gradient px-7 py-12 text-center shadow-soft sm:px-12 sm:py-16">
          <div className="absolute -right-10 -top-16 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Unlock value with Orinon Info Tech
            </h2>
            <p className="mt-5 text-lg leading-8 text-indigo-100/80">
              We deliver end-to-end data, analytics, artificial intelligence, digital
              transformation, and application development solutions for organizations across
              Zimbabwe and Africa.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/services" variant="ghost">
                Explore Our Services
              </Button>
              <Button href="/contact" variant="gold">
                Contact Us
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
