import React, { useEffect } from 'react';
import { 
  X, ExternalLink, Sparkles, CheckCircle2, AlertCircle, 
  Compass, Zap, Target, Wrench, Layers, ArrowUpRight 
} from 'lucide-react';

/**
 * Helper to intelligently format text that contains multiple paragraphs,
 * newline breaks, or emoji-separated feature lists.
 */
function renderFormattedContent(text) {
  if (!text || typeof text !== 'string') return null;
  const trimmed = text.trim();
  if (!trimmed) return null;

  // Split on double newlines for discrete paragraphs
  const paragraphs = trimmed.split(/\n\s*\n/).filter(Boolean);
  if (paragraphs.length > 1) {
    return (
      <div className="ed-modal-text-stack">
        {paragraphs.map((p, idx) => (
          <p key={idx} className="ed-modal-p">{p.trim()}</p>
        ))}
      </div>
    );
  }

  // Split on single newlines
  const lines = trimmed.split(/\n+/).filter(Boolean);
  if (lines.length > 1) {
    return (
      <div className="ed-modal-text-stack">
        {lines.map((line, idx) => (
          <p key={idx} className="ed-modal-p">{line.trim()}</p>
        ))}
      </div>
    );
  }

  // Single paragraph
  return <p className="ed-modal-p">{trimmed}</p>;
}

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // Handle Escape key to close modal
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

  const hasOverview = Boolean(project.overview && project.overview.trim());
  const hasProblem = Boolean(project.problem && project.problem.trim());
  const hasApproach = Boolean(project.approach && project.approach.trim());
  const hasResult = Boolean(project.result && project.result.trim());
  const hasImpact = Boolean(project.impact && project.impact.trim());
  const hasTools = Array.isArray(project.tools) && project.tools.length > 0;

  return (
    <div className="ed-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="ed-modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Subtle Luxury Top Accent Bar */}
        <div className="ed-modal-accent-bar" />

        {/* Modal Top Header Banner */}
        <header className="ed-modal-header">
          <div className="ed-modal-header-top">
            <div className="ed-modal-category-pill">
              <Sparkles size={12} className="ed-modal-sparkle-icon" />
              <span>{project.categoryLabel || 'Case Study'}</span>
            </div>

            <button 
              type="button"
              className="ed-modal-close-btn" 
              onClick={onClose}
              aria-label="Close Case Study"
              title="Close modal (Esc)"
            >
              <X size={18} />
            </button>
          </div>

          <h2 className="ed-modal-title">{project.title}</h2>

          <div className="ed-modal-meta-row">
            {project.role && (
              <span className="ed-modal-role-pill">
                <strong>Role:</strong> {project.role}
              </span>
            )}

            {project.projectUrl && (
              <a 
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ed-modal-live-btn"
                title="Open live project in new tab"
              >
                <span>Visit Live Project</span>
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </header>

        {/* Modal Scrollable Body */}
        <div className="ed-modal-body">
          {/* Primary Outcome & Key Impact Callout */}
          {project.outcome && (
            <div className="ed-modal-impact-callout">
              <div className="ed-modal-impact-icon-wrap">
                <Zap size={20} className="ed-modal-zap-icon" />
              </div>
              <div className="ed-modal-impact-content">
                <span className="ed-modal-impact-eyebrow">Primary Outcome &amp; Value Delivered</span>
                <p className="ed-modal-impact-value">{project.outcome}</p>
              </div>
            </div>
          )}

          {/* Structured Case Study Sections Grid */}
          <div className="ed-modal-grid">
            {/* Project Overview */}
            {hasOverview && (
              <div className={`ed-modal-card ${!hasProblem ? 'full-width' : ''}`}>
                <div className="ed-modal-card-header">
                  <Compass size={17} className="ed-card-icon" />
                  <h3 className="ed-card-heading">Project Overview</h3>
                </div>
                {renderFormattedContent(project.overview)}
              </div>
            )}

            {/* The Challenge & Problem Statement */}
            {hasProblem && (
              <div className={`ed-modal-card ${!hasOverview ? 'full-width' : ''}`}>
                <div className="ed-modal-card-header">
                  <AlertCircle size={17} className="ed-card-icon" />
                  <h3 className="ed-card-heading">The Challenge &amp; Problem</h3>
                </div>
                {renderFormattedContent(project.problem)}
              </div>
            )}

            {/* Strategic Approach & Implementation */}
            {hasApproach && (
              <div className="ed-modal-card full-width">
                <div className="ed-modal-card-header">
                  <Target size={17} className="ed-card-icon" />
                  <h3 className="ed-card-heading">Strategic Approach &amp; Implementation</h3>
                </div>
                {renderFormattedContent(project.approach)}
              </div>
            )}

            {/* Tangible Results */}
            {hasResult && (
              <div className={`ed-modal-card ${!hasImpact ? 'full-width' : ''}`}>
                <div className="ed-modal-card-header">
                  <CheckCircle2 size={17} className="ed-card-icon" />
                  <h3 className="ed-card-heading">Tangible Results</h3>
                </div>
                {renderFormattedContent(project.result)}
              </div>
            )}

            {/* Long-Term Organizational Impact */}
            {hasImpact && (
              <div className={`ed-modal-card ${!hasResult ? 'full-width' : ''}`}>
                <div className="ed-modal-card-header">
                  <Sparkles size={17} className="ed-card-icon" />
                  <h3 className="ed-card-heading">Why It Mattered (Impact)</h3>
                </div>
                {renderFormattedContent(project.impact)}
              </div>
            )}
          </div>

          {/* Technologies & Tools Utilized */}
          {hasTools && (
            <div className="ed-modal-tools-card">
              <div className="ed-modal-card-header">
                <Wrench size={16} className="ed-card-icon" />
                <h4 className="ed-card-heading">Technologies &amp; Tools Utilized</h4>
              </div>
              <div className="ed-modal-tools-pills">
                {project.tools.map((tool) => (
                  <span key={tool} className="ed-modal-tool-pill">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <footer className="ed-modal-footer">
          <div className="ed-modal-footer-meta">
            <span>Case Study • <strong>{project.title}</strong></span>
          </div>

          <div className="ed-modal-footer-actions">
            {project.projectUrl && (
              <a 
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ed-modal-footer-live-btn"
              >
                <span>Visit Live Project</span>
                <ArrowUpRight size={15} />
              </a>
            )}
            <button 
              type="button"
              className="ed-modal-footer-close-btn" 
              onClick={onClose}
            >
              Close Case Study
            </button>
          </div>
        </footer>
      </div>

      <style>{`
        /* ─── Backdrop & Window Frame ─── */
        .ed-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(18, 18, 18, 0.65);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          z-index: 2500;
          display: flex;
          align-items: flex-end; /* bottom-sheet on mobile */
          justify-content: center;
          padding: 0;
          animation: edFadeIn 0.22s ease-out;
        }

        .ed-modal-dialog {
          width: 100%;
          max-width: 860px;
          max-height: 94vh;
          background: #ffffff;
          border: 1px solid #eae8e4;
          border-radius: 20px 20px 0 0;
          display: flex;
          flex-direction: column;
          box-shadow: 0 -8px 36px rgba(0, 0, 0, 0.12), 0 20px 60px rgba(0, 0, 0, 0.18);
          overflow: hidden;
          position: relative;
          animation: edSlideUp 0.26s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ed-modal-accent-bar {
          height: 3px;
          width: 100%;
          background: linear-gradient(90deg, #121212 0%, #737373 50%, #121212 100%);
          flex-shrink: 0;
        }

        /* ─── Top Header Banner ─── */
        .ed-modal-header {
          position: relative;
          padding: 1.5rem 1.5rem 1.25rem 1.5rem;
          background: #fcfbfa;
          border-bottom: 1px solid #eae8e4;
          flex-shrink: 0;
        }

        .ed-modal-header-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.6rem;
        }

        .ed-modal-category-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.3rem 0.8rem;
          border-radius: 9999px;
          background: #ffffff;
          border: 1px solid #eae8e4;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #121212;
        }

        .ed-modal-sparkle-icon {
          color: #737373;
        }

        .ed-modal-close-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #eae8e4;
          color: #121212;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .ed-modal-close-btn:hover {
          background: #121212;
          border-color: #121212;
          color: #ffffff;
          transform: rotate(90deg);
        }

        .ed-modal-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(1.4rem, 2.8vw, 1.95rem);
          font-weight: 700;
          color: #121212;
          line-height: 1.25;
          letter-spacing: -0.01em;
          margin: 0.25rem 0 0.85rem 0;
        }

        .ed-modal-meta-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .ed-modal-role-pill {
          display: inline-block;
          font-size: 0.82rem;
          color: #4a4a4a;
          background: #ffffff;
          border: 1px solid #eae8e4;
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          font-weight: 500;
        }

        .ed-modal-role-pill strong {
          color: #121212;
          font-weight: 700;
        }

        .ed-modal-live-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #ffffff;
          background: #121212;
          padding: 0.35rem 0.95rem;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        .ed-modal-live-btn:hover {
          background: #2c2b29;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
        }

        /* ─── Scrollable Modal Body ─── */
        .ed-modal-body {
          padding: 1.25rem;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
          flex: 1;
          background: #faf9f6;
        }

        /* ─── Primary Outcome Callout ─── */
        .ed-modal-impact-callout {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.15rem 1.35rem;
          border-radius: 14px;
          background: #ffffff;
          border: 1px solid #eae8e4;
          border-left: 4px solid #121212;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
        }

        .ed-modal-impact-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #f7f6f3;
          border: 1px solid #eae8e4;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ed-modal-zap-icon {
          color: #121212;
        }

        .ed-modal-impact-content {
          flex: 1;
        }

        .ed-modal-impact-eyebrow {
          display: block;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #737373;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .ed-modal-impact-value {
          font-family: 'Cinzel', serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: #121212;
          line-height: 1.45;
          margin: 0;
        }

        /* ─── Sections Grid ─── */
        .ed-modal-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .ed-modal-card {
          background: #ffffff;
          border: 1px solid #eae8e4;
          border-radius: 14px;
          padding: 1.25rem 1.35rem;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
          transition: border-color 0.2s ease;
        }

        .ed-modal-card:hover {
          border-color: #d1cfc7;
        }

        .ed-modal-card.full-width {
          grid-column: span 1;
        }

        .ed-modal-card-header {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          margin-bottom: 0.75rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px dashed #eae8e4;
        }

        .ed-card-icon {
          color: #121212;
          flex-shrink: 0;
        }

        .ed-card-heading {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #121212;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .ed-modal-text-stack {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .ed-modal-p {
          font-size: 0.92rem;
          color: #4a4a4a;
          line-height: 1.7;
          margin: 0;
          white-space: pre-line;
        }

        /* ─── Tools & Technologies Card ─── */
        .ed-modal-tools-card {
          padding: 1.15rem 1.35rem;
          background: #ffffff;
          border: 1px solid #eae8e4;
          border-radius: 14px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
        }

        .ed-modal-tools-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .ed-modal-tool-pill {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 600;
          color: #121212;
          background: #f7f6f3;
          border: 1px solid #eae8e4;
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          transition: all 0.15s ease;
        }

        .ed-modal-tool-pill:hover {
          background: #121212;
          border-color: #121212;
          color: #ffffff;
        }

        /* ─── Modal Footer ─── */
        .ed-modal-footer {
          padding: 0.95rem 1.5rem;
          border-top: 1px solid #eae8e4;
          background: #fcfbfa;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.85rem;
          flex-shrink: 0;
        }

        .ed-modal-footer-meta {
          font-size: 0.82rem;
          color: #737373;
        }

        .ed-modal-footer-meta strong {
          color: #121212;
          font-weight: 600;
        }

        .ed-modal-footer-actions {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .ed-modal-footer-live-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #ffffff;
          background: #121212;
          padding: 0.5rem 1.15rem;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        .ed-modal-footer-live-btn:hover {
          background: #2c2b29;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
        }

        .ed-modal-footer-close-btn {
          display: inline-flex;
          align-items: center;
          font-size: 0.82rem;
          font-weight: 600;
          color: #121212;
          background: #ffffff;
          border: 1px solid #eae8e4;
          padding: 0.5rem 1.15rem;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .ed-modal-footer-close-btn:hover {
          background: #f7f6f3;
          border-color: #d1cfc7;
        }

        /* ─── Animations ─── */
        @keyframes edFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes edSlideUp {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* ─── Desktop Media Queries ─── */
        @media (min-width: 640px) {
          .ed-modal-backdrop {
            align-items: center;
            padding: 1.5rem;
          }

          .ed-modal-dialog {
            border-radius: 20px;
            max-height: 88vh;
          }

          .ed-modal-header {
            padding: 2rem 2.25rem 1.5rem 2.25rem;
          }

          .ed-modal-body {
            padding: 1.75rem 2.25rem;
            gap: 1.35rem;
          }

          .ed-modal-grid {
            grid-template-columns: 1fr 1fr;
          }

          .ed-modal-card.full-width {
            grid-column: span 2;
          }

          .ed-modal-footer {
            padding: 1.1rem 2.25rem;
          }
        }
      `}</style>
    </div>
  );
}
