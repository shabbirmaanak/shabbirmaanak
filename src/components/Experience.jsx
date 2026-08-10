import React, { useState } from 'react';
import { Briefcase, Building, MapPin, Calendar, Search, Film, Cpu, ArrowUpRight, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;
  const [activeTab, setActiveTab] = useState(0);

  const pillarIcons = [
    <Search key="rd" size={20} className="text-gold" />,
    <Film key="media" size={20} className="text-gold" />,
    <Cpu key="ops" size={20} className="text-gold" />
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Briefcase size={13} />
            <span>Career & Leadership</span>
          </div>
          <h2 className="section-title">
            Professional <span className="text-gold-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Leading high-impact initiatives across research, multimedia communication, and operational engineering at Dawat-e-Hadiyah.
          </p>
        </div>

        {/* Main Experience Role Card */}
        <div className="glass-card experience-main-card">
          {/* Header of Role */}
          <div className="exp-card-header">
            <div className="exp-org-badge">
              <Building size={22} className="text-gold" />
            </div>
            <div className="exp-org-details">
              <div className="exp-title-row">
                <h3 className="exp-role">{experience.role}</h3>
                <span className="exp-period-tag">{experience.period}</span>
              </div>
              <div className="exp-meta-row">
                <span className="exp-org-name">{experience.organization}</span>
                <span className="meta-divider">•</span>
                <span className="exp-dept">{experience.department}</span>
                <span className="meta-divider">•</span>
                <span className="exp-loc">
                  <MapPin size={13} />
                  {experience.location}
                </span>
              </div>
            </div>
          </div>

          <p className="exp-summary-text">
            {experience.description}
          </p>

          {/* Interactive Functional Pillars Tabs */}
          <div className="exp-pillars-container">
            <div className="pillar-tab-buttons" role="tablist">
              {experience.pillars.map((pillar, idx) => (
                <button
                  key={pillar.title}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === idx}
                  className={`pillar-tab-btn ${activeTab === idx ? 'active' : ''}`}
                  onClick={() => setActiveTab(idx)}
                >
                  <span className="pillar-tab-icon">{pillarIcons[idx]}</span>
                  <span className="pillar-tab-title">{pillar.title}</span>
                </button>
              ))}
            </div>

            {/* Active Pillar Content */}
            <div className="pillar-tab-content" role="tabpanel">
              <div className="pillar-content-header">
                <div className="pillar-header-left">
                  <span className="pillar-category-label">Core Functional Area</span>
                  <h4 className="pillar-active-title">{experience.pillars[activeTab].title}</h4>
                </div>
                <div className="pillar-count-badge">
                  {experience.pillars[activeTab].responsibilities.length} Key Responsibilities
                </div>
              </div>

              <div className="responsibilities-grid">
                {experience.pillars[activeTab].responsibilities.map((resp, i) => (
                  <div key={i} className="resp-card">
                    <div className="resp-icon">
                      <CheckCircle size={18} className="text-gold" />
                    </div>
                    <p className="resp-text">{resp}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .experience-section {
          position: relative;
        }

        .experience-main-card {
          padding: 2.75rem 2.5rem;
          border-color: rgba(212, 175, 55, 0.2);
          background: linear-gradient(145deg, rgba(16, 20, 30, 0.8) 0%, rgba(10, 12, 18, 0.9) 100%);
        }

        .exp-card-header {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .exp-org-badge {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: var(--gold-glow);
        }

        .exp-org-details {
          flex: 1;
        }

        .exp-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 0.35rem;
        }

        .exp-role {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .exp-period-tag {
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.3rem 0.9rem;
          border-radius: var(--radius-full);
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid var(--border-gold);
          color: var(--gold-300);
        }

        .exp-meta-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.65rem;
          font-size: 0.92rem;
          color: var(--text-secondary);
        }

        .exp-org-name {
          font-weight: 700;
          color: #f1f5f9;
        }

        .exp-dept {
          color: var(--gold-400);
        }

        .exp-loc {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          color: var(--text-muted);
        }

        .meta-divider {
          color: var(--border-medium);
        }

        .exp-summary-text {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2.25rem;
          padding-bottom: 1.75rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        /* Pillars Tabs */
        .pillar-tab-buttons {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .pillar-tab-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 600;
          transition: all var(--transition-smooth);
        }

        .pillar-tab-btn:hover {
          background: rgba(255, 255, 255, 0.06);
          color: var(--text-primary);
          border-color: var(--border-medium);
        }

        .pillar-tab-btn.active {
          background: rgba(212, 175, 55, 0.12);
          border-color: var(--gold-400);
          color: var(--gold-300);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .pillar-tab-content {
          background: rgba(8, 10, 15, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 2rem;
        }

        .pillar-content-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .pillar-category-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--gold-400);
          font-weight: 600;
          display: block;
          margin-bottom: 0.2rem;
        }

        .pillar-active-title {
          font-size: 1.3rem;
          color: var(--text-primary);
        }

        .pillar-count-badge {
          font-size: 0.8rem;
          color: var(--text-muted);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
        }

        .responsibilities-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .resp-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem 1.25rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
        }

        .resp-card:hover {
          background: rgba(212, 175, 55, 0.04);
          border-color: rgba(212, 175, 55, 0.2);
          transform: translateX(4px);
        }

        .resp-icon {
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .resp-text {
          font-size: 0.95rem;
          color: #cbd5e1;
          line-height: 1.55;
        }

        @media (max-width: 860px) {
          .experience-main-card {
            padding: 1.75rem 1.25rem;
          }
          .pillar-tab-buttons {
            grid-template-columns: 1fr;
          }
          .exp-card-header {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
