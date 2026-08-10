import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

import logoImg from '../assets/logo.jpg';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'What I Do', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Identify active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Monogram */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="brand-logo"
          aria-label="Shabbir Maanak Home"
        >
          <div className="monogram-box">
            <img src={logoImg} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
          </div>
          <div className="brand-text">
            <span className="brand-name">{portfolioData.personalInfo.name}</span>
            <span className="brand-role">Portfolio</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.name}
                    {isActive && <span className="active-dot" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          <button 
            type="button"
            onClick={onOpenResume} 
            className="btn btn-gold-outline btn-sm nav-resume-btn"
            aria-label="Download Resume"
          >
            <FileText size={15} />
            <span>Resume</span>
          </button>

          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn btn-primary btn-sm nav-cta-btn"
          >
            <span>Let's Talk</span>
            <Send size={14} />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <div className="brand-logo">
                <div className="monogram-box">
                  <img src={logoImg} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                </div>
                <div className="brand-text">
                  <span className="brand-name">Shabbir Maanak</span>
                  <span className="brand-role">R&D | IT | Operations</span>
                </div>
              </div>
              <button 
                type="button"
                className="close-drawer-btn" 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <ul className="mobile-nav-list">
              {navLinks.map((link) => {
                const id = link.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    >
                      <span>{link.name}</span>
                      {isActive && <Sparkles size={16} className="text-gold" />}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mobile-menu-actions">
              <button 
                type="button"
                onClick={() => { setMobileMenuOpen(false); onOpenResume(); }} 
                className="btn btn-gold-outline"
              >
                <FileText size={16} />
                <span>Download Resume (PDF)</span>
              </button>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn btn-primary"
              >
                <Send size={16} />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: var(--nav-height);
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          background: transparent;
        }

        .navbar-scrolled {
          background: rgba(8, 9, 13, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-subtle);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .monogram-box {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(212, 175, 55, 0.05) 100%);
          border: 1.5px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--gold-400);
          box-shadow: var(--gold-glow);
          transition: transform 0.3s ease;
        }

        .brand-logo:hover .monogram-box {
          transform: scale(1.05);
          border-color: var(--gold-300);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: var(--text-primary);
        }

        .brand-role {
          font-size: 0.72rem;
          color: var(--text-muted);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
        }

        .nav-list {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 0.25rem;
          padding: 0.3rem 0.5rem;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          backdrop-filter: blur(12px);
        }

        .nav-link {
          position: relative;
          padding: 0.45rem 0.95rem;
          font-size: 0.86rem;
          font-weight: 500;
          color: var(--text-secondary);
          border-radius: var(--radius-full);
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .nav-link.active {
          color: var(--gold-300);
          background: rgba(212, 175, 55, 0.1);
          font-weight: 600;
        }

        .active-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--gold-400);
          box-shadow: 0 0 8px var(--gold-400);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .btn-sm {
          padding: 0.55rem 1.15rem;
          font-size: 0.85rem;
        }

        .mobile-toggle-btn {
          display: none;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
        }

        /* Mobile Drawer */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          z-index: 1001;
          display: flex;
          justify-content: flex-end;
          animation: fadeIn 0.2s ease;
        }

        .mobile-menu-drawer {
          width: 85%;
          max-width: 380px;
          height: 100%;
          background: #0e1118;
          border-left: 1px solid var(--border-medium);
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          box-shadow: -10px 0 40px rgba(0,0,0,0.8);
        }

        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 1.5rem;
        }

        .close-drawer-btn {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          color: var(--text-secondary);
          background: rgba(255,255,255,0.05);
        }

        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
          overflow-y: auto;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid transparent;
        }

        .mobile-nav-link.active {
          color: var(--gold-300);
          background: rgba(212, 175, 55, 0.1);
          border-color: var(--border-gold);
          font-weight: 600;
        }

        .mobile-menu-actions {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        @media (max-width: 1080px) {
          .desktop-nav {
            display: none;
          }
          .nav-resume-btn {
            display: none;
          }
          .mobile-toggle-btn {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
