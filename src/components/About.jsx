import React from 'react';
import { Calendar, Building2, Layers, Target, CheckCircle2, Sparkles, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { aboutStats, philosophy } = portfolioData;

  const iconMap = {
    Calendar: <Calendar size={24} className="text-gold" />,
    Building2: <Building2 size={24} className="text-gold" />,
    Layers: <Layers size={24} className="text-gold" />,
    Target: <Target size={24} className="text-gold" />,
  };

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Sparkles size={13} />
            <span>About Shabbir Maanak</span>
          </div>
          <h2 className="section-title">
            Working at the Intersection of <span className="text-gold-gradient">Technology, Design & Operations</span>
          </h2>
          <p className="section-subtitle">
            A multi-disciplinary professional committed to building practical solutions, streamlining complex organizational workflows, and crafting purposeful digital communication.
          </p>
        </div>

        {/* 4 Central Data Info Cards */}
        <div className="about-stats-grid">
          {aboutStats.map((stat, idx) => (
            <div key={idx} className="glass-card stat-card">
              <div className="stat-card-top">
                <div className="stat-icon-wrapper">
                  {iconMap[stat.icon] || <Compass size={24} className="text-gold" />}
                </div>
                <span className="stat-label">{stat.label}</span>
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-subtext">{stat.subtext}</div>
            </div>
          ))}
        </div>

        {/* Narrative & Core Principles Grid */}
        <div className="about-content-grid">
          {/* Left: Professional Story */}
          <div className="glass-card about-story-card">
            <h3 className="story-title">
              Bridging the gap between <span className="text-gold-gradient">creative vision</span> and <span className="text-gold-gradient">flawless execution</span>.
            </h3>
            <p className="story-paragraph">
              Shabbir is not confined to a single traditional discipline. His work unites technological research, multimedia design, strategic communication, and hands-on operational management.
            </p>
            <p className="story-paragraph">
              Since 2019 at <strong>Dawat-e-Hadiyah</strong> (Department of Well-being of Women and Children), he has driven digital transformations, authored standard operating manuals, directed audiovisual campaigns, and introduced AI-augmented productivity tools to enhance institutional impact.
            </p>

            <div className="disciplines-chips">
              {['Technology', 'Multimedia', 'Design', 'Research', 'Communication', 'Operations', 'Innovation'].map((item) => (
                <span key={item} className="tag tag-gold">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: The 3 Core Tenets */}
          <div className="glass-card tenets-card">
            <h3 className="tenets-heading">Core Working Principles</h3>
            <p className="tenets-sub">The non-negotiable standards that guide every initiative:</p>

            <div className="tenets-list">
              <div className="tenet-item">
                <div className="tenet-check">
                  <CheckCircle2 size={20} className="text-gold" />
                </div>
                <div className="tenet-text">
                  <h4>Technology should simplify lives.</h4>
                  <p>Tools and automation must eliminate human fatigue, minimize repetitive errors, and make workflows effortless.</p>
                </div>
              </div>

              <div className="tenet-item">
                <div className="tenet-check">
                  <CheckCircle2 size={20} className="text-gold" />
                </div>
                <div className="tenet-text">
                  <h4>Communication should connect people.</h4>
                  <p>Visual and written narratives should be empathetic, culturally resonant, and immediately understandable.</p>
                </div>
              </div>

              <div className="tenet-item">
                <div className="tenet-check">
                  <CheckCircle2 size={20} className="text-gold" />
                </div>
                <div className="tenet-text">
                  <h4>Design should have purpose.</h4>
                  <p>Aesthetics are not superficial decoration—they are structured visual architecture that drives clarity and action.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: linear-gradient(180deg, rgba(8,9,13,0) 0%, rgba(14,17,24,0.4) 50%, rgba(8,9,13,0) 100%);
        }

        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 3.5rem;
        }

        .stat-card {
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .stat-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .stat-icon-wrapper {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-label {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-muted);
          font-weight: 600;
        }

        .stat-value {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 2.2vw, 1.85rem);
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.2;
          margin-bottom: 0.4rem;
        }

        .stat-subtext {
          font-size: 0.82rem;
          color: var(--text-secondary);
        }

        .about-content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .about-story-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .story-title {
          font-size: 1.5rem;
          line-height: 1.4;
          margin-bottom: 1.25rem;
        }

        .story-paragraph {
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 1.25rem;
        }

        .disciplines-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .tenets-card {
          padding: 2.25rem 2rem;
        }

        .tenets-heading {
          font-size: 1.35rem;
          margin-bottom: 0.4rem;
        }

        .tenets-sub {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        .tenets-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .tenet-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .tenet-check {
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .tenet-text h4 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .tenet-text p {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        @media (max-width: 1024px) {
          .about-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .about-content-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .about-stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
