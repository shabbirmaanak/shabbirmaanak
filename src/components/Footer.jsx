import logoImg from '../assets/logo.jpg';
import { ArrowUp, Linkedin, Instagram, Github, Mail, Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-top-row">
          {/* Brand Info */}
          <div className="footer-brand-block">
            <div className="footer-logo">
              <div className="footer-monogram">
                <img src={logoImg} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
              </div>
              <div className="footer-brand-text">
                <span className="footer-name">{personalInfo.name}</span>
                <span className="footer-sub">{personalInfo.positioning}</span>
              </div>
            </div>
            <p className="footer-tagline">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Sitemap Navigation */}
          <div className="footer-nav-block">
            <span className="footer-block-heading">Navigation</span>
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="footer-social-block">
            <span className="footer-block-heading">Connect</span>
            <div className="footer-social-links">
              {personalInfo.linkedin && (
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="footer-social-icon"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {personalInfo.instagram && (
                <a 
                  href={personalInfo.instagram} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="footer-social-icon"
                  aria-label="Instagram Profile"
                >
                  <Instagram size={18} />
                </a>
              )}
              {personalInfo.github && (
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="footer-social-icon"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
              )}
              {personalInfo.email && (
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="footer-social-icon"
                  aria-label="Email Shabbir Maanak"
                >
                  <Mail size={18} />
                </a>
              )}
            </div>

            <div className="footer-loc-tag">
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Professional Portfolio & Project Archive.
          </p>

          <button 
            type="button"
            onClick={scrollToTop} 
            className="back-to-top-btn"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-wrapper {
          background: #06070a;
          border-top: 1px solid var(--border-subtle);
          padding-top: 5rem;
          padding-bottom: 3rem;
          position: relative;
        }

        .footer-top-row {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 3.5rem;
          margin-bottom: 4rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1rem;
        }

        .footer-monogram {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(212, 175, 55, 0.05) 100%);
          border: 1.5px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.15rem;
          color: var(--gold-400);
        }

        .footer-brand-text {
          display: flex;
          flex-direction: column;
        }

        .footer-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .footer-sub {
          font-size: 0.75rem;
          color: var(--gold-400);
        }

        .footer-tagline {
          font-size: 0.92rem;
          color: var(--text-secondary);
          max-width: 380px;
          line-height: 1.6;
        }

        .footer-block-heading {
          display: block;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--gold-400);
          font-weight: 700;
          margin-bottom: 1.25rem;
        }

        .footer-nav-list {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.65rem;
        }

        .footer-nav-link {
          font-size: 0.88rem;
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }

        .footer-nav-link:hover {
          color: var(--gold-300);
        }

        .footer-social-links {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .footer-social-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .footer-social-icon:hover {
          background: rgba(212, 175, 55, 0.12);
          border-color: var(--border-gold);
          color: var(--gold-300);
          transform: translateY(-2px);
        }

        .footer-loc-tag {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .footer-bottom-row {
          padding-top: 2rem;
          border-top: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-copyright {
          font-size: 0.84rem;
          color: var(--text-muted);
        }

        .back-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          font-size: 0.82rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }

        .back-to-top-btn:hover {
          background: rgba(212, 175, 55, 0.1);
          border-color: var(--border-gold);
          color: var(--gold-300);
        }

        @media (max-width: 900px) {
          .footer-top-row {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </footer>
  );
}
