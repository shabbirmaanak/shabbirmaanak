import React from 'react';
import { ArrowRight, Download, Send, Sparkles, ShieldCheck, Compass, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { personalInfo } = portfolioData;

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Decorative Elements */}
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />
      <div className="hero-grid-pattern" />

      <div className="container hero-container">
        {/* Top Status & Role Pill */}
        <div className="hero-badge-container animate-fade-in">
          <div className="hero-status-pill">
            <span className="status-indicator">
              <span className="status-ping" />
              <span className="status-core" />
            </span>
            <span className="status-text">{personalInfo.role} • {personalInfo.organization}</span>
          </div>

          <div className="hero-disciplines-pill">
            <Sparkles size={14} className="text-gold" />
            <span>{personalInfo.positioning}</span>
          </div>
        </div>

        {/* Main Identity & Heading */}
        <div className="hero-headline-group">
          <h1 className="hero-name">
            <span className="name-prefix">Hello, I'm</span>
            <span className="name-main text-gold-gradient">{personalInfo.name}</span>
          </h1>

          <p className="hero-core-statement">
            "{personalInfo.tagline}"
          </p>

          <p className="hero-bio">
            {personalInfo.bio}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="hero-cta-group">
          <a 
            href="#projects" 
            onClick={(e) => scrollToSection(e, 'projects')}
            className="btn btn-primary hero-btn"
          >
            <span>View My Work</span>
            <ArrowRight size={18} />
          </a>

          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="btn btn-outline hero-btn"
          >
            <span>Let's Connect</span>
            <Send size={16} />
          </a>

          <button 
            type="button"
            onClick={onOpenResume}
            className="btn btn-gold-outline hero-btn"
          >
            <Download size={16} />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Quick Identity Pillars / Fast Stats */}
        <div className="hero-pillars-grid">
          <div className="hero-pillar-card">
            <div className="pillar-icon-box">
              <Compass size={22} className="text-gold" />
            </div>
            <div className="pillar-info">
              <span className="pillar-label">Research & Development</span>
              <span className="pillar-desc">AI tools, practical tech & continuous innovation</span>
            </div>
          </div>

          <div className="hero-pillar-card">
            <div className="pillar-icon-box">
              <Code2 size={22} className="text-gold" />
            </div>
            <div className="pillar-info">
              <span className="pillar-label">IT & Multimedia</span>
              <span className="pillar-desc">Graphic design, video production & visual narrative</span>
            </div>
          </div>

          <div className="hero-pillar-card">
            <div className="pillar-icon-box">
              <ShieldCheck size={22} className="text-gold" />
            </div>
            <div className="pillar-info">
              <span className="pillar-label">Operations & Systems</span>
              <span className="pillar-desc">Scalable workflows, documentation & execution</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: calc(var(--nav-height) + 2rem);
          padding-bottom: 5rem;
          overflow: hidden;
        }

        .hero-glow-1 {
          position: absolute;
          top: 15%;
          left: 50%;
          transform: translateX(-50%);
          width: 650px;
          height: 380px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, rgba(212, 175, 55, 0.02) 60%, transparent 80%);
          filter: blur(60px);
          pointer-events: none;
          z-index: 0;
        }

        .hero-glow-2 {
          position: absolute;
          bottom: 10%;
          right: 5%;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(49, 46, 129, 0.15) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }

        .hero-grid-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
          pointer-events: none;
          z-index: 0;
        }

        .hero-container {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero-badge-container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .hero-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1.1rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-medium);
          backdrop-filter: blur(10px);
        }

        .status-indicator {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 10px;
          height: 10px;
        }

        .status-ping {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--gold-400);
          opacity: 0.75;
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .status-core {
          position: relative;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold-400);
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }

        .status-text {
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .hero-disciplines-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1.1rem;
          border-radius: var(--radius-full);
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid var(--border-gold);
          color: var(--gold-300);
          font-size: 0.84rem;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .hero-headline-group {
          max-width: 920px;
          margin-bottom: 2.75rem;
        }

        .hero-name {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          margin-bottom: 1.25rem;
        }

        .name-prefix {
          font-size: clamp(1rem, 2vw, 1.35rem);
          font-weight: 500;
          color: var(--text-secondary);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .name-main {
          font-size: clamp(2.75rem, 7vw, 5.25rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1.08;
          text-transform: uppercase;
        }

        .hero-core-statement {
          font-family: var(--font-display);
          font-size: clamp(1.25rem, 2.8vw, 1.85rem);
          font-weight: 600;
          color: #f1f5f9;
          line-height: 1.4;
          margin-bottom: 1.25rem;
          letter-spacing: -0.015em;
        }

        .hero-bio {
          font-size: clamp(1rem, 1.5vw, 1.15rem);
          color: var(--text-secondary);
          max-width: 760px;
          margin: 0 auto;
          line-height: 1.75;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 4rem;
        }

        .hero-btn {
          min-width: 175px;
          padding: 0.95rem 2rem;
          font-size: 0.98rem;
        }

        /* Pillars Grid */
        .hero-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          width: 100%;
          max-width: 1040px;
        }

        .hero-pillar-card {
          background: rgba(18, 22, 32, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1.35rem 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          text-align: left;
          backdrop-filter: blur(12px);
          transition: all var(--transition-smooth);
        }

        .hero-pillar-card:hover {
          border-color: var(--border-gold);
          transform: translateY(-3px);
          background: rgba(24, 29, 44, 0.8);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .pillar-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pillar-info {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .pillar-label {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .pillar-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.45;
        }

        @media (max-width: 900px) {
          .hero-pillars-grid {
            grid-template-columns: 1fr;
            max-width: 480px;
          }
        }
      `}</style>
    </section>
  );
}
