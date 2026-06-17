import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface Props {
  children: ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <div className="page-shell">
      <div className="poster-background" aria-hidden="true" />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
