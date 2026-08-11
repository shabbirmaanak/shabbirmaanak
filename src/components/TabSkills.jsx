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
        {/* Category pills */}
        <ul className="cat-pills">
          {skillCategories.map((cat) => (
            <li key={cat.id}>
              <button
                type="button"
                className={`cat-pill ${selectedCat === cat.id ? 'cat-pill-active' : ''}`}
                onClick={() => setSelectedCat(cat.id)}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Skills grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="skill-card">
              {/* Top accent line */}
              <div className="skill-card-accent" />

              <div className="skill-card-head">
                <div>
                  <h4 className="skill-card-name">{skill.name}</h4>
                  <span className="skill-exp-label">{skill.experience} Experience</span>
                </div>
                <div className="skill-pct-circle">
                  <span>{skill.level}%</span>
                </div>
              </div>

              <div className="skill-bar-track">
                <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
              </div>

              <p className="skill-desc">{skill.highlight}</p>

              <div className="skill-tags">
                {(skill.tags || []).map((t) => (
                  <span key={t} className="vcard-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .skills-tab { display: block; }

        /* Category pills */
        .cat-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .cat-pill {
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12.5px;
          font-weight: 500;
          background: linear-gradient(145deg, hsl(344, 32%, 13%) 0%, hsl(330, 20%, 10%) 100%);
          border: 1px solid hsla(348, 50%, 35%, 0.4);
          color: hsla(330, 15%, 70%, 0.8);
          transition: var(--ease-1);
          cursor: pointer;
          min-height: 34px;
        }

        .cat-pill:hover {
          border-color: hsla(348, 60%, 45%, 0.6);
          color: hsl(330, 25%, 88%);
        }

        .cat-pill-active {
          background: linear-gradient(135deg, hsla(348, 70%, 35%, 0.35) 0%, hsla(43, 80%, 35%, 0.2) 100%);
          border-color: hsl(43, 90%, 58%);
          color: hsl(43, 96%, 68%);
          font-weight: 600;
          box-shadow: 0 0 14px hsla(43, 96%, 64%, 0.2), inset 0 0 0 1px hsla(43, 80%, 60%, 0.1);
        }

        /* Skills grid */
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }

        .skill-card {
          position: relative;
          padding: 16px;
          border-radius: 14px;
          background: linear-gradient(145deg, hsl(344, 32%, 13%) 0%, hsl(330, 20%, 10%) 100%);
          border: 1px solid hsla(348, 50%, 35%, 0.4);
          overflow: hidden;
          transition: var(--ease-1);
        }

        .skill-card:hover {
          border-color: hsla(348, 65%, 45%, 0.6);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px hsla(348, 70%, 20%, 0.35);
        }

        .skill-card-accent {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, hsl(348, 83%, 52%) 0%, hsl(43, 96%, 64%) 50%, transparent 100%);
        }

        .skill-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .skill-card-name {
          font-size: 14px;
          color: hsl(330, 30%, 94%);
          font-weight: 600;
          margin-bottom: 2px;
        }

        .skill-exp-label {
          font-size: 11px;
          color: hsl(348, 75%, 65%);
          font-weight: 500;
        }

        .skill-pct-circle {
          font-size: 15px;
          font-weight: 800;
          color: hsl(43, 96%, 65%);
          line-height: 1;
        }

        .skill-bar-track {
          background: hsla(344, 30%, 20%, 0.6);
          width: 100%;
          height: 6px;
          border-radius: 6px;
          overflow: hidden;
          margin-bottom: 10px;
        }

        .skill-bar-fill {
          background: linear-gradient(90deg, hsl(43, 96%, 64%) 0%, hsl(348, 83%, 52%) 100%);
          height: 100%;
          border-radius: inherit;
          transition: width 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 0 8px hsla(348, 83%, 52%, 0.35);
        }

        .skill-desc {
          font-size: 12.5px;
          color: hsla(330, 15%, 72%, 0.75);
          line-height: 1.55;
          margin-bottom: 10px;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        @media (min-width: 640px) {
          .skills-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (min-width: 1024px) {
          .skill-card { padding: 18px; }
        }
      `}</style>
    </article>
  );
}
