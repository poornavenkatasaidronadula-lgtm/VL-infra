import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Our Services', href: '/services' },
  { label: 'Projects', href: '/#projects' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact Us', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Determine active link based on current path and hash
  const getIsActive = (href) => {
    if (href === '/') {
      return location.pathname === '/' && location.hash === '';
    }
    if (href === '/services') {
      return location.pathname === '/services';
    }
    // For hash links
    return location.pathname === '/' && location.hash === href.replace('/', '');
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <img src="/Logo.jpeg" alt="VL Infra Logo" className="navbar__logo-img" />
        </Link>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {NAV_LINKS.map((link) => {
            const isActive = getIsActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA + hamburger */}
        <div className="navbar__right">
          <Link to="/#contact" className="btn btn-primary navbar__cta">Get Quote</Link>
          <button
            className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link to={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li><Link to="/#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Get a Quote</Link></li>
        </ul>
      </div>
    </nav>
  );
}
