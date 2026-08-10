import React, { useState } from 'react';
import { Eye, ChevronDown, Zap } from 'lucide-react';

export default function TabPortfolio({ data, onSelectProject }) {
  const projects = data?.projects || [];
  const projectCategories = data?.projectCategories || [];
  const [selectedCat, setSelectedCat] = useState('all');
  const [selectOpen, setSelectOpen] = useState(false);

  const filteredProjects = selectedCat === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCat);

  const activeCatLabel = projectCategories.find(c => c.id === selectedCat)?.label || 'All Projects';

  return (
    <article className="portfolio-tab tab-content-active">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects-section">
        {/* Desktop Filter Pills */}
        <ul className="filter-list">
          {projectCategories.map((cat) => (
            <li key={cat.id} className="filter-item">
              <button
                type="button"
                className={`filter-btn ${selectedCat === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCat(cat.id)}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Filter Select Dropdown */}
        <div className="filter-select-box">
          <button 
            type="button" 
            className={`filter-select ${selectOpen ? 'active' : ''}`}
            onClick={() => setSelectOpen(!selectOpen)}
          >
            <div className="select-value">{activeCatLabel}</div>
            <div className="select-icon">
              <ChevronDown size={16} />
            </div>
          </button>

          {selectOpen && (
            <ul className="select-list">
              {projectCategories.map((cat) => (
                <li key={cat.id} className="select-item">
                  <button
                    type="button"
                    className="select-btn"
                    onClick={() => {
                      setSelectedCat(cat.id);
                      setSelectOpen(false);
                    }}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Projects Grid */}
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li 
              key={project.id} 
              className="project-item"
              onClick={() => onSelectProject(project)}
            >
              <div className="project-card-box">
                <figure 
                  className="project-img" 
                  style={{ background: project.thumbnailGradient }}
                >
                  <div className="project-item-icon-box">
                    <Eye size={22} className="eye-icon" />
                  </div>
                  <div className="project-banner-symbol">
                    <Zap size={32} style={{ color: project.accentColor || '#f59e0b' }} />
                  </div>
                </figure>

                <div className="project-meta-box">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.categoryLabel}</p>
                  
                  <div className="project-preview-outcome">
                    <span>{project.outcome}</span>
                  </div>

                  <div className="project-tools-tags">
                    {(project.tools || []).slice(0, 3).map((t) => (
                      <span key={t} className="vcard-tag">{t}</span>
                    ))}
                    {(project.tools || []).length > 3 && (
                      <span className="vcard-tag vcard-tag-gold">+{project.tools.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <style>{`
        .portfolio-tab {
          display: block;
        }

        .filter-list {
          display: none;
          align-items: center;
          gap: 12px;
          padding-left: 5px;
          margin-bottom: 25px;
          flex-wrap: wrap;
        }

        .filter-item button {
          color: var(--light-gray);
          font-size: var(--fs-6);
          transition: var(--transition-1);
          padding: 6px 12px;
          border-radius: 8px;
          background: var(--onyx);
          border: 1px solid var(--jet);
        }

        .filter-item button:hover {
          color: var(--white-1);
          border-color: hsla(43, 96%, 64%, 0.3);
        }

        .filter-item button.active {
          background: linear-gradient(135deg, hsla(43, 96%, 64%, 0.15) 0%, hsla(348, 83%, 52%, 0.15) 100%);
          border-color: var(--gold-primary);
          color: var(--gold-primary);
          font-weight: var(--fw-600);
          box-shadow: 0 0 10px hsla(43, 96%, 64%, 0.15);
        }

        /* Filter Select Box (Mobile) */
        .filter-select-box {
          position: relative;
          margin-bottom: 25px;
        }

        .filter-select {
          background: var(--eerie-black-2);
          color: var(--light-gray);
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 12px 16px;
          border: 1px solid var(--jet);
          border-radius: 14px;
          font-size: var(--fs-6);
          font-weight: var(--fw-300);
        }

        .select-list {
          background: var(--eerie-black-2);
          position: absolute;
          top: calc(100% + 6px);
          width: 100%;
          padding: 6px;
          border: 1px solid var(--jet);
          border-radius: 14px;
          z-index: 20;
          box-shadow: var(--shadow-3);
        }

        .select-item button {
          background: var(--eerie-black-2);
          color: var(--light-gray);
          font-size: var(--fs-6);
          font-weight: var(--fw-300);
          text-transform: capitalize;
          width: 100%;
          padding: 8px 10px;
          border-radius: 8px;
          transition: var(--transition-1);
        }

        .select-item button:hover {
          background: var(--onyx);
          color: var(--gold-primary);
        }

        /* Project Grid */
        .project-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }

        .project-item {
          cursor: pointer;
        }

        .project-card-box {
          display: flex;
          flex-direction: column;
          height: 100%;
          border-radius: 16px;
          transition: transform 0.25s ease;
        }

        .project-item:hover .project-card-box {
          transform: translateY(-3px);
        }

        .project-img {
          position: relative;
          width: 100%;
          height: 185px;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-1);
          border: 1px solid var(--jet);
        }

        .project-img::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          z-index: 1;
          transition: var(--transition-1);
        }

        .project-item:hover .project-img::before {
          background: hsla(0, 0%, 0%, 0.55);
        }

        .project-item-icon-box {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.8);
          background: linear-gradient(135deg, hsl(43, 96%, 64%) 0%, hsl(348, 83%, 52%) 100%);
          color: #0b0d14;
          font-size: 20px;
          padding: 13px;
          border-radius: 14px;
          opacity: 0;
          z-index: 2;
          transition: var(--transition-1);
          box-shadow: 0 0 20px hsla(348, 83%, 52%, 0.4);
        }

        .project-item:hover .project-item-icon-box {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }

        .project-title {
          color: var(--white-2);
          font-size: var(--fs-4);
          font-weight: var(--fw-600);
          text-transform: capitalize;
          line-height: 1.35;
          margin-bottom: 4px;
          transition: color var(--transition-1);
        }

        .project-item:hover .project-title {
          color: var(--gold-primary);
        }

        .project-category {
          color: var(--ruby-glow);
          font-size: var(--fs-7);
          font-weight: var(--fw-500);
          margin-bottom: 8px;
        }

        .project-preview-outcome {
          font-size: var(--fs-7);
          color: var(--white-2);
          background: var(--onyx);
          padding: 7px 12px;
          border-radius: 8px;
          margin-bottom: 10px;
          line-height: 1.4;
          border: 1px solid hsla(43, 96%, 64%, 0.1);
        }

        .project-tools-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        @media (min-width: 768px) {
          .filter-list {
            display: flex;
          }
          .filter-select-box {
            display: none;
          }
          .project-list {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </article>
  );
}
