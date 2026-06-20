import { motion } from 'framer-motion';
import { LuArrowRight, LuCheck } from 'react-icons/lu';

import { CTASection } from '../components/sections/CTASection';
import { StatGrid } from '../components/sections/StatGrid';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { SectionTitle } from '../components/ui/SectionTitle';
import { homeStats, services, whyChooseOrinon } from '../data/services';
import { usePageMeta } from '../hooks/usePageMeta';

const heroMetrics = [
  { value: '12+ yrs', label: 'In business' },
  { value: '250+', label: 'Clients served' },
  { value: '99.9%', label: 'Uptime SLA' },
];

const heroBars = [42, 58, 70, 52, 80, 66, 90, 74, 84];

export function Home() {
  usePageMeta(
    'Orinon | Technology Services That Scale With Confidence',
    'Orinon delivers software, cloud, security, data, AI, and managed IT services that help businesses grow with confidence.',
  );

  return (
    <>
      <section className="overflow-hidden bg-cloud bg-hero-glow">
        <Container className="grid gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-24">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
              <span className="h-2 w-2 rounded-full bg-gold" />
              Trusted technology partner since 2014
            </div>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-extrabold leading-none tracking-[-0.04em] text-ink sm:text-6xl">
              Helping businesses scale with <span className="text-brand-700">confidence</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Orinon delivers software, cloud, and managed IT services that help organizations
              grow, innovate, and operate with certainty, engineered for performance and built to
              last.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Get Started</Button>
              <Button href="/services" variant="secondary">
                Explore Services <LuArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-8">
              {heroMetrics.map((metric) => (
                <div key={metric.label}>
                  <div className="font-display text-2xl font-bold text-ink">{metric.value}</div>
                  <div className="text-sm text-muted">{metric.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative">
              <Card className="relative overflow-hidden rounded-[1.35rem] p-5 shadow-soft">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-gold" />
                  <span className="h-3 w-3 rounded-full bg-slate-200" />
                  <span className="h-3 w-3 rounded-full bg-slate-200" />
                  <span className="ml-auto font-display text-xs uppercase tracking-[0.22em] text-slate-400">
                    orinon cloud console
                  </span>
                </div>
                <div className="rounded-2xl bg-dark-gradient p-6 text-white">
                  <p className="text-sm text-indigo-100/70">Monthly performance</p>
                  <p className="mt-2 font-display text-4xl font-bold">
                    99.98% <span className="text-base font-semibold text-gold">uptime</span>
                  </p>
                  <div className="mt-6 flex h-24 items-end gap-2">
                    {heroBars.map((height, index) => (
                      <span
                        key={height}
                        className={`flex-1 rounded-t-md ${
                          index === 6
                            ? 'bg-gradient-to-b from-gold to-amber-600'
                            : 'bg-gradient-to-b from-brand-500 to-brand-700'
                        }`}
                        style={{ height: `${height}%`, opacity: 0.55 + index * 0.05 }}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-line p-4">
                    <p className="text-xs text-muted">Deployments</p>
                    <p className="font-display text-2xl font-bold text-ink">1,204</p>
                  </div>
                  <div className="rounded-2xl border border-line p-4">
                    <p className="text-xs text-muted">Threats blocked</p>
                    <p className="font-display text-2xl font-bold text-ink">38.6k</p>
                  </div>
                </div>
              </Card>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-card sm:flex"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <LuCheck />
                </span>
                <div>
                  <p className="text-xs text-muted">SOC 2 Type II</p>
                  <p className="font-display text-sm font-bold text-ink">Certified secure</p>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </Container>
      </section>

      <StatGrid stats={homeStats} />

      <section className="bg-cloud py-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="What We Do"
            title="Technology services that move your business forward"
            description="From strategy to support, we deliver the full technology stack so you can focus on outcomes, not infrastructure."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.id} delay={index * 0.06}>
                  <Card className="group h-full p-8 transition hover:-translate-y-1.5 hover:shadow-soft">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-2xl text-brand-700">
                      <Icon />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-bold text-ink">{service.title}</h3>
                    <p className="mt-3 text-base leading-7 text-muted">{service.description}</p>
                    <Button
                      href="/services"
                      variant="secondary"
                      className="mt-6 !justify-start !border-0 !bg-transparent !px-0 !py-0 !text-brand-700"
                    >
                      Learn more <LuArrowRight className="ml-2 transition group-hover:translate-x-1" />
                    </Button>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-ink py-24">
        <div className="absolute -right-20 top-[-120px] h-96 w-96 rounded-full bg-brand-700/40 blur-3xl" />
        <Container className="relative grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionTitle
              eyebrow="Why Orinon"
              title="A partner you can build the next decade on"
              description="We pair senior engineering talent with a disciplined delivery process. The result is technology that ships on time, performs under pressure, and keeps paying off long after launch."
              dark
            />
            <div className="mt-8">
              <Button href="/about" variant="ghost">
                About our team <LuArrowRight className="ml-2" />
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseOrinon.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.07}>
                  <div className="rounded-[1.125rem] border border-white/10 bg-white/5 p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-700/30 text-xl text-indigo-100">
                      <Icon />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-indigo-100/70">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
