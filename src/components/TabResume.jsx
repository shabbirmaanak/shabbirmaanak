import React from 'react';
import { BookOpen, Briefcase, GraduationCap, FileText, CheckCircle2, Download } from 'lucide-react';

export default function TabResume({ data, onOpenResume }) {
  const experience = data?.experience || {};
  const education = data?.education || [];
  const skills = data?.skills || [];

  const topSkills = skills.slice(0, 6);

  return (
    <article className="resume-tab tab-content-active">
      <header className="resume-tab-header">
        <h2 className="h2 article-title">Resume</h2>

        <div className="resume-quick-actions">
          <button 
            type="button" 
            onClick={onOpenResume} 
            className="vcard-btn-primary"
          >
            <Download size={15} />
            <span>Download CV</span>
          </button>
        </div>
      </header>

      {/* Experience Timeline Section */}
      <section className="timeline-section">
        <div className="title-wrapper">
          <div className="icon-box">
            <Briefcase size={18} />
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              {experience.role} <span className="timeline-org">— {experience.organization}</span>
            </h4>
            <div className="timeline-dept">{experience.department}</div>
            <span className="timeline-period">{experience.period}</span>

            <p className="timeline-text">
              {experience.description}
            </p>

            {/* 3 Pillars Breakdown */}
            <div className="timeline-pillars-grid">
              {(experience.pillars || []).map((pillar) => (
                <div key={pillar.title} className="timeline-pillar-card">
                  <h5 className="pillar-title">{pillar.title}</h5>
                  <ul className="pillar-bullets">
                    {(pillar.responsibilities || []).map((resp, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={13} className="bullet-icon" />
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

      {/* Education Timeline Section */}
      <section className="timeline-section">
        <div className="title-wrapper">
          <div className="icon-box">
            <GraduationCap size={18} />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {education.map((edu, idx) => (
            <li key={idx} className="timeline-item">
              <h4 className="h4 timeline-item-title">{edu.degree}</h4>
              <div className="timeline-dept">{edu.institution} • {edu.location}</div>
              <span className="timeline-period">{edu.period}</span>
              <p className="timeline-text">{edu.description}</p>

              <div className="edu-bullets-list">
                {(edu.highlights || []).map((h, hIdx) => (
                  <div key={hIdx} className="edu-bullet-item">
                    <span className="edu-dot" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills Progress Section */}
      <section className="skill-section">
        <h3 className="h3 skills-title">Key Proficiencies</h3>

        <ul className="skills-list content-card">
          {topSkills.map((skill) => (
            <li key={skill.name} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.level} className="skill-num">{skill.level}%</data>
              </div>

              <div className="skill-progress-bg">
                <div 
                  className="skill-progress-fill" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <style>{`
        .resume-tab-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 25px;
        }

        .vcard-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 12px;
          background: linear-gradient(135deg, hsla(43, 96%, 64%, 0.15) 0%, hsla(348, 83%, 52%, 0.15) 100%);
          border: 1px solid hsla(43, 96%, 64%, 0.4);
          color: var(--gold-primary);
          font-size: var(--fs-7);
          font-weight: var(--fw-600);
          transition: var(--transition-1);
          box-shadow: var(--shadow-1);
        }

        .vcard-btn-primary:hover {
          background: linear-gradient(135deg, hsla(43, 96%, 64%, 0.25) 0%, hsla(348, 83%, 52%, 0.25) 100%);
          border-color: var(--gold-primary);
          box-shadow: var(--shadow-gold-glow);
          transform: translateY(-2px);
        }

        .timeline-section {
          margin-bottom: 35px;
        }

        .timeline-section .title-wrapper {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
        }

        .timeline-list {
          font-size: var(--fs-6);
          margin-left: 45px;
        }

        .timeline-item {
          position: relative;
        }

        .timeline-item:not(:last-child) {
          margin-bottom: 30px;
        }

        .timeline-item-title {
          font-size: var(--fs-4);
          line-height: 1.3;
          margin-bottom: 4px;
          color: var(--white-2);
        }

        .timeline-org {
          color: var(--gold-primary);
          font-weight: var(--fw-500);
        }

        .timeline-dept {
          font-size: var(--fs-7);
          color: var(--light-gray);
          margin-bottom: 6px;
        }

        .timeline-period {
          color: var(--ruby-glow);
          font-weight: var(--fw-500);
          font-size: var(--fs-7);
          display: inline-block;
          margin-bottom: 12px;
          background: var(--ruby-subtle);
          padding: 2px 8px;
          border-radius: 6px;
          border: 1px solid hsla(348, 83%, 52%, 0.2);
        }

        .timeline-text {
          color: var(--light-gray-70);
          font-weight: var(--fw-300);
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .timeline-item:not(:last-child)::before {
          content: "";
          position: absolute;
          top: -25px;
          left: -30px;
          width: 1px;
          height: calc(100% + 50px);
          background: var(--jet);
        }

        .timeline-item::after {
          content: "";
          position: absolute;
          top: 5px;
          left: -34px;
          height: 10px;
          width: 10px;
          background: linear-gradient(135deg, var(--gold-primary), var(--ruby-primary));
          border-radius: 50%;
          box-shadow: 0 0 0 4px var(--jet), 0 0 10px hsla(348, 83%, 52%, 0.5);
        }

        .timeline-pillars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-top: 15px;
        }

        .timeline-pillar-card {
          background: var(--onyx);
          border: 1px solid var(--jet);
          border-radius: 12px;
          padding: 14px 16px;
          transition: border-color 0.2s ease;
        }

        .timeline-pillar-card:hover {
          border-color: hsla(43, 96%, 64%, 0.3);
        }

        .pillar-title {
          font-size: var(--fs-6);
          color: var(--gold-primary);
          font-weight: var(--fw-600);
          margin-bottom: 8px;
        }

        .pillar-bullets {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .pillar-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: var(--fs-7);
          color: var(--light-gray-70);
          line-height: 1.5;
        }

        .bullet-icon {
          color: var(--ruby-glow);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .edu-bullets-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 10px;
        }

        .edu-bullet-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: var(--fs-7);
          color: var(--light-gray);
        }

        .edu-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--gold-primary);
          flex-shrink: 0;
          box-shadow: 0 0 6px var(--gold-primary);
        }

        .skill-section {
          margin-bottom: 20px;
        }

        .skills-title {
          margin-bottom: 20px;
        }

        .skills-list {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .skills-item .title-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .skills-item .skill-num {
          color: var(--gold-primary);
          font-size: var(--fs-7);
          font-weight: var(--fw-600);
        }

        .skill-progress-bg {
          background: var(--jet);
          width: 100%;
          height: 8px;
          border-radius: 10px;
          overflow: hidden;
        }

        .skill-progress-fill {
          background: linear-gradient(90deg, var(--gold-primary) 0%, var(--ruby-primary) 100%);
          height: 100%;
          border-radius: inherit;
          transition: width 0.6s ease;
          box-shadow: 0 0 10px hsla(348, 83%, 52%, 0.3);
        }

        @media (min-width: 768px) {
          .timeline-pillars-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </article>
  );
}
