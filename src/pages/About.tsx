import { LuBlocks, LuBrainCircuit, LuShieldCheck, LuSparkles } from 'react-icons/lu';

import { CTASection } from '../components/sections/CTASection';
import { PageHero } from '../components/sections/PageHero';
import { StatGrid } from '../components/sections/StatGrid';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { SectionTitle } from '../components/ui/SectionTitle';
import { aboutStats, teamMembers, timeline } from '../data/services';
import { usePageMeta } from '../hooks/usePageMeta';

const values = [
  {
    title: 'Integrity',
    description:
      'We do what we say, flag risks early, and earn trust through transparency on every engagement.',
    icon: LuShieldCheck,
  },
  {
    title: 'Excellence',
    description:
      'We hold a high bar for craft with clean code, thoughtful design, and measurable outcomes.',
    icon: LuSparkles,
  },
  {
    title: 'Innovation',
    description:
      'We challenge the status quo and bring modern thinking to problems others call impossible.',
    icon: LuBrainCircuit,
  },
  {
    title: 'Customer Success',
    description:
      'Your goals define ours, and we measure success by the impact we create for your business.',
    icon: LuBlocks,
  },
];

export function About() {
  usePageMeta(
    'About | Orinon',
    'Learn about Orinon’s story, values, leadership, and long-term approach to technology partnerships.',
  );

  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A decade of building what lasts"
        description="Orinon was founded on a simple belief: technology partnerships should outlast the project. Today we serve clients across 18 countries with that same conviction."
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
                    Team photo placeholder
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <SectionTitle
              eyebrow="Mission & Vision"
              title="Technology in service of real outcomes"
              description="Our mission is to help organizations grow with confidence by pairing senior engineering talent with a disciplined, transparent process."
            />
            <p className="mt-5 leading-8 text-muted">
              We believe the best technology disappears into results: revenue, resilience, and time
              given back to your team. Our vision is to be the partner companies trust for the next
              decade of their technology, not a vendor they replace, but a team they build with.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-cloud py-24">
        <Container>
          <SectionTitle align="center" eyebrow="What We Stand For" title="Our core values" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
          <SectionTitle align="center" eyebrow="Leadership" title="The people behind Orinon" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.06}>
                <div className="text-center">
                  <div className="flex aspect-square items-center justify-center rounded-[1.125rem] border border-brand-100 bg-gradient-to-br from-brand-50 to-slate-100">
                    <span className="font-display text-4xl font-bold text-brand-700">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{member.name}</h3>
                  <p className="mt-1 text-sm text-muted">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cloud py-24">
        <Container className="max-w-5xl">
          <SectionTitle align="center" eyebrow="Milestones" title="Our journey so far" />
          <div className="mt-14 space-y-1">
            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.05}>
                <div className="grid gap-4 py-4 sm:grid-cols-[90px_1fr] sm:gap-8">
                  <div className="font-display text-2xl font-extrabold text-brand-700 sm:text-right">
                    {item.year}
                  </div>
                  <div className="relative border-l-2 border-slate-200 pl-7 pb-8">
                    <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-cloud bg-brand-700" />
                    <h3 className="font-display text-xl font-bold text-ink">{item.title}</h3>
                    <p className="mt-2 leading-7 text-muted">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
