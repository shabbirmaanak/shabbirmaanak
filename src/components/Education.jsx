import React from 'react';
import { GraduationCap, Sparkles, MapPin, Calendar, Award, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <GraduationCap size={13} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="text-gold-gradient">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Grounding professional practice in mass communication theory, multimedia production, and critical media analysis.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="education-timeline">
          {education.map((edu, idx) => (
            <div key={idx} className="glass-card edu-card">
              <div className="edu-card-left">
                <div className="edu-icon-box">
                  <GraduationCap size={26} className="text-gold" />
                </div>
                <div className="edu-status-badge">
                  <span>{edu.status}</span>
                </div>
              </div>

              <div className="edu-card-content">
                <div className="edu-title-group">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <div className="edu-meta-row">
                    <span className="edu-inst">{edu.institution}</span>
                    <span className="meta-dot">•</span>
                    <span className="edu-period">
                      <Calendar size={13} />
                      {edu.period}
                    </span>
                    <span className="meta-dot">•</span>
                    <span className="edu-loc">
                      <MapPin size={13} />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <p className="edu-desc">{edu.description}</p>

                <div className="edu-highlights-box">
                  <span className="highlights-label">Curriculum & Focus Highlights:</span>
                  <div className="highlights-grid">
                    {edu.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="highlight-item">
                        <CheckCircle size={15} className="text-gold" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .education-section {
          position: relative;
        }

        .education-timeline {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 960px;
          margin: 0 auto;
        }

        .edu-card {
          padding: 2.25rem 2.5rem;
          display: flex;
          gap: 2rem;
          background: rgba(15, 19, 28, 0.75);
          border-color: rgba(255, 255, 255, 0.08);
          align-items: flex-start;
        }

        .edu-card:hover {
          border-color: var(--border-gold);
        }

        .edu-card-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
        }

        .edu-icon-box {
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

        .edu-status-badge {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          color: var(--gold-300);
          text-align: center;
        }

        .edu-card-content {
          flex: 1;
        }

        .edu-title-group {
          margin-bottom: 1rem;
        }

        .edu-degree {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 0.4rem;
        }

        .edu-meta-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .edu-inst {
          font-weight: 700;
          color: var(--gold-400);
        }

        .edu-period, .edu-loc {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          color: var(--text-muted);
        }

        .meta-dot {
          color: var(--border-medium);
        }

        .edu-desc {
          font-size: 0.94rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }

        .edu-highlights-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 1.1rem 1.25rem;
        }

        .highlights-label {
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--gold-400);
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .highlights-grid {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.86rem;
          color: #cbd5e1;
        }

        .highlight-item svg {
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        @media (max-width: 768px) {
          .edu-card {
            flex-direction: column;
            gap: 1.25rem;
            padding: 1.75rem 1.5rem;
          }
          .edu-card-left {
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
