import React from 'react';
import { Briefcase, GraduationCap, CheckCircle2, Download } from 'lucide-react';

export default function TabResume({ data, onOpenResume }) {
  const experience = data?.experience || {};
  const education = data?.education || [];
  const skills = data?.skills || [];
  const topSkills = skills.slice(0, 6);

  return (
    <article className="resume-tab tab-content-active">
      <header className="resume-tab-header">
        <h2 className="h2 article-title">Resume</h2>
        <button type="button" onClick={onOpenResume} className="btn-download-cv">
          <Download size={14} />
          <span>Download CV</span>
        </button>
      </header>

      {/* Experience */}
      <section className="tl-section">
        <div className="tl-section-head">
          <div className="tl-head-icon"><Briefcase size={16} /></div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="tl-list">
          <li className="tl-item">
            <div className="tl-dot" />
            <h4 className="tl-title">
              {experience.role}
              <span className="tl-org"> — {experience.organization}</span>
            </h4>
            <div className="tl-dept">{experience.department}</div>
            <span className="tl-period">{experience.period}</span>
            <p className="tl-desc">{experience.description}</p>

            <div className="pillars-grid">
              {(experience.pillars || []).map((pillar) => (
                <div key={pillar.title} className="pillar-card">
                  <h5 className="pillar-title">{pillar.title}</h5>
                  <ul className="pillar-bullets">
                    {(pillar.responsibilities || []).map((resp, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={12} className="bullet-icon" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </li>
        </ol>
      </section>

      {/* Education */}
      <section className="tl-section">
        <div className="tl-section-head">
          <div className="tl-head-icon"><GraduationCap size={16} /></div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="tl-list">
          {education.map((edu, idx) => (
            <li key={idx} className="tl-item">
              <div className="tl-dot" />
              <h4 className="tl-title">{edu.degree}</h4>
              <div className="tl-dept">{edu.institution} • {edu.location}</div>
              <span className="tl-period">{edu.period}</span>
              <p className="tl-desc">{edu.description}</p>
              <div className="edu-bullets">
                {(edu.highlights || []).map((h, hIdx) => (
                  <div key={hIdx} className="edu-bullet-item">
                    <span className="edu-dot-sm" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills Progress */}
      <section className="skill-section">
        <h3 className="h3 skills-heading">Key Proficiencies</h3>
        <div className="skills-card">
          {topSkills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-meta">
                <h5 className="skill-name">{skill.name}</h5>
                <span className="skill-pct">{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .resume-tab { display: block; }

        .resume-tab-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 8px;
        }

        .btn-download-cv {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 10px;
          background: linear-gradient(135deg, hsla(348, 70%, 38%, 0.25) 0%, hsla(330, 50%, 20%, 0.2) 100%);
          border: 1px solid hsla(348, 70%, 45%, 0.5);
          color: hsl(348, 90%, 72%);
          font-size: 12.5px;
          font-weight: 600;
          transition: var(--ease-1);
          min-height: 36px;
          margin-top: 6px;
        }

        .btn-download-cv:hover {
          background: linear-gradient(135deg, hsla(348, 70%, 45%, 0.35) 0%, hsla(43, 80%, 40%, 0.2) 100%);
          box-shadow: var(--shadow-ruby);
          transform: translateY(-1px);
        }

        /* ── Timeline ── */
        .tl-section { margin-bottom: 28px; }

        .tl-section-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .tl-head-icon {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          background: linear-gradient(135deg, hsla(348, 70%, 30%, 0.35) 0%, hsla(344, 50%, 18%, 0.7) 100%);
          border: 1px solid hsla(348, 60%, 40%, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: hsl(43, 96%, 65%);
          flex-shrink: 0;
        }

        .tl-list {
          padding-left: 32px;
          border-left: 2px solid hsla(348, 50%, 35%, 0.35);
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .tl-item {
          position: relative;
        }

        .tl-dot {
          position: absolute;
          left: -40px;
          top: 4px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, hsl(43, 96%, 64%), hsl(348, 83%, 52%));
          box-shadow: 0 0 12px hsla(348, 83%, 52%, 0.6), 0 0 0 3px hsla(348, 60%, 30%, 0.3);
        }

        .tl-title {
          font-size: clamp(13px, 2.6vw, 15px);
          font-weight: 600;
          color: hsl(330, 30%, 94%);
          line-height: 1.35;
          margin-bottom: 4px;
        }

        .tl-org {
          color: hsl(43, 90%, 64%);
          font-weight: 500;
          font-size: 0.9em;
        }

        .tl-dept {
          font-size: 12px;
          color: hsla(330, 15%, 72%, 0.8);
          margin-bottom: 6px;
        }

        .tl-period {
          display: inline-block;
          font-size: 11.5px;
          font-weight: 600;
          color: hsl(348, 85%, 68%);
          background: linear-gradient(135deg, hsla(348, 70%, 30%, 0.25) 0%, hsla(344, 50%, 18%, 0.3) 100%);
          padding: 2px 10px;
          border-radius: 20px;
          border: 1px solid hsla(348, 60%, 40%, 0.35);
          margin-bottom: 10px;
        }

        .tl-desc {
          font-size: 13px;
          color: hsla(330, 15%, 78%, 0.75);
          line-height: 1.65;
          margin-bottom: 14px;
          font-weight: 300;
        }

        /* ── Pillars ── */
        .pillars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }

        .pillar-card {
          background: linear-gradient(145deg, hsl(344, 32%, 14%) 0%, hsl(330, 20%, 11%) 100%);
          border: 1px solid hsla(348, 50%, 35%, 0.35);
          border-radius: 12px;
          padding: 12px 14px;
          transition: border-color var(--ease-1);
        }

        .pillar-card:hover { border-color: hsla(43, 80%, 50%, 0.4); }

        .pillar-title {
          font-size: 12.5px;
          color: hsl(43, 90%, 65%);
          font-weight: 600;
          margin-bottom: 8px;
          padding-bottom: 6px;
          border-bottom: 1px solid hsla(348, 40%, 30%, 0.3);
        }

        .pillar-bullets {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .pillar-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          font-size: 12px;
          color: hsla(330, 15%, 75%, 0.75);
          line-height: 1.5;
        }

        .bullet-icon {
          color: hsl(348, 80%, 65%);
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* ── Education ── */
        .edu-bullets {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-top: 8px;
        }

        .edu-bullet-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          color: hsla(330, 15%, 75%, 0.8);
        }

        .edu-dot-sm {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: hsl(43, 96%, 64%);
          flex-shrink: 0;
          box-shadow: 0 0 6px hsl(43, 96%, 64%);
        }

        /* ── Skills ── */
        .skill-section { margin-bottom: 10px; }
        .skills-heading { margin-bottom: 16px; }

        .skills-card {
          background: linear-gradient(145deg, hsl(344, 32%, 13%) 0%, hsl(330, 20%, 10%) 100%);
          border: 1px solid hsla(348, 50%, 35%, 0.4);
          border-radius: 16px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .skill-item { }

        .skill-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 7px;
        }

        .skill-name {
          font-size: 13px;
          color: hsl(330, 25%, 92%);
          font-weight: 500;
        }

        .skill-pct {
          font-size: 12px;
          font-weight: 700;
          color: hsl(43, 90%, 65%);
        }

        .skill-bar-bg {
          background: hsla(344, 30%, 20%, 0.6);
          width: 100%;
          height: 7px;
          border-radius: 10px;
          overflow: hidden;
        }

        .skill-bar-fill {
          background: linear-gradient(90deg, hsl(43, 96%, 64%) 0%, hsl(348, 83%, 52%) 100%);
          height: 100%;
          border-radius: inherit;
          transition: width 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 0 10px hsla(348, 83%, 52%, 0.4);
        }

        @media (min-width: 640px) {
          .pillars-grid { grid-template-columns: 1fr 1fr; }
          .tl-list { padding-left: 40px; }
        }

        @media (min-width: 1024px) {
          .pillars-grid { grid-template-columns: repeat(3, 1fr); }
          .skills-card { padding: 22px; gap: 18px; }
        }
      `}</style>
    </article>
  );
}
