import type { IconType } from 'react-icons';

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  bullets?: string[];
};

export type Stat = {
  value: string;
  label: string;
};

export type Testimonial = {
  name: string;
  role: string;
  initials: string;
  quote: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  featured?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
};
