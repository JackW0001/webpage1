import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { NavItem } from '@/types';

const NAV_ITEMS: NavItem[] = [
  { label: '首页', href: '/' },
  { label: '关于音乐会', href: '/' },
  { label: '曲目亮点', href: '/' },
  { label: '合唱团', href: '/choir' },
  { label: '支持我们', href: '/tiger-fintech' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Back to home">
        <img src="/assets/logo-strip.jpg" alt="Tiger Brokers and The Cloud logos" />
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
