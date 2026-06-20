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
    id: 'advisory',
    title: 'Advisory & Strategic Data Services',
    description:
      'Orinon consultants help organizations assess data maturity, define strategy, and modernize platforms using cloud-based approaches and best-practice delivery models.',
    icon: LuBlocks,
    bullets: [
      'Data Strategy and Modernisation',
      'Readiness Programme and Blueprint Architecture',
      'Business Analysis and Project Management',
    ],
  },
  {
    id: 'engineering',
    title: 'Data Engineering',
    description:
      'Orinon designs and implements modern pipelines and architectures across Data Lakes, ODS, Data Warehouses, Big Data, Cloud, and DataOps environments.',
    icon: LuActivity,
    bullets: [
      'Data Lake, Data Streaming, ETL and ELT',
      'Data Warehouse and Data Wrangling',
      'Cloud Infrastructure and platform reliability',
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics & Visualisation',
    description:
      'Orinon turns raw data into actionable intelligence through business intelligence, self-service analytics, storytelling, and smart visual experiences.',
    icon: LuChartColumnBig,
    bullets: [
      'Business Intelligence and Self-Service Analytics',
      'Data Visualisation and storytelling',
      'Data Science and Smart Analytics',
    ],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description:
      'As an extension of Orinon data engineering and advanced analytics capability, AI services support intelligent automation and stronger decision-making.',
    icon: LuBrainCircuit,
    bullets: [
      'Scheduling and Optimisation solutions',
      'Natural Language Processing and Robotics',
      'Machine Learning for enterprise use cases',
    ],
  },
  {
    id: 'managed',
    title: 'Managed Solutions',
    description:
      'Beyond implementation projects, Orinon provides managed application and technology services to keep systems stable, optimized, and valuable over the long term.',
    icon: LuShieldCheck,
    bullets: [
      'Outsourcing and technical expertise on demand',
      'Support, maintenance, and managed services',
      'Operational continuity and performance assurance',
    ],
  },
  {
    id: 'applications',
    title: 'Application Development',
    description:
      'Orinon develops custom applications across backend, frontend, web, mobile, and integration platforms using modern engineering practices.',
    icon: LuCode,
    bullets: [
      'Backend and Frontend development',
      '.NET, Java, PHP, Mobile, and IoT capabilities',
      'Business process, integration, and collaboration apps',
    ],
  },
];

export const whyChooseOrinon = [
  {
    title: 'Data and AI Specialization',
    description:
      'Focused expertise across analytics, AI, business intelligence, and digital transformation.',
    icon: LuShieldCheck,
  },
  {
    title: 'Regional Delivery Experience',
    description:
      'Proven work across Zimbabwe, Africa, and regional markets in public and private sectors.',
    icon: LuActivity,
  },
  {
    title: 'One-Stop Data Platform Services',
    description:
      'From strategy through implementation and managed operations under one delivery model.',
    icon: LuBrainCircuit,
  },
  {
    title: 'Best-Practice Execution',
    description:
      'International best practices, operating models, and innovative technologies tailored to each client.',
    icon: LuBlocks,
  },
];

export const homeStats: Stat[] = [
  { value: 'Est. 2018', label: 'Established in Zimbabwe' },
  { value: '10+ Years', label: 'Consultant experience' },
  { value: 'End-to-End', label: 'Data solutions capability' },
  { value: 'Public & Private', label: 'Sector delivery experience' },
  { value: 'Zimbabwe + Africa', label: 'Regional service footprint' },
];

export const aboutStats: Stat[] = [
  { value: '2018', label: 'Year established' },
  { value: '10+ Years', label: 'Consultant data expertise' },
  { value: 'One-Stop', label: 'Modern data platform services' },
  { value: 'Africa', label: 'Industry development commitment' },
];

export const processSteps = [
  {
    number: '01',
    title: 'Assess',
    description:
      'We assess your current data journey, operating model, and target outcomes.',
  },
  {
    number: '02',
    title: 'Architect',
    description:
      'We define strategy, blueprint architecture, and the delivery roadmap aligned to your stack.',
  },
  {
    number: '03',
    title: 'Implement',
    description:
      'Our teams deliver data engineering, analytics, AI, and applications using best practices.',
  },
  {
    number: '04',
    title: 'Operate',
    description:
      'Managed solutions provide ongoing support, optimization, and operational continuity.',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'What industries do you specialize in?',
    answer:
      'Orinon supports banking, agriculture, manufacturing, tourism, government, telecommunications, financial institutions, and other sectors across Zimbabwe and Africa.',
  },
  {
    question: 'What core services do you provide?',
    answer:
      'Core services include Advisory and Strategic Data Services, Data Engineering, Analytics and Visualisation, Artificial Intelligence, Managed Solutions, and Application Development.',
  },
  {
    question: 'Do you support cloud-based modernization?',
    answer:
      'Yes. Orinon helps clients modernize to cloud-ready architectures with supporting technologies and operational models aligned to business objectives.',
  },
  {
    question: 'Can Orinon provide managed services after implementation?',
    answer:
      'Yes. Orinon delivers managed solutions including outsourcing, support, maintenance, and technical expertise to ensure sustained performance.',
  },
  {
    question: 'Which regions do you serve?',
    answer:
      'Orinon serves organizations in Zimbabwe, across Africa, and in regional countries through local and remote delivery models.',
  },
  {
    question: 'How does Orinon contribute to data science growth in Africa?',
    answer:
      'Orinon supports career development, online training programs, vocational training, and partnerships with universities to grow data science capability in Africa.',
  },
];

export const teamMembers: TeamMember[] = [
  { name: 'Project Managers', role: 'Delivery leadership', initials: 'PM' },
  { name: 'Business Analysts', role: 'Business requirements and value mapping', initials: 'BA' },
  { name: 'Data Architects', role: 'Modern platform and data blueprint design', initials: 'DA' },
  { name: 'Data Engineers', role: 'Pipeline, integration, and platform implementation', initials: 'DE' },
];

export const timeline = [
  {
    year: '2018',
    title: 'Orinon Info Tech established',
    description:
      'Orinon launched to deliver specialized data analytics and digital solutions in Zimbabwe.',
  },
  {
    year: '2020',
    title: 'Regional sector growth',
    description:
      'Delivery expanded across key sectors including banking, government, telecoms, and manufacturing.',
  },
  {
    year: '2022',
    title: 'Expanded data platform services',
    description:
      'Capabilities scaled across data engineering, analytics, visualization, and managed solutions.',
  },
  {
    year: '2024',
    title: 'AI solution acceleration',
    description:
      'AI and data science offerings matured for automation, optimization, and decision intelligence.',
  },
  {
    year: '2026',
    title: 'Regional delivery momentum',
    description:
      'Orinon continues supporting organizations across Zimbabwe, Africa, and regional countries.',
  },
];
