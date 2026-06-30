import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { NavItem } from '@/types';

const NAV_ITEMS: NavItem[] = [
  { label: '首页', href: '/' },
  { label: '购票信息', href: '/ticket' },
  { label: '合唱团', href: '/choir' },
  { label: 'Tiger Fintech (NZ) Limited', href: 'https://www.itiger.com/nz' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Back to home">
        <img src="/assets/logo2.png" alt="Tiger Brokers and The Cloud logos" />
      </Link>

      <nav className={`main-nav ${isOpen ? 'is-open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <Link key={item.label} to={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        className={`menu-button ${isOpen ? 'is-open' : ''}`}
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
