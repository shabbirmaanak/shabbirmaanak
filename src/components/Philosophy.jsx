import React from 'react';
import { Quote, Sparkles, Compass, Lightbulb, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Philosophy() {
  const { philosophy } = portfolioData;

  return (
    <section className="philosophy-section">
      <div className="container">
        <div className="philosophy-card">
          {/* Background Ambient Glow */}
          <div className="philosophy-glow" />
          
          <div className="philosophy-header-pill">
            <Sparkles size={13} />
            <span>Guiding Ethos</span>
          </div>

          <div className="quote-icon-box">
            <Quote size={32} className="text-gold" />
          </div>

          <blockquote className="philosophy-quote">
            "{philosophy.quote}"
          </blockquote>

          <p className="philosophy-subtext">
            {philosophy.subtext}
          </p>

          <div className="philosophy-divider">
            <span className="divider-line" />
            <span className="divider-diamond">◆</span>
            <span className="divider-line" />
          </div>

          <div className="principles-mini-grid">
            {philosophy.principles.map((prin, i) => (
              <div key={i} className="principle-mini-item">
                <div className="principle-num">0{i + 1}</div>
                <div className="principle-content">
                  <h4>{prin.title}</h4>
                  <p>{prin.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .philosophy-section {
          padding-top: 4rem;
          padding-bottom: 4rem;
          position: relative;
        }

        .philosophy-card {
          position: relative;
          background: linear-gradient(135deg, rgba(18, 22, 34, 0.85) 0%, rgba(10, 12, 18, 0.95) 100%);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-xl);
          padding: 4.5rem 3.5rem;
          text-align: center;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7), var(--gold-glow);
          overflow: hidden;
        }

        .philosophy-glow {
          position: absolute;
          top: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 500px;
          height: 300px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%);
          filter: blur(50px);
          pointer-events: none;
        }

        .philosophy-header-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 1rem;
          border-radius: var(--radius-full);
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid var(--border-gold);
          color: var(--gold-400);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 2rem;
        }

        .quote-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem auto;
        }

        .philosophy-quote {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 3.2vw, 2.5rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.35;
          max-width: 900px;
          margin: 0 auto 1.5rem auto;
          letter-spacing: -0.02em;
        }

        .philosophy-subtext {
          font-size: 1.1rem;
          color: var(--gold-300);
          max-width: 680px;
          margin: 0 auto 2.5rem auto;
          line-height: 1.6;
          font-weight: 500;
        }

        .philosophy-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          max-width: 300px;
          margin: 0 auto 3rem auto;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold-500), transparent);
        }

        .divider-diamond {
          color: var(--gold-400);
          font-size: 0.75rem;
        }

        .principles-mini-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          text-align: left;
          border-top: 1px solid var(--border-subtle);
          padding-top: 2.5rem;
        }

        .principle-mini-item {
          display: flex;
          gap: 1rem;
        }

        .principle-num {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--gold-400);
          line-height: 1;
          opacity: 0.6;
        }

        .principle-content h4 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
        }

        .principle-content p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        @media (max-width: 900px) {
          .philosophy-card {
            padding: 3rem 1.75rem;
          }
          .principles-mini-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
