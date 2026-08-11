import React, { useEffect } from 'react';
import { X, ExternalLink, Sparkles, CheckCircle2, AlertCircle, Compass, Zap, Target, Wrench } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="project-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="project-modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Header Banner */}
        <div 
          className="modal-banner"
          style={{ background: project.thumbnailGradient }}
        >
          <div className="modal-banner-content">
            <div className="modal-category-tag">
              <Sparkles size={13} />
              <span>{project.categoryLabel}</span>
            </div>
            <h2 className="modal-project-title">{project.title}</h2>
            <div className="modal-role-pill">
              <strong>Role:</strong> {project.role}
            </div>
          </div>

          <button 
            type="button"
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close Case Study"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body with Case Study Sections */}
        <div className="modal-body">
          {/* Key Impact Banner */}
          <div className="modal-impact-banner">
            <div className="impact-icon">
              <Zap size={22} style={{ color: 'var(--gold-primary)' }} />
            </div>
            <div className="impact-text">
              <span className="impact-label">Primary Outcome & Impact</span>
              <p className="impact-value">{project.outcome}</p>
            </div>
          </div>

          <div className="modal-sections-grid">
            {/* Overview */}
            <div className="modal-section-card">
              <div className="section-card-title">
                <Compass size={18} style={{ color: 'var(--ruby-glow)' }} />
                <h3>Project Overview</h3>
              </div>
              <p>{project.overview}</p>
            </div>

            {/* Problem Statement */}
            <div className="modal-section-card">
              <div className="section-card-title">
                <AlertCircle size={18} style={{ color: 'var(--ruby-glow)' }} />
                <h3>The Challenge & Problem</h3>
              </div>
              <p>{project.problem}</p>
            </div>

            {/* Strategic Approach */}
            <div className="modal-section-card full-width">
              <div className="section-card-title">
                <Target size={18} style={{ color: 'var(--gold-primary)' }} />
                <h3>Strategic Approach & Implementation</h3>
              </div>
              <p>{project.approach}</p>
            </div>

            {/* Results & Value Delivered */}
            <div className="modal-section-card">
              <div className="section-card-title">
                <CheckCircle2 size={18} style={{ color: 'var(--ruby-glow)' }} />
                <h3>Tangible Results</h3>
              </div>
              <p>{project.result}</p>
            </div>

            {/* Long-term Impact */}
            <div className="modal-section-card">
              <div className="section-card-title">
                <Sparkles size={18} style={{ color: 'var(--gold-primary)' }} />
                <h3>Why It Mattered (Impact)</h3>
              </div>
              <p>{project.impact}</p>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="modal-tools-section">
            <div className="tools-header">
              <Wrench size={18} style={{ color: 'var(--gold-primary)' }} />
              <h4>Technologies & Tools Utilized</h4>
            </div>
            <div className="modal-tools-tags">
              {project.tools.map((tool) => (
                <span key={tool} className="vcard-tag vcard-tag-gold">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <div className="modal-footer-meta">
            <span>Case Study for {project.title}</span>
          </div>
          <button 
            type="button"
            className="btn btn-outline btn-sm" 
            onClick={onClose}
          >
            Close Case Study
          </button>
        </div>
      </div>

      <style>{`
        .project-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(4, 5, 8, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 2000;
          display: flex;
          align-items: flex-end; /* bottom-sheet on mobile */
          justify-content: center;
          padding: 0;
          animation: fadeIn 0.25s ease;
        }

        .project-modal-dialog {
          width: 100%;
          max-width: 860px;
          /* Full height on mobile, 90vh on desktop */
          max-height: 92vh;
          background: #0d1017;
          border: 1px solid var(--border-gold);
          /* Rounded top corners only on mobile */
          border-radius: 20px 20px 0 0;
          display: flex;
          flex-direction: column;
          box-shadow: 0 -10px 60px rgba(0, 0, 0, 0.85), var(--gold-glow);
          overflow: hidden;
        }

        .modal-banner {
          position: relative;
          padding: 1.75rem 1.25rem 1.25rem 1.25rem;
          border-bottom: 1px solid var(--border-subtle);
          flex-shrink: 0;
        }

        .modal-banner-content {
          max-width: 90%;
        }

        .modal-category-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.15);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--gold-300);
          margin-bottom: 0.75rem;
          backdrop-filter: blur(8px);
        }

        .modal-project-title {
          font-size: clamp(1.4rem, 2.5vw, 1.85rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.25;
          margin-bottom: 0.75rem;
        }

        .modal-role-pill {
          display: inline-block;
          font-size: 0.85rem;
          color: #cbd5e1;
          background: rgba(0, 0, 0, 0.3);
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
        }

        .modal-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          background: rgba(212, 175, 55, 0.2);
          border-color: var(--gold-400);
          color: var(--gold-300);
          transform: rotate(90deg);
        }

        .modal-body {
          padding: 1.25rem;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex: 1;
        }

        .modal-impact-banner {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(212, 175, 55, 0.03) 100%);
          border: 1px solid var(--border-gold);
        }

        .impact-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(212, 175, 55, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .impact-label {
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--gold-400);
          font-weight: 700;
          margin-bottom: 0.2rem;
        }

        .impact-value {
          font-size: 1.05rem;
          font-weight: 600;
          color: #f8fafc;
          line-height: 1.4;
        }

        .modal-sections-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.85rem;
        }

        .modal-section-card {
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1.35rem 1.5rem;
        }

        .modal-section-card.full-width {
          grid-column: span 1;
        }

        .section-card-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.75rem;
        }

        .section-card-title h3 {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .modal-section-card p {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .modal-tools-section {
          padding: 1.25rem 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
        }

        .tools-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.85rem;
        }

        .tools-header h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .modal-tools-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .modal-footer {
          padding: 0.9rem 1.25rem;
          border-top: 1px solid var(--border-subtle);
          background: rgba(10, 12, 17, 0.95);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          flex-shrink: 0;
        }

        .modal-footer-meta {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        @media (min-width: 640px) {
          .project-modal-backdrop {
            align-items: center;
            padding: 1.5rem;
          }
          .project-modal-dialog {
            border-radius: 20px;
            max-height: 90vh;
          }
          .modal-banner {
            padding: 2.25rem 2rem 1.75rem 2rem;
          }
          .modal-body {
            padding: 1.75rem 2rem;
            gap: 1.5rem;
          }
          .modal-sections-grid {
            grid-template-columns: 1fr 1fr;
          }
          .modal-section-card.full-width {
            grid-column: span 2;
          }
          .modal-footer {
            padding: 1.1rem 2rem;
          }
        }
      `}</style>
    </div>
  );
}
