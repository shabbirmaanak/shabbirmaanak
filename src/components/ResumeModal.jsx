import React, { useEffect } from 'react';
import { X, Download, Printer, FileText, Mail, Phone, MapPin } from 'lucide-react';

export default function ResumeModal({ data, isOpen, onClose }) {
  if (!isOpen) return null;

  const personalInfo = data?.personalInfo || {};
  const experience = data?.experience || {};
  const education = data?.education || [];
  const skills = data?.skills || [];

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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="resume-modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Modal Action Bar */}
        <div className="resume-bar-header">
          <div className="resume-bar-title">
            <FileText size={18} style={{ color: 'hsl(43, 96%, 64%)' }} />
            <span>Curriculum Vitae — {personalInfo.name}</span>
          </div>

          <div className="resume-bar-actions">
            <button 
              type="button" 
              onClick={handlePrint} 
              className="vcard-btn-outline"
            >
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>

            <button 
              type="button" 
              onClick={handlePrint} 
              className="vcard-btn-primary"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </button>

            <button 
              type="button" 
              className="resume-close-btn" 
              onClick={onClose}
              aria-label="Close Resume"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="resume-paper printable-area">
          {/* Header */}
          <header className="resume-header">
            <div className="resume-header-top">
              <h1 className="resume-person-name">{personalInfo.name}</h1>
              <span className="resume-person-title">{personalInfo.role}</span>
            </div>
            <p className="resume-positioning-line">
              {personalInfo.positioning}
            </p>
            <div className="resume-contacts-row">
              <span><Mail size={13} /> {personalInfo.email}</span>
              <span><Phone size={13} /> {personalInfo.phone}</span>
              <span><MapPin size={13} /> {personalInfo.location}</span>
            </div>
          </header>

          {/* Executive Summary */}
          <section className="resume-section">
            <h2 className="resume-section-heading">Executive Summary</h2>
            <p className="resume-summary-text">
              {personalInfo.bio}
            </p>
          </section>

          {/* Professional Experience */}
          <section className="resume-section">
            <h2 className="resume-section-heading">Professional Experience</h2>
            <div className="resume-exp-item">
              <div className="exp-line-header">
                <div>
                  <h3 className="exp-job-title">{experience.role}</h3>
                  <div className="exp-company-sub">{experience.organization} — {experience.department}</div>
                </div>
                <span className="exp-date-range">{experience.period}</span>
              </div>

              <div className="resume-exp-pillars">
                {(experience.pillars || []).map((pillar) => (
                  <div key={pillar.title} className="resume-pillar-group">
                    <h4 className="pillar-heading">{pillar.title}</h4>
                    <ul className="pillar-bullets">
                      {(pillar.responsibilities || []).map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Core Competencies */}
          <section className="resume-section">
            <h2 className="resume-section-heading">Core Competencies & Toolset</h2>
            <div className="resume-skills-matrix">
              {skills.slice(0, 8).map((s) => (
                <div key={s.name} className="matrix-col">
                  <strong>{s.name} ({s.level}%):</strong>
                  <span>{(s.tags || []).join(', ')}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="resume-section">
            <h2 className="resume-section-heading">Education</h2>
            {education.map((edu, idx) => (
              <div key={idx} className="resume-edu-item">
                <div className="exp-line-header">
                  <div>
                    <h3 className="exp-job-title">{edu.degree}</h3>
                    <div className="exp-company-sub">{edu.institution} — {edu.location}</div>
                  </div>
                  <span className="exp-date-range">{edu.period}</span>
                </div>
                <p className="edu-note">{edu.description}</p>
              </div>
            ))}
          </section>
        </div>
      </div>

      <style>{`
        .resume-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.88);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.2s ease;
        }

        .resume-modal-dialog {
          width: 100%;
          max-width: 900px;
          height: 92vh;
          background: #0f121a;
          border: 1px solid hsla(43, 96%, 64%, 0.3);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-5), 0 0 40px hsla(348, 83%, 52%, 0.15);
          overflow: hidden;
        }

        .resume-bar-header {
          padding: 1rem 1.75rem;
          background: #080a10;
          border-bottom: 1px solid var(--jet);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .resume-bar-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--white-2);
        }

        .resume-bar-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .vcard-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--jet);
          color: var(--light-gray);
          font-size: 13px;
          transition: all 0.2s ease;
        }

        .vcard-btn-outline:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--white-1);
        }

        .vcard-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 10px;
          background: linear-gradient(135deg, hsl(43, 96%, 64%) 0%, hsl(348, 83%, 52%) 100%);
          color: #0b0d14;
          font-size: 13px;
          font-weight: 700;
          transition: all 0.2s ease;
          box-shadow: 0 0 15px hsla(348, 83%, 52%, 0.35);
        }

        .vcard-btn-primary:hover {
          filter: brightness(1.1);
          transform: translateY(-1px);
        }

        .resume-close-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--jet);
          color: var(--white-2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .resume-close-btn:hover {
          background: hsla(348, 83%, 52%, 0.2);
          color: var(--ruby-glow);
        }

        .resume-paper {
          padding: 3rem 3.5rem;
          background: #ffffff;
          color: #1e293b;
          overflow-y: auto;
          flex: 1;
          font-family: 'Plus Jakarta Sans', sans-serif;
          line-height: 1.55;
        }

        .resume-header {
          border-bottom: 2px solid hsl(43, 96%, 64%);
          padding-bottom: 1.5rem;
          margin-bottom: 1.75rem;
        }

        .resume-header-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 0.35rem;
        }

        .resume-person-name {
          font-size: 2.2rem;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.02em;
        }

        .resume-person-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #b89124;
        }

        .resume-positioning-line {
          font-size: 0.95rem;
          font-weight: 600;
          color: #475569;
          margin-bottom: 0.75rem;
        }

        .resume-contacts-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
          font-size: 0.85rem;
          color: #64748b;
        }

        .resume-contacts-row span {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        .resume-section {
          margin-bottom: 1.75rem;
        }

        .resume-section-heading {
          font-size: 1.05rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #0f172a;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 0.4rem;
          margin-bottom: 0.9rem;
        }

        .resume-summary-text {
          font-size: 0.9rem;
          color: #334155;
          line-height: 1.6;
        }

        .exp-line-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.6rem;
        }

        .exp-job-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0f172a;
        }

        .exp-company-sub {
          font-size: 0.88rem;
          font-weight: 600;
          color: #64748b;
        }

        .exp-date-range {
          font-size: 0.82rem;
          font-weight: 700;
          color: #9f1239;
          background: #ffe4e6;
          padding: 0.15rem 0.6rem;
          border-radius: 4px;
        }

        .resume-exp-pillars {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-top: 0.75rem;
        }

        .pillar-heading {
          font-size: 0.9rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.25rem;
        }

        .pillar-bullets {
          padding-left: 1.25rem;
          font-size: 0.85rem;
          color: #334155;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .resume-skills-matrix {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
        }

        .matrix-col {
          font-size: 0.85rem;
          color: #334155;
        }

        .matrix-col strong {
          display: block;
          color: #0f172a;
          margin-bottom: 0.15rem;
        }

        .resume-edu-item {
          margin-bottom: 1rem;
        }

        .edu-note {
          font-size: 0.85rem;
          color: #475569;
          margin-top: 0.25rem;
        }

        @media print {
          body * {
            visibility: hidden;
          }
          .printable-area, .printable-area * {
            visibility: visible;
          }
          .printable-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 0;
            background: #ffffff !important;
            color: #000000 !important;
          }
          .resume-bar-header {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .resume-paper {
            padding: 1.75rem 1.5rem;
          }
          .resume-header-top {
            flex-direction: column;
            align-items: flex-start;
          }
          .resume-skills-matrix {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
