import {
  LuActivity,
  LuBlocks,
  LuBrainCircuit,
  LuChartColumnBig,
  LuCode,
  LuShieldCheck,
} from 'react-icons/lu';

import type { FaqItem, Service, Stat, TeamMember } from '../types';

export const services: Service[] = [
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    description:
      'Architect, migrate, and manage resilient cloud environments across AWS, Azure, and Google Cloud.',
    icon: LuBlocks,
    bullets: [
      'Multi-cloud architecture and migration planning',
      'FinOps governance and cost optimization',
      '24/7 observability and reliability engineering',
    ],
  },
  {
    id: 'software',
    title: 'Custom Software Development',
    description:
      'Web, mobile, and enterprise applications engineered for performance, security, and scale.',
    icon: LuCode,
    bullets: [
      'Product design and rapid prototyping',
      'Full-stack development for modern platforms',
      'Performance tuning and secure release pipelines',
    ],
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    description:
      'Turn raw data into pipelines, dashboards, and decisions your teams can act on with confidence.',
    icon: LuChartColumnBig,
    bullets: [
      'Data platform architecture and modernization',
      'Executive dashboards and KPI systems',
      'Data quality, governance, and automation',
    ],
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    description:
      'Protect your business with proactive monitoring, audits, and zero-trust security architecture.',
    icon: LuShieldCheck,
    bullets: [
      'Security assessments and compliance readiness',
      'Zero-trust identity and access controls',
      'Threat detection, response, and hardening',
    ],
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    description:
      'Deploy intelligent automation and AI workflows that cut cost, error, and repetitive busywork.',
    icon: LuBrainCircuit,
    bullets: [
      'Workflow automation with measurable ROI',
      'LLM product strategy and guardrails',
      'Internal copilots and knowledge assistants',
    ],
  },
  {
    id: 'managed',
    title: 'Managed IT Support',
    description:
      '24/7 helpdesk, monitoring, and IT management so your people stay productive and secure.',
    icon: LuActivity,
    bullets: [
      'Helpdesk, endpoint, and identity management',
      'SLA-backed monitoring and escalation',
      'Long-term roadmap support for internal teams',
    ],
  },
];

export const whyChooseOrinon = [
  {
    title: 'Proven Expertise',
    description:
      'Senior, certified engineers with deep experience across regulated and high-scale industries.',
    icon: LuShieldCheck,
  },
  {
    title: 'Reliability',
    description:
      '99.9% uptime SLAs, rigorous testing, and delivery you can plan your roadmap around.',
    icon: LuActivity,
  },
  {
    title: 'Innovation',
    description:
      'A modern stack and pragmatic R&D mindset that keeps your technology ahead of the curve.',
    icon: LuBrainCircuit,
  },
  {
    title: 'Client Focus',
    description:
      'Dedicated teams, transparent communication, and partnership that outlasts the project.',
    icon: LuBlocks,
  },
];

export const homeStats: Stat[] = [
  { value: '12+', label: 'Years of experience' },
  { value: '480+', label: 'Projects delivered' },
  { value: '250+', label: 'Clients served' },
  { value: '98%', label: 'Client satisfaction' },
];

export const aboutStats: Stat[] = [
  { value: '60+', label: 'Specialists on staff' },
  { value: '18', label: 'Countries served' },
  { value: '96%', label: 'Client retention' },
  { value: '99.9%', label: 'Average uptime' },
];

export const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We map your goals, constraints, and systems to define a clear picture of success.',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'We design the architecture, roadmap, and milestones with transparent scope and timelines.',
  },
  {
    number: '03',
    title: 'Implementation',
    description:
      'Our senior engineers build, test, and ship in tight iterations with continuous visibility.',
  },
  {
    number: '04',
    title: 'Support',
    description:
      'We monitor, optimize, and evolve your systems long after launch as a true ongoing partner.',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'What industries do you specialize in?',
    answer:
      'We work across fintech, healthcare, logistics, retail, and SaaS, adapting our process to your sector’s operational and compliance needs.',
  },
  {
    question: 'How do you price engagements?',
    answer:
      'We offer fixed-scope projects, dedicated team retainers, and managed-service plans, all with transparent milestones and no hidden costs.',
  },
  {
    question: 'Can you work with our internal team?',
    answer:
      'Yes. We frequently embed alongside in-house teams, extending delivery capacity and transferring knowledge as we go.',
  },
  {
    question: 'How do you handle security and compliance?',
    answer:
      'Security is built into every phase with zero-trust principles, audit-ready documentation, and support for SOC 2, HIPAA, and GDPR initiatives.',
  },
  {
    question: 'What does ongoing support look like?',
    answer:
      'Managed plans include 24/7 monitoring, a dedicated helpdesk, regular optimization reviews, and guaranteed response times.',
  },
  {
    question: 'How quickly can we get started?',
    answer:
      'Most engagements start within one to two weeks of proposal approval, with urgent discovery sprints available faster when needed.',
  },
];

export const teamMembers: TeamMember[] = [
  { name: 'Elena Marsh', role: 'Chief Executive Officer', initials: 'EM' },
  { name: 'Marcus Boateng', role: 'Chief Technology Officer', initials: 'MB' },
  { name: 'Priya Nair', role: 'VP, Client Delivery', initials: 'PN' },
  { name: 'Jonah Feld', role: 'Head of Security', initials: 'JF' },
];

export const timeline = [
  {
    year: '2014',
    title: 'Orinon is founded',
    description:
      'Three engineers set out to build technology partnerships that actually last.',
  },
  {
    year: '2017',
    title: 'Cloud practice launched',
    description:
      'The team became a certified partner across the three major cloud providers.',
  },
  {
    year: '2020',
    title: 'Crossed 100 clients',
    description:
      'Managed services and security delivery expanded to support growing global teams.',
  },
  {
    year: '2023',
    title: 'AI & automation division',
    description:
      'A dedicated practice opened to help clients operationalize AI responsibly.',
  },
  {
    year: '2026',
    title: '480+ projects delivered',
    description:
      'Today Orinon’s 60+ specialists serve clients across 18 countries.',
  },
];
