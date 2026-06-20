import { LuBlocks, LuBrainCircuit, LuShieldCheck, LuSparkles } from 'react-icons/lu';

import { CTASection } from '../components/sections/CTASection';
import { PageHero } from '../components/sections/PageHero';
import { StatGrid } from '../components/sections/StatGrid';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { SectionTitle } from '../components/ui/SectionTitle';
import { aboutStats } from '../data/services';
import { usePageMeta } from '../hooks/usePageMeta';

const values = [
  {
    title: 'Innovation',
    description:
      'Driving continuous innovation to develop cutting-edge data, analytics, and digital solutions.',
    icon: LuBrainCircuit,
  },
  {
    title: 'Excellence',
    description:
      'Commitment to excellence in work quality, product development, and client service delivery.',
    icon: LuSparkles,
  },
  {
    title: 'Integrity',
    description:
      'Upholding high standards of ethics, trust, and integrity in all engagements and relationships.',
    icon: LuShieldCheck,
  },
  {
    title: 'Collaboration',
    description:
      'Fostering strong collaboration within teams and with clients and partners to achieve shared goals.',
    icon: LuBlocks,
  },
  {
    title: 'Learning',
    description:
      'Encouraging continuous learning and skill-building to keep pace with modern data and AI innovation.',
    icon: LuBrainCircuit,
  },
];

export function About() {
  usePageMeta(
    'About | Orinon Info Tech',
    'Learn how Orinon Info Tech delivers data analytics, AI, business intelligence, digital transformation, and application development across Zimbabwe and Africa.',
  );

  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Orinon Info Tech: Data and AI solutions since 2018"
        description="Orinon Info Tech helps organizations unlock value through modern data platforms, analytics, artificial intelligence, digital transformation, and application development."
      />

      <section className="bg-white py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="rounded-[1.35rem] border border-brand-100 bg-[repeating-linear-gradient(135deg,#E7E9F4_0px,#E7E9F4_11px,#EEF0F8_11px,#EEF0F8_22px)] p-5 shadow-card">
              <div className="flex aspect-[4/3] items-center justify-center rounded-[1.15rem] border border-line bg-white">
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-brand-50 font-display text-3xl font-bold text-brand-700">
                    OR
                  </div>
                  <p className="mt-4 font-display text-sm uppercase tracking-[0.22em] text-slate-400">
                    Orinon Info Tech
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <SectionTitle
              eyebrow="About Us"
              title="One-stop data and digital solutions partner"
              description="Established in 2018, Orinon has contributed to the evolution of Data Analytics and Artificial Intelligence in Zimbabwe and regional countries, while preparing organizations for the next decade of digital innovation."
            />
            <p className="mt-5 leading-8 text-muted">
              Orinon provides one-stop data solutions based on internationally recognized best
              practices, operating models, and innovative technologies. The company supports
              blue-chip public and private sector customers to unlock value, implement digital
              transformation, and improve profitability and efficiency.
            </p>
            <p className="mt-5 leading-8 text-muted">
              Orinon has completed consultancy, turnkey, operation, and maintenance contracts for
              financial institutions, ministries, government organizations, telecommunications
              operators, equipment providers, and other organizations across regional markets.
            </p>
            <p className="mt-5 leading-8 text-muted">
              Orinon is committed to developing the Data Science industry in Africa through career
              development, online training programs, vocational training, and university
              partnerships.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-cloud py-24">
        <Container className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">Vision</p>
              <p className="mt-4 leading-8 text-muted">
                By 2030, Orinon aims to be the number one provider of data analytics and business
                intelligence solutions in Zimbabwe. By 2035, at least 50% of revenue should come
                from AI-driven and intelligent automation solutions delivered to clients across
                Africa. Through continuous learning, applied research, and innovation, Orinon
                aspires to build world-class digital solutions that inspire progress and empower
                customers globally.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="h-full p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">Mission</p>
              <p className="mt-4 leading-8 text-muted">
                To empower organizations across industries through transformational data and digital
                solutions.
              </p>
            </Card>
          </Reveal>
        </Container>
      </section>

      <section className="bg-cloud py-24">
        <Container>
          <SectionTitle align="center" eyebrow="Values" title="How we work" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={index * 0.06}>
                  <Card className="h-full p-8">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-2xl text-brand-700">
                      <Icon />
                    </div>
                    <h2 className="mt-6 font-display text-2xl font-bold text-ink">{value.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-muted">{value.description}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <StatGrid stats={aboutStats} dark />

      <section className="bg-white py-24">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Sectors Served"
            title="Public and private sector delivery experience"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Financial institutions',
              'Ministries and government organizations',
              'Telecommunications operators',
              'Equipment providers',
              'Banking and manufacturing organizations',
              'Agriculture, tourism, and other sectors',
            ].map((sector, index) => (
              <Reveal key={sector} delay={index * 0.05}>
                <Card className="h-full p-6">
                  <p className="text-sm leading-7 text-slate">{sector}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
