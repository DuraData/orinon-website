import type { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'designing-cloud-architecture-that-scales',
    title: 'Designing cloud architecture that scales without surprises',
    category: 'Cloud',
    date: 'Jun 2, 2026',
    author: 'Marcus Boateng',
    readTime: '7 min',
    excerpt:
      'The architectural decisions that quietly determine whether your cloud bill and your reliability hold up at scale.',
    featured: true,
  },
  {
    slug: 'zero-trust-security-roadmap',
    title: 'Zero-trust security: a practical roadmap for mid-size teams',
    category: 'Security',
    date: 'May 28, 2026',
    author: 'Jonah Feld',
    readTime: '9 min',
    excerpt:
      'You do not need an enterprise budget to adopt zero-trust. Here is how to sequence it for real-world impact.',
  },
  {
    slug: 'putting-ai-to-work',
    title: 'Putting AI to work: automation that pays for itself',
    category: 'AI',
    date: 'May 19, 2026',
    author: 'Priya Nair',
    readTime: '6 min',
    excerpt:
      'A framework for choosing the automation projects that deliver measurable ROI in the first quarter.',
  },
  {
    slug: 'monolith-to-modular',
    title: 'From monolith to modular: a migration playbook',
    category: 'Development',
    date: 'May 11, 2026',
    author: 'Elena Marsh',
    readTime: '8 min',
    excerpt:
      'How to decompose a legacy system incrementally without halting the roadmap your business depends on.',
  },
  {
    slug: 'recommended-data-stack-2026',
    title: 'The data stack we recommend in 2026',
    category: 'Data',
    date: 'Apr 30, 2026',
    author: 'Marcus Boateng',
    readTime: '10 min',
    excerpt:
      'Our opinionated, battle-tested reference architecture for analytics that teams actually use.',
  },
  {
    slug: 'choosing-the-right-technology-partner',
    title: 'Choosing the right technology partner: 7 questions',
    category: 'Strategy',
    date: 'Apr 22, 2026',
    author: 'Priya Nair',
    readTime: '5 min',
    excerpt:
      'The questions that separate a vendor from a partner and protect you from costly mismatches.',
  },
  {
    slug: 'cutting-cloud-costs',
    title: 'Cutting cloud costs without cutting reliability',
    category: 'Cloud',
    date: 'Apr 14, 2026',
    author: 'Jonah Feld',
    readTime: '6 min',
    excerpt:
      'Seven levers we pull to reduce spend by 30% or more while improving resilience and performance.',
  },
  {
    slug: 'incident-response-runbook',
    title: 'Incident response: what good looks like',
    category: 'Security',
    date: 'Apr 3, 2026',
    author: 'Jonah Feld',
    readTime: '7 min',
    excerpt:
      'A calm, repeatable incident-response process beats heroics every time. Here is the runbook we use.',
  },
  {
    slug: 'shipping-llm-features',
    title: 'Shipping LLM features your users can trust',
    category: 'AI',
    date: 'Mar 25, 2026',
    author: 'Priya Nair',
    readTime: '8 min',
    excerpt:
      'Guardrails, evaluation, and UX patterns for putting generative AI in front of real customers.',
  },
  {
    slug: 'engineering-velocity-without-burnout',
    title: 'Engineering velocity without burning out the team',
    category: 'Development',
    date: 'Mar 15, 2026',
    author: 'Elena Marsh',
    readTime: '6 min',
    excerpt:
      'Sustainable pace is a competitive advantage. These practices let teams ship fast for years, not weeks.',
  },
  {
    slug: 'turning-dashboards-into-decisions',
    title: 'Turning dashboards into decisions',
    category: 'Data',
    date: 'Mar 6, 2026',
    author: 'Marcus Boateng',
    readTime: '5 min',
    excerpt:
      'Most dashboards are ignored. Here is how to design analytics that change what people actually do.',
  },
  {
    slug: 'building-a-roadmap-people-believe-in',
    title: 'Building a roadmap your whole company believes in',
    category: 'Strategy',
    date: 'Feb 24, 2026',
    author: 'Elena Marsh',
    readTime: '7 min',
    excerpt:
      'Alignment is an engineering problem too. This is the lightweight roadmap method we use to keep teams together.',
  },
];

export const blogCategories = ['All', 'Cloud', 'Security', 'AI', 'Development', 'Data', 'Strategy'];
