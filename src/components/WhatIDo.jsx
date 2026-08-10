import React from 'react';
import { Microscope, Video, Workflow, ArrowRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function WhatIDo() {
  const { whatIDo } = portfolioData;

  const iconMap = {
    Microscope: <Microscope size={28} className="text-gold" />,
    Video: <Video size={28} className="text-gold" />,
    Workflow: <Workflow size={28} className="text-gold" />
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section what-i-do-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Layers size={13} />
            <span>Core Pillars</span>
          </div>
          <h2 className="section-title">
            What I <span className="text-gold-gradient">Do & Deliver</span>
          </h2>
          <p className="section-subtitle">
            Three foundational disciplines that transform organizational challenges into streamlined, aesthetically elevated, and sustainable solutions.
          </p>
        </div>

        {/* 3 Main Pillars Cards */}
        <div className="pillars-grid">
          {whatIDo.map((pillar) => (
            <div key={pillar.id} className="glass-card pillar-service-card">
              <div className="pillar-top-meta">
                <div className="pillar-service-icon">
                  {iconMap[pillar.icon] || <Sparkles size={28} className="text-gold" />}
                </div>
                <span className="pillar-service-category">{pillar.category}</span>
              </div>

              <h3 className="pillar-service-title">{pillar.title}</h3>
              <div className="pillar-service-highlight">
                "{pillar.highlight}"
              </div>

              <p className="pillar-service-desc">
                {pillar.description}
              </p>

              <div className="capabilities-wrapper">
                <span className="capabilities-label">Core Capabilities:</span>
                <ul className="capabilities-list">
                  {pillar.capabilities.map((cap, idx) => (
                    <li key={idx} className="cap-item">
                      <CheckCircle2 size={16} className="text-gold cap-icon" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pillar-card-footer">
                <a 
                  href="#projects" 
                  onClick={(e) => scrollToSection(e, 'projects')}
                  className="pillar-explore-link"
                >
                  <span>Explore related projects</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .what-i-do-section {
          background: linear-gradient(180deg, rgba(8, 9, 13, 0) 0%, rgba(15, 18, 27, 0.4) 50%, rgba(8, 9, 13, 0) 100%);
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .pillar-service-card {
          display: flex;
          flex-direction: column;
          padding: 2.25rem 2rem;
          border-color: rgba(255, 255, 255, 0.08);
          background: rgba(14, 18, 26, 0.7);
        }

        .pillar-top-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .pillar-service-icon {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--gold-glow);
        }

        .pillar-service-category {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--gold-400);
          background: rgba(212, 175, 55, 0.08);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .pillar-service-title {
          font-size: 1.45rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .pillar-service-highlight {
          font-size: 0.88rem;
          font-style: italic;
          color: #e2e8f0;
          margin-bottom: 1.25rem;
          padding-left: 0.75rem;
          border-left: 2px solid var(--gold-400);
        }

        .pillar-service-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.75rem;
        }

        .capabilities-wrapper {
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-subtle);
          margin-bottom: 1.5rem;
        }

        .capabilities-label {
          display: block;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-muted);
          font-weight: 600;
          margin-bottom: 0.85rem;
        }

        .capabilities-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .cap-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.86rem;
          color: #cbd5e1;
        }

        .cap-icon {
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .pillar-card-footer {
          padding-top: 1rem;
        }

        .pillar-explore-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--gold-400);
          transition: gap 0.2s ease, color 0.2s ease;
        }

        .pillar-explore-link:hover {
          color: var(--gold-300);
          gap: 0.75rem;
        }

        @media (max-width: 1040px) {
          .pillars-grid {
            grid-template-columns: 1fr;
            max-width: 600px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
