import { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { href: '#trees', label: 'Our Trees' },
  { href: '#visit', label: 'Visit Us' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#faq', label: 'FAQ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#hero" className="navbar__brand">
        <span className="navbar__brand-icon">🌲</span>
        <span className="navbar__brand-text">Whispering Pines</span>
      </a>

      <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          </li>
        ))}
        <li>
          <a href="tel:9208342823" className="navbar__cta">
            (920) 834-2823
          </a>
        </li>
      </ul>

      <button
        className={`navbar__burger ${open ? 'navbar__burger--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
