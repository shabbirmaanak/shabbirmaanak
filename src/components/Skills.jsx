import React, { useState } from 'react';
import { Wrench, Sparkles, Filter, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills, skillCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Wrench size={13} />
            <span>Capabilities & Tools</span>
          </div>
          <h2 className="section-title">
            Technical & Creative <span className="text-gold-gradient">Skill System</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive matrix of design tools, production suites, technological platforms, and communication proficiencies built through years of hands-on execution.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="skills-filter-container">
          <div className="skills-filter-pills" role="tablist">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`skill-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="cat-count">
                  {cat.id === 'all' ? skills.length : skills.filter(s => s.category === cat.id).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, idx) => (
            <div key={skill.name} className="glass-card skill-card">
              <div className="skill-card-header">
                <div className="skill-title-block">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-exp-tag">{skill.experience}</span>
                </div>
                <div className="skill-percentage-badge">
                  <span>{skill.level}%</span>
                </div>
              </div>

              {/* Visual Indicator Progress Bar */}
              <div className="skill-bar-track" title={`${skill.name}: ${skill.level}% proficiency indicator`}>
                <div 
                  className="skill-bar-fill" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <p className="skill-highlight-text">
                {skill.highlight}
              </p>

              {/* Skill Tags */}
              <div className="skill-tags-group">
                {skill.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Note */}
        <div className="skills-footnote">
          <Sparkles size={16} className="text-gold" />
          <span>Visual indicators represent relative proficiency and continuous practical application across institutional projects.</span>
        </div>
      </div>

      <style>{`
        .skills-section {
          position: relative;
        }

        .skills-filter-container {
          display: flex;
          justify-content: center;
          margin-bottom: 2.75rem;
        }

        .skills-filter-pills {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.4rem;
          background: rgba(18, 22, 32, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          backdrop-filter: blur(12px);
        }

        .skill-cat-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1.15rem;
          border-radius: var(--radius-full);
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: transparent;
          transition: all var(--transition-fast);
        }

        .skill-cat-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .skill-cat-btn.active {
          background: var(--gold-gradient);
          color: #0b0c10;
          box-shadow: 0 4px 16px rgba(212, 175, 55, 0.3);
        }

        .cat-count {
          font-size: 0.75rem;
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-full);
          background: rgba(0, 0, 0, 0.2);
          opacity: 0.85;
        }

        .skill-cat-btn.active .cat-count {
          background: rgba(0, 0, 0, 0.25);
          color: #0b0c10;
          font-weight: 700;
        }

        /* Skills Grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .skill-card {
          padding: 1.65rem 1.75rem;
          display: flex;
          flex-direction: column;
          background: rgba(14, 18, 26, 0.7);
        }

        .skill-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.9rem;
        }

        .skill-title-block {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .skill-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .skill-exp-tag {
          font-size: 0.72rem;
          padding: 0.15rem 0.5rem;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
        }

        .skill-percentage-badge {
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--gold-400);
        }

        /* Progress Bar */
        .skill-bar-track {
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.06);
          overflow: hidden;
          margin-bottom: 1rem;
          position: relative;
        }

        .skill-bar-fill {
          height: 100%;
          border-radius: 3px;
          background: var(--gold-gradient);
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
          transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .skill-highlight-text {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.25rem;
        }

        .skill-tags-group {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: auto;
        }

        .skills-footnote {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          font-size: 0.82rem;
          color: var(--text-muted);
          text-align: center;
          max-width: 680px;
          margin: 0 auto;
        }

        @media (max-width: 840px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
