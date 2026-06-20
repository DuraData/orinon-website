import { LuCheck } from 'react-icons/lu';

import { CTASection } from '../components/sections/CTASection';
import { FAQAccordion } from '../components/sections/FAQAccordion';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { SectionTitle } from '../components/ui/SectionTitle';
import { faqs, processSteps, services } from '../data/services';
import { usePageMeta } from '../hooks/usePageMeta';

const methodologyRoles = [
  'Project Managers',
  'Business Analysts',
  'Data Analysts',
  'Data Modellers',
  'Data Architects',
  'Data Engineers',
  'Data Visualisation Engineers',
];

const modernDataPlatform = [
  'Sources',
  'Data Lake',
  'Data Stores / ODS',
  'Data Warehouse',
  'Advanced Analytics',
  'Data Science',
  'Applications',
  'Visualisation',
  'Master Data Management',
  'Enrichment',
  'Security & Access',
  'Data Storage',
  'Data Ingestion',
  'Data Governance',
  'Data Integration',
];

export function Services() {
  usePageMeta(
    'Services | Orinon Info Tech',
    'Explore Orinon Info Tech services across advisory, data engineering, analytics, artificial intelligence, managed solutions, and application development.',
  );

  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Specialist services across the modern data platform"
        description="Orinon Info Tech provides advisory, engineering, analytics, AI, managed services, and application development for organizations across Zimbabwe, Africa, and regional markets."
      />

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.id} delay={index * 0.06}>
                  <Card className="h-full p-8 transition hover:-translate-y-1.5 hover:shadow-soft">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-2xl text-brand-700">
                      <Icon />
                    </div>
                    <h2 className="mt-6 font-display text-2xl font-bold text-ink">{service.title}</h2>
                    <p className="mt-3 leading-7 text-muted">{service.description}</p>
                    <ul className="mt-5 space-y-3">
                      {service.bullets?.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate">
                          <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                            <LuCheck className="text-xs" />
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-cloud py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionTitle
              eyebrow="Methodology"
              title="One-stop service across your data journey"
              description="In alignment with each client’s preferred technology stack, Orinon identifies and assigns the right expertise to deliver intended objectives across strategy, implementation, and operations."
            />
            <div className="mt-8 space-y-4">
              {methodologyRoles.map((role) => (
                <div key={role} className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                    <LuCheck className="text-xs" />
                  </span>
                  <span className="leading-7 text-slate">{role}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/contact">Contact Orinon Info Tech</Button>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-[1.35rem] border border-brand-100 bg-[repeating-linear-gradient(135deg,#E7E9F4_0px,#E7E9F4_11px,#EEF0F8_11px,#EEF0F8_22px)] p-6 shadow-card">
              <div className="rounded-[1.2rem] border border-line bg-white/80 p-6 backdrop-blur">
                <div className="rounded-2xl border border-line bg-white p-5">
                  <p className="font-display text-sm uppercase tracking-[0.18em] text-slate-400">
                    Modern Data Platform
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {modernDataPlatform.map((item) => (
                      <div key={item} className="rounded-xl border border-line bg-cloud px-4 py-3">
                        <p className="text-sm font-semibold text-slate">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="How We Work"
            title="A practical delivery framework"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.06}>
                <Card className="h-full p-7">
                  <p className="font-display text-5xl font-extrabold leading-none text-brand-100">
                    {step.number}
                  </p>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cloud py-24">
        <Container className="max-w-4xl">
          <SectionTitle
            align="center"
            eyebrow="Questions"
            title="Frequently asked questions"
          />
          <div className="mt-12">
            <FAQAccordion items={faqs} />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
