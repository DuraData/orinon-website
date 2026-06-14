import { LuFacebook, LuInstagram, LuLinkedin, LuTwitter } from 'react-icons/lu';
import { Link } from 'react-router-dom';

import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';

const footerGroups = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Learn', href: '/learn' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Cloud & Infrastructure', href: '/services' },
      { label: 'Software Development', href: '/services' },
      { label: 'Cybersecurity', href: '/services' },
      { label: 'AI & Automation', href: '/services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Learn', href: '/learn' },
      { label: 'FAQs', href: '/services' },
      { label: 'Privacy Policy', href: '/contact' },
      { label: 'Terms', href: '/contact' },
    ],
  },
];

const socials = [
  { label: 'LinkedIn', icon: LuLinkedin, href: 'https://www.linkedin.com/' },
  { label: 'Facebook', icon: LuFacebook, href: 'https://www.facebook.com/' },
  { label: 'X', icon: LuTwitter, href: 'https://x.com/' },
  { label: 'Instagram', icon: LuInstagram, href: 'https://www.instagram.com/' },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="py-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.6fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Logo dark />
            <p className="mt-5 text-sm leading-7 text-indigo-100/70">
              Technology services that help businesses scale with confidence. Software, cloud,
              security, and managed IT delivered by senior engineers.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-indigo-100/75 transition hover:bg-brand-700 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-base font-semibold">{group.title}</h3>
              <div className="mt-5 flex flex-col gap-3">
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-sm text-indigo-100/70 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-sm text-indigo-100/55">
          <p>© 2026 Orinon Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/contact" className="transition hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
