import React, { useState } from 'react';
import { FolderGit2, Sparkles, ArrowRight, ExternalLink, Search, Layers, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const { projects, projectCategories } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <FolderGit2 size={13} />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="section-title">
            Project <span className="text-gold-gradient">Portfolio & Impact</span>
          </h2>
          <p className="section-subtitle">
            A curated showcase of multimedia campaigns, automated operational pipelines, technological pilots, and institutional solutions engineered for measurable results.
          </p>
        </div>

        {/* Filter Controls: Search & Category Pills */}
        <div className="projects-controls-wrapper">
          {/* Search Box */}
          <div className="project-search-box">
            <Search size={16} className="search-icon" />
            <input 
              type="text"
              placeholder="Search by project, tool, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="project-search-input"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="category-pills-row" role="tablist">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.id}
                className={`category-pill-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="no-projects-found">
            <p>No projects match your search criteria.</p>
            <button 
              type="button" 
              className="btn btn-gold-outline btn-sm"
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="glass-card project-card"
                onClick={() => onSelectProject(project)}
              >
                {/* Project Visual Banner */}
                <div 
                  className="project-card-banner"
                  style={{ background: project.thumbnailGradient }}
                >
                  <div className="project-banner-overlay" />
                  <div className="banner-top-badges">
                    <span className="project-cat-badge">{project.categoryLabel}</span>
                    {project.featured && (
                      <span className="featured-badge">
                        <Sparkles size={12} />
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="banner-visual-icon">
                    <Zap size={24} style={{ color: project.accentColor || '#d4af37' }} />
                  </div>
                </div>

                {/* Project Card Content */}
                <div className="project-card-content">
                  <div className="project-role-text">
                    <span>Role:</span> {project.role}
                  </div>

                  <h3 className="project-title">{project.title}</h3>

                  <p className="project-short-desc">
                    {project.shortDesc}
                  </p>

                  {/* Impact Highlight Box */}
                  <div className="project-outcome-box">
                    <span className="outcome-label">Key Result:</span>
                    <p className="outcome-text">{project.outcome}</p>
                  </div>

                  {/* Tools Tags */}
                  <div className="project-tools-row">
                    {project.tools.slice(0, 4).map((tool) => (
                      <span key={tool} className="tag">
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 4 && (
                      <span className="tag tag-gold">+{project.tools.length - 4}</span>
                    )}
                  </div>

                  {/* Footer Action */}
                  <div className="project-card-cta">
                    <span className="view-case-study-btn">
                      <span>Explore Full Case Study</span>
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .projects-section {
          background: linear-gradient(180deg, rgba(8,9,13,0) 0%, rgba(12,15,22,0.6) 50%, rgba(8,9,13,0) 100%);
        }

        .projects-controls-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 3.5rem;
        }

        .project-search-box {
          position: relative;
          width: 100%;
          max-width: 440px;
        }

        .search-icon {
          position: absolute;
          left: 1.1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          pointer-events: none;
        }

        .project-search-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 2.75rem;
          background: rgba(18, 22, 32, 0.7);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-full);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.9rem;
          outline: none;
          transition: all var(--transition-fast);
        }

        .project-search-input:focus {
          border-color: var(--gold-400);
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.2);
          background: rgba(24, 29, 44, 0.9);
        }

        .category-pills-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
        }

        .category-pill-btn {
          padding: 0.5rem 1.1rem;
          border-radius: var(--radius-full);
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          transition: all var(--transition-fast);
        }

        .category-pill-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.06);
          border-color: var(--border-medium);
        }

        .category-pill-btn.active {
          background: var(--gold-gradient);
          color: #0b0c10;
          font-weight: 700;
          box-shadow: 0 4px 16px rgba(212, 175, 55, 0.3);
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .project-card {
          padding: 0;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          height: 100%;
          background: rgba(14, 18, 26, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.07);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: var(--border-gold);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), var(--gold-glow);
        }

        .project-card-banner {
          position: relative;
          height: 170px;
          width: 100%;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }

        .project-banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(14, 18, 26, 0.95) 100%);
        }

        .banner-top-badges {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .project-cat-badge {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #ffffff;
          background: rgba(0, 0, 0, 0.5);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .featured-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.7rem;
          font-weight: 700;
          color: #0b0c10;
          background: var(--gold-gradient);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .banner-visual-icon {
          position: relative;
          z-index: 2;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(6px);
        }

        .project-card-content {
          padding: 1.5rem 1.75rem 1.75rem 1.75rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .project-role-text {
          font-size: 0.78rem;
          color: var(--gold-400);
          font-weight: 600;
          margin-bottom: 0.4rem;
        }

        .project-role-text span {
          color: var(--text-muted);
          font-weight: 400;
        }

        .project-title {
          font-size: 1.22rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 0.75rem;
        }

        .project-short-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1.25rem;
        }

        .project-outcome-box {
          background: rgba(212, 175, 55, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: var(--radius-sm);
          padding: 0.75rem 0.9rem;
          margin-bottom: 1.25rem;
        }

        .outcome-label {
          display: block;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--gold-400);
          font-weight: 700;
          margin-bottom: 0.15rem;
        }

        .outcome-text {
          font-size: 0.82rem;
          color: #f1f5f9;
          line-height: 1.4;
          font-weight: 500;
        }

        .project-tools-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-bottom: 1.5rem;
        }

        .project-card-cta {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }

        .view-case-study-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.86rem;
          font-weight: 700;
          color: var(--gold-400);
          transition: all 0.2s ease;
        }

        .project-card:hover .view-case-study-btn {
          color: var(--gold-300);
          transform: translateX(4px);
        }

        .no-projects-found {
          text-align: center;
          padding: 4rem 2rem;
          background: rgba(18, 22, 32, 0.5);
          border-radius: var(--radius-lg);
          border: 1px dashed var(--border-medium);
        }

        .no-projects-found p {
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        @media (max-width: 1100px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
