import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { NavLink, useLocation } from 'react-router-dom';

import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Learn', href: '/learn' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition ${
      isActive ? 'text-brand-700' : 'text-slate hover:text-brand-700'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition ${
        scrolled
          ? 'border-line/90 bg-white/90 shadow-soft backdrop-blur'
          : 'border-transparent bg-white'
      }`}
    >
      <Container className="flex h-[74px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={linkClasses}>
              {({ isActive }) => (
                <span className={`border-b-2 pb-1 ${isActive ? 'border-brand-700' : 'border-transparent'}`}>
                  {item.label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/contact" className="hidden lg:inline-flex">
            Get Started
          </Button>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <HiXMark className="text-2xl" /> : <HiBars3 className="text-2xl" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-ink lg:hidden"
          >
            <Container className="flex flex-col gap-4 py-6">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) =>
                      `rounded-xl px-1 py-3 font-display text-2xl font-semibold ${
                        isActive ? 'text-gold' : 'text-white'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
              <Button href="/contact">Get Started</Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
