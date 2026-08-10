import React, { useState } from 'react';
import { Wrench } from 'lucide-react';

export default function TabSkills({ data }) {
  const skills = data?.skills || [];
  const skillCategories = data?.skillCategories || [];
  const [selectedCat, setSelectedCat] = useState('all');

  const filteredSkills = selectedCat === 'all'
    ? skills
    : skills.filter(s => s.category === selectedCat);

  return (
    <article className="skills-tab tab-content-active">
      <header>
        <h2 className="h2 article-title">Skills & Capabilities</h2>
      </header>

      <section className="skills-content-section">
        {/* Category Pills */}
        <ul className="skills-cat-pills">
          {skillCategories.map((cat) => (
            <li key={cat.id}>
              <button
                type="button"
                className={`cat-pill-btn ${selectedCat === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCat(cat.id)}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Skills Cards Grid */}
        <div className="skills-vcard-grid">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="content-card skill-vcard-card">
              <div className="skill-card-head">
                <div>
                  <h4 className="h4 skill-card-title">{skill.name}</h4>
                  <span className="skill-exp-text">{skill.experience} Experience</span>
                </div>
                <div className="skill-pct-badge">
                  <span>{skill.level}%</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="skill-progress-bar-wrap">
                <div 
                  className="skill-progress-bar-fill" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <p className="skill-highlight-desc">{skill.highlight}</p>

              <div className="skill-tools-list">
                {(skill.tags || []).map((t) => (
                  <span key={t} className="vcard-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .skills-tab {
          display: block;
        }

        .skills-cat-pills {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 25px;
          flex-wrap: wrap;
        }

        .cat-pill-btn {
          color: var(--light-gray);
          font-size: var(--fs-6);
          padding: 6px 14px;
          border-radius: 8px;
          background: var(--onyx);
          border: 1px solid var(--jet);
          transition: var(--transition-1);
        }

        .cat-pill-btn:hover {
          color: var(--white-1);
          border-color: hsla(43, 96%, 64%, 0.3);
        }

        .cat-pill-btn.active {
          background: linear-gradient(135deg, hsla(43, 96%, 64%, 0.15) 0%, hsla(348, 83%, 52%, 0.15) 100%);
          border-color: var(--gold-primary);
          color: var(--gold-primary);
          font-weight: var(--fw-600);
          box-shadow: 0 0 10px hsla(43, 96%, 64%, 0.15);
        }

        .skills-vcard-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }

        .skill-vcard-card {
          padding: 20px;
        }

        .skill-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .skill-card-title {
          font-size: var(--fs-4);
          color: var(--white-2);
          margin-bottom: 2px;
        }

        .skill-exp-text {
          font-size: var(--fs-8);
          color: var(--ruby-glow);
          font-weight: 500;
        }

        .skill-pct-badge {
          font-size: var(--fs-6);
          font-weight: var(--fw-700);
          color: var(--gold-primary);
        }

        .skill-progress-bar-wrap {
          background: var(--jet);
          width: 100%;
          height: 6px;
          border-radius: 6px;
          overflow: hidden;
          margin-bottom: 12px;
        }

        .skill-progress-bar-fill {
          background: linear-gradient(90deg, var(--gold-primary) 0%, var(--ruby-primary) 100%);
          height: 100%;
          border-radius: inherit;
          transition: width 0.6s ease;
          box-shadow: 0 0 8px hsla(348, 83%, 52%, 0.3);
        }

        .skill-highlight-desc {
          font-size: var(--fs-7);
          color: var(--light-gray-70);
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .skill-tools-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        @media (min-width: 768px) {
          .skills-vcard-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </article>
  );
}
