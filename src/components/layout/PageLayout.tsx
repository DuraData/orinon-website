import { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';

import { Footer } from './Footer';
import { Header } from './Header';

export function PageLayout({ children }: PropsWithChildren) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-slate">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
