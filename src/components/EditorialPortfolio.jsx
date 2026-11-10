import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, ExternalLink, Sparkles, CheckCircle2, 
  Send, Loader2, ArrowUpRight, Menu, X, FileText, Briefcase, 
  GraduationCap, Award, Zap, Linkedin, Instagram, Github, Eye
} from 'lucide-react';
import logoImg from '../assets/logo.jpg';
import { submitContactMessage } from '../data/portfolioData';

export default function EditorialPortfolio({ data, onSelectProject, onOpenResume, onOpenBrandGuidelines }) {
  const personalInfo = data?.personalInfo || {};
  const aboutStats = data?.aboutStats || [];
  const skills = data?.skills || [];
  const projects = data?.projects || [];
  const experience = data?.experience || {};
  const education = data?.education || [];
  const whatIDo = data?.whatIDo || [];

  // Mobile navigation drawer state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active skills filter
  const [skillFilter, setSkillFilter] = useState('all');

  // Contact form state
  const [formData, setFormData] = useState({ fullname: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullname || !formData.email || !formData.message) return;
    setFormStatus('sending');
    try {
      await submitContactMessage({
        fullname: formData.fullname,
        email: formData.email,
        subject: 'Inquiry from Editorial Portfolio',
        message: formData.message
      });
      setFormStatus('success');
      setFormData({ fullname: '', email: '', message: '' });
      setTimeout(() => setFormStatus(null), 5000);
    } catch (err) {
      console.error('Contact submission error:', err);
      setFormStatus('error');
      setTimeout(() => setFormStatus(null), 5000);
    }
  };

  const filteredSkills = skillFilter === 'all' 
    ? skills 
    : skills.filter(s => s.category === skillFilter);

  // Top tools to show circular gauge rings for
  const featuredTools = skills.slice(0, 6);

  return (
    <div className="editorial-app">
      {/* ─── Top Navigation Bar ─── */}
      <header className="ed-header">
        <div className="ed-header-inner">
          <a href="#" className="ed-brand-logo">
            <div className="ed-brand-avatar">
              <img src={personalInfo.avatarUrl || logoImg} alt="Monogram" className="ed-brand-img" />
            </div>
            <div className="ed-brand-text">
              <span className="ed-brand-name">{personalInfo.name}</span>
              <span className="ed-brand-subtitle">{personalInfo.role}</span>
            </div>
          </a>

          <div className="ed-nav-actions">
            <nav className="ed-desktop-nav">
              <a href="#about" className="ed-nav-link">About</a>
              <a href="#skills" className="ed-nav-link">Expertise</a>
              <a href="#timeline" className="ed-nav-link">Journey</a>
              <a href="#projects" className="ed-nav-link">Works</a>
              <button 
                type="button" 
                onClick={onOpenResume}
                className="ed-nav-link ed-resume-trigger"
              >
                Curriculum Vitae
              </button>
              <button 
                type="button" 
                onClick={onOpenBrandGuidelines}
                className="ed-nav-link ed-resume-trigger"
                title="View Official Brand Identity & Stationery Architecture"
              >
                Brand Manual
              </button>
            </nav>

            <a href="#contact" className="ed-cta-link">
              <span>Get in touch</span>
              <ArrowUpRight size={13} />
            </a>

            <button
              type="button"
              className="ed-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="ed-mobile-drawer">
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills & Tools</a>
            <a href="#timeline" onClick={() => setMobileMenuOpen(false)}>Education & Experience</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Selected Works</a>
            <button 
              type="button" 
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              className="ed-mobile-cv-btn"
            >
              <FileText size={14} />
              <span>Curriculum Vitae</span>
            </button>
            <button 
              type="button" 
              onClick={() => { setMobileMenuOpen(false); onOpenBrandGuidelines(); }}
              className="ed-mobile-cv-btn"
            >
              <Award size={14} />
              <span>Brand Guidelines &amp; Stationery</span>
            </button>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="ed-mobile-cta">
              Initiate Collaboration
            </a>
          </div>
        )}
      </header>

      <main className="ed-main">
        {/* ─── Hero Section ─── */}
        <section id="about" className="ed-hero-section">
          <div className="ed-container">
            {/* Tagline / Sub-positioning */}
            <div className="ed-hero-header">
              <span className="ed-hero-eyebrow">
                Editorial &amp; Digital Experience • {personalInfo.positioning || "R&D | IT & Multimedia | Operations"}
              </span>
              <h1 className="ed-hero-title">{personalInfo.name}</h1>
              {personalInfo.secondName && (
                <p className="ed-hero-second-name">{personalInfo.secondName}</p>
              )}
              <p className="ed-hero-role">{personalInfo.role} — {personalInfo.organization}</p>
              <div className="ed-hero-status-pill">
                <span className="ed-pulse-dot" />
                <span>Based in {personalInfo.location || "Mumbai, India"}</span>
              </div>
            </div>

            {/* Hero Circular Framed Portrait */}
            <div className="ed-hero-visual-wrap">
              <div className="ed-circular-frame">
                <img 
                  src={personalInfo.avatarUrl || logoImg} 
                  alt={personalInfo.name} 
                  className="ed-circular-img" 
                />
              </div>

              <div className="ed-photo-socials-centered">
                {personalInfo.linkedin && (
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="ed-social-icon-btn">
                    <Linkedin size={15} />
                  </a>
                )}
                {personalInfo.github && (
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="ed-social-icon-btn">
                    <Github size={15} />
                  </a>
                )}
                {personalInfo.instagram && (
                  <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" title="Instagram" className="ed-social-icon-btn">
                    <Instagram size={15} />
                  </a>
                )}
                {personalInfo.email && (
                  <a href={`mailto:${personalInfo.email}`} title="Email" className="ed-social-icon-btn">
                    <Mail size={15} />
                  </a>
                )}
              </div>
            </div>

            {/* Biography & Philosophy Quote */}
            <div className="ed-hero-bio-wrap">
              <blockquote className="ed-hero-quote">
                "{personalInfo.tagline || "Great technology is invisible. Great design is understood without explanation."}"
              </blockquote>
              <p className="ed-hero-bio">
                {personalInfo.bio}
              </p>
            </div>

            {/* Quantitative Metrics Grid */}
            <div className="ed-metrics-grid">
              {aboutStats.map((stat, idx) => (
                <div key={idx} className="ed-metric-card">
                  <span className="ed-metric-label">{stat.label}</span>
                  <p className="ed-metric-value">{stat.value}</p>
                  <span className="ed-metric-sub">{stat.subtext}</span>
                </div>
              ))}
            </div>

            {/* Location & Contact Mini Panel */}
            <div className="ed-mini-contact-panel">
              <div className="ed-mini-col">
                <span className="ed-mini-label">Location</span>
                <span className="ed-mini-val">{personalInfo.location || "Mumbai, India"}</span>
              </div>
              <div className="ed-mini-col">
                <span className="ed-mini-label">Direct Contact</span>
                <a href={`mailto:${personalInfo.email}`} className="ed-mini-val ed-link">{personalInfo.email}</a>
              </div>
              <div className="ed-mini-col">
                <span className="ed-mini-label">Core Focus</span>
                <span className="ed-mini-val">{personalInfo.subPositioning || "Technology + Creativity + Operations"}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Endorsements & Functional Pillars ─── */}
        <section className="ed-pillars-section">
          <div className="ed-container">
            <p className="ed-section-eyebrow text-center">Institutional Pillars &amp; Core Competencies</p>
            <div className="ed-pillars-grid">
              {whatIDo.map((item) => (
                <div key={item.id} className="ed-pillar-card">
                  <span className="ed-pillar-category">{item.category}</span>
                  <h3 className="ed-pillar-title">{item.title}</h3>
                  <p className="ed-pillar-highlight">"{item.highlight}"</p>
                  <p className="ed-pillar-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Skills & Tools Section with Circular Gauges ─── */}
        <section id="skills" className="ed-skills-section">
          <div className="ed-container">
            <div className="ed-section-header-row">
              <div>
                <span className="ed-section-eyebrow">Expertise &amp; Capabilities</span>
                <h2 className="ed-section-title">Skills &amp; Tools</h2>
              </div>
              <div className="ed-filter-pills">
                <button 
                  type="button" 
                  className={`ed-pill ${skillFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setSkillFilter('all')}
                >
                  All
                </button>
                <button 
                  type="button" 
                  className={`ed-pill ${skillFilter === 'technology' ? 'active' : ''}`}
                  onClick={() => setSkillFilter('technology')}
                >
                  Technology &amp; AI
                </button>
                <button 
                  type="button" 
                  className={`ed-pill ${skillFilter === 'design' ? 'active' : ''}`}
                  onClick={() => setSkillFilter('design')}
                >
                  Design
                </button>
                <button 
                  type="button" 
                  className={`ed-pill ${skillFilter === 'video' ? 'active' : ''}`}
                  onClick={() => setSkillFilter('video')}
                >
                  Video &amp; Motion
                </button>
              </div>
            </div>

            {/* Circular Gauge Meters */}
            <div className="ed-gauge-grid">
              {featuredTools.map((skill, sIdx) => {
                const strokeDash = `${skill.level}, 100`;
                return (
                  <div key={sIdx} className="ed-gauge-card">
                    <div className="ed-gauge-ring-wrap">
                      <svg className="ed-gauge-svg" viewBox="0 0 36 36">
                        <path
                          className="ed-gauge-bg-path"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        />
                        <path
                          className="ed-gauge-val-path"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeDasharray={strokeDash}
                          strokeLinecap="round"
                          strokeWidth="2.5"
                        />
                      </svg>
                      <span className="ed-gauge-percent">{skill.level}%</span>
                    </div>
                    <span className="ed-gauge-title">{skill.name}</span>
                    <span className="ed-gauge-sub">{skill.highlight || skill.experience}</span>
                  </div>
                );
              })}
            </div>

            {/* Capability Tag Cloud */}
            <div className="ed-tags-cloud">
              {filteredSkills.map((sk) => (
                <div key={sk.name} className="ed-skill-tag-pill">
                  <span className="ed-tag-name">{sk.name}</span>
                  <span className="ed-tag-exp">{sk.experience}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Education & Experience Timeline ─── */}
        <section id="timeline" className="ed-timeline-section">
          <div className="ed-container">
            <span className="ed-section-eyebrow">Professional Milestone Log</span>
            <h2 className="ed-section-title">Education &amp; Experience</h2>

            <div className="ed-timeline-tree">
              {/* Experience at Dawat-e-Hadiyah */}
              <div className="ed-timeline-node">
                <span className="ed-node-bullet active" />
                <span className="ed-node-period">{experience.period || "2019 — PRESENT"}</span>
                <h3 className="ed-node-title">{experience.role}</h3>
                <p className="ed-node-org">{experience.organization} • {experience.department}</p>
                <p className="ed-node-desc">{experience.description}</p>
                {experience.pillars && (
                  <div className="ed-node-subpillars">
                    {experience.pillars.map((pil, idx) => (
                      <span key={idx} className="ed-subpillar-badge">{pil.title}</span>
                    ))}
                  </div>
                )}
              </div>

              {/* Education items */}
              {education.map((edu, eIdx) => (
                <div key={eIdx} className="ed-timeline-node">
                  <span className="ed-node-bullet" />
                  <span className="ed-node-period">{edu.period}</span>
                  <h3 className="ed-node-title">{edu.degree}</h3>
                  <p className="ed-node-org">{edu.institution} • {edu.location}</p>
                  <p className="ed-node-desc">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Latest Projects Showcase ─── */}
        <section id="projects" className="ed-projects-section">
          <div className="ed-container">
            <div className="ed-section-header-row">
              <div>
                <span className="ed-section-eyebrow">Curated Portfolio</span>
                <h2 className="ed-section-title">Selected Case Studies &amp; Works</h2>
              </div>
              <span className="ed-projects-count">Total: {projects.length} Initiatives</span>
            </div>

            <div className="ed-projects-grid">
              {projects.map((proj) => (
                <article key={proj.id} className="ed-project-card">
                  <div 
                    className="ed-project-thumb"
                    style={{ background: proj.thumbnailGradient }}
                    onClick={() => onSelectProject(proj)}
                  >
                    <span className="ed-project-cat-badge">{proj.categoryLabel}</span>

                    {/* Center Eye Action Button */}
                    {proj.projectUrl ? (
                      <a
                        href={proj.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ed-center-eye-link"
                        title="Open hyperlinked project"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Eye size={22} className="ed-center-icon" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="ed-center-eye-link"
                        title="View Case Study"
                        onClick={() => onSelectProject(proj)}
                      >
                        <Eye size={22} className="ed-center-icon" />
                      </button>
                    )}
                  </div>

                  <div className="ed-project-info">
                    <div className="ed-project-title-row">
                      <div onClick={() => onSelectProject(proj)} style={{ cursor: 'pointer', flex: 1 }}>
                        <h3 className="ed-project-title">{proj.title}</h3>
                        <p className="ed-project-short-desc">{proj.shortDesc}</p>
                      </div>

                      {proj.projectUrl ? (
                        <a
                          href={proj.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ed-project-launch-btn"
                          title="Open project link in new tab"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ArrowUpRight size={16} />
                        </a>
                      ) : (
                        <button
                          type="button"
                          className="ed-project-launch-btn"
                          onClick={() => onSelectProject(proj)}
                          title="View Case Study"
                        >
                          <ArrowUpRight size={16} />
                        </button>
                      )}
                    </div>

                    <div className="ed-project-outcome-box">
                      <strong>Result:</strong> {proj.outcome}
                    </div>

                    <div className="ed-project-tools-row">
                      {(proj.tools || []).slice(0, 4).map((tool) => (
                        <span key={tool} className="ed-tool-pill">{tool}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Call To Action / Contact Section ─── */}
        <section id="contact" className="ed-contact-section">
          <div className="ed-container ed-contact-box">
            <span className="ed-contact-eyebrow">Initiate Collaboration</span>
            <h2 className="ed-contact-title">Have a project or mission in mind?</h2>
            <p className="ed-contact-desc">
              Available for specialized Research &amp; Development, IT &amp; Multimedia architecture, and operational workflow consulting.
            </p>

            <form onSubmit={handleContactSubmit} className="ed-contact-form">
              <div className="ed-form-inputs-grid">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  required
                  value={formData.fullname}
                  onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                  className="ed-form-input"
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="ed-form-input"
                />
              </div>
              <textarea
                rows="3"
                placeholder="Describe your initiative or inquiry..."
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="ed-form-textarea"
              />

              <div className="ed-form-submit-row">
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="ed-submit-btn"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <Loader2 size={16} className="spin-icon" />
                      <span>Transmitting…</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>

                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="ed-direct-email-btn"
                >
                  <span>Or Send Direct Email</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {formStatus === 'success' && (
                <div className="ed-form-alert success">
                  <CheckCircle2 size={16} />
                  <span>Message recorded in Supabase database! Shabbir will respond promptly.</span>
                </div>
              )}
              {formStatus === 'error' && (
                <div className="ed-form-alert error">
                  <span>Failed to transmit. Please email directly at {personalInfo.email}.</span>
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="ed-footer">
        <div className="ed-container ed-footer-inner">
          <div className="ed-footer-brand">
            <div className="ed-footer-avatar">
              <img src={personalInfo.avatarUrl || logoImg} alt="Monogram" />
            </div>
            <p className="ed-footer-copy">
              © {new Date().getFullYear()} {personalInfo.name}. Designed with editorial passion &amp; operational precision.
            </p>
          </div>

          <div className="ed-footer-socials">
            {personalInfo.linkedin && (
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            )}
            {personalInfo.github && (
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            )}
            {personalInfo.instagram && (
              <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            )}
            <a href={`mailto:${personalInfo.email}`}>Email</a>
            <a href="#admin" className="ed-footer-admin-link">Admin CMS</a>
          </div>
        </div>
      </footer>

      {/* ─── CSS Stylesheet matching Bruno Erdison Stitch Template ─── */}
      <style>{`
        /* Core Palette Tokens */
        :root {
          --ed-bg: #fcfbfa;
          --ed-paper: #ffffff;
          --ed-dark: #121212;
          --ed-muted: #737373;
          --ed-border: #eae8e4;
          --ed-accent: #2c2b29;
          --ed-gold: #c59b27;
        }

        .editorial-app {
          background-color: var(--ed-bg);
          color: var(--ed-dark);
          font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
          min-height: 100vh;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        .ed-container {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ─── Header ─── */
        .ed-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(252, 251, 250, 0.92);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--ed-border);
        }

        .ed-header-inner {
          max-width: 1040px;
          margin: 0 auto;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .ed-brand-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: inherit;
        }

        .ed-brand-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid var(--ed-dark);
          overflow: hidden;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ed-brand-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .ed-brand-text {
          display: flex;
          flex-direction: column;
        }

        .ed-brand-name {
          font-family: 'Cinzel', serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--ed-dark);
        }

        .ed-brand-subtitle {
          font-size: 10px;
          color: var(--ed-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .ed-nav-actions {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .ed-desktop-nav {
          display: none;
          align-items: center;
          gap: 20px;
        }

        .ed-nav-link {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          color: var(--ed-muted);
          text-decoration: none;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .ed-nav-link:hover {
          color: var(--ed-dark);
        }

        .ed-cta-link {
          display: none;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 700;
          color: var(--ed-dark);
          text-decoration: none;
          border-bottom: 1.5px solid var(--ed-dark);
          padding-bottom: 2px;
          transition: opacity 0.2s ease;
        }

        .ed-cta-link:hover {
          opacity: 0.65;
        }

        .ed-menu-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid var(--ed-border);
          background: #fff;
          cursor: pointer;
          color: var(--ed-dark);
        }

        .ed-mobile-drawer {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 16px 20px 24px;
          background: #fff;
          border-bottom: 1px solid var(--ed-border);
        }

        .ed-mobile-drawer a {
          font-size: 13px;
          font-weight: 600;
          color: var(--ed-dark);
          text-decoration: none;
          padding: 6px 0;
        }

        .ed-mobile-cv-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          font-size: 13px;
          font-weight: 600;
          color: var(--ed-dark);
          padding: 6px 0;
          cursor: pointer;
          text-align: left;
        }

        .ed-mobile-cta {
          margin-top: 8px;
          display: inline-block;
          background: var(--ed-dark);
          color: #fff !important;
          padding: 10px 18px;
          border-radius: 9999px;
          text-align: center;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* ─── Hero Section ─── */
        .ed-hero-section {
          padding: 40px 0 55px;
          border-bottom: 1px solid var(--ed-border);
          text-align: center;
        }

        .ed-hero-eyebrow {
          display: inline-block;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--ed-muted);
          font-weight: 600;
          margin-bottom: 12px;
        }

        .ed-hero-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 700;
          color: var(--ed-dark);
          letter-spacing: -0.01em;
          line-height: 1.15;
          margin-bottom: 4px;
        }

        .ed-hero-second-name {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1rem, 2.2vw, 1.25rem);
          font-weight: 500;
          color: #8c6d1f;
          margin-bottom: 6px;
        }

        .ed-hero-role {
          font-size: clamp(1.05rem, 2.5vw, 1.45rem);
          font-weight: 300;
          color: #383838;
          margin-bottom: 14px;
        }

        .ed-hero-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px;
          background: #ffffff;
          border: 1px solid var(--ed-border);
          border-radius: 9999px;
          font-size: 12px;
          color: var(--ed-muted);
          font-weight: 500;
        }

        .ed-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
          70% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        /* Circular Frame Portrait */
        .ed-hero-visual-wrap {
          position: relative;
          width: fit-content;
          margin: 30px auto 40px;
        }

        .ed-circular-frame {
          width: 220px;
          height: 220px;
          margin: 0 auto;
          border-radius: 50%;
          overflow: hidden;
          border: 2.5px solid var(--ed-dark);
          box-shadow: 0 0 0 8px #fcfbfa, 0 16px 36px -8px rgba(0, 0, 0, 0.12);
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }

        .ed-circular-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.4s ease;
        }

        .ed-circular-img:hover {
          transform: scale(1.05);
        }

        .ed-photo-socials-centered {
          position: absolute;
          bottom: -14px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          padding: 6px 14px;
          border-radius: 9999px;
          border: 1px solid var(--ed-border);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }

        .ed-social-icon-btn {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #f7f7f5;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ed-dark);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .ed-social-icon-btn:hover {
          background: var(--ed-dark);
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        /* Bio snippet */
        .ed-hero-bio-wrap {
          max-width: 580px;
          margin: 0 auto 35px;
        }

        .ed-hero-quote {
          font-family: 'Cinzel', serif;
          font-size: 15px;
          font-style: italic;
          color: #4a4a4a;
          margin-bottom: 10px;
          line-height: 1.5;
        }

        .ed-hero-bio {
          font-size: 13px;
          color: var(--ed-muted);
          line-height: 1.7;
        }

        /* Metrics Grid */
        .ed-metrics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          max-width: 520px;
          margin: 0 auto;
        }

        .ed-metric-card {
          background: #ffffff;
          border: 1px solid var(--ed-border);
          border-radius: 12px;
          padding: 16px;
          text-align: center;
        }

        .ed-metric-label {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--ed-muted);
          font-weight: 600;
          display: block;
        }

        .ed-metric-value {
          font-family: 'Cinzel', serif;
          font-size: 24px;
          font-weight: 700;
          color: var(--ed-dark);
          margin: 4px 0 2px;
        }

        .ed-metric-sub {
          font-size: 11px;
          color: var(--ed-muted);
        }

        /* Mini Contact Panel */
        .ed-mini-contact-panel {
          margin-top: 35px;
          padding-top: 24px;
          border-top: 1px dashed var(--ed-border);
          display: flex;
          flex-direction: column;
          gap: 14px;
          font-size: 12px;
          color: var(--ed-muted);
        }

        .ed-mini-label {
          font-weight: 600;
          color: var(--ed-dark);
          display: block;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 2px;
        }

        .ed-mini-val {
          color: var(--ed-dark);
          font-weight: 500;
        }

        .ed-link {
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        /* ─── Functional Pillars Section ─── */
        .ed-pillars-section {
          padding: 45px 0;
          border-bottom: 1px solid var(--ed-border);
          background: #ffffff;
        }

        .ed-section-eyebrow {
          display: block;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--ed-muted);
          font-weight: 600;
          margin-bottom: 6px;
        }

        .ed-section-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(1.4rem, 3vw, 1.85rem);
          font-weight: 700;
          color: var(--ed-dark);
          letter-spacing: -0.01em;
        }

        .ed-pillars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-top: 24px;
        }

        .ed-pillar-card {
          padding: 24px;
          border: 1px solid var(--ed-border);
          border-radius: 14px;
          background: var(--ed-bg);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .ed-pillar-card:hover {
          transform: translateY(-2px);
          border-color: #d1cfc7;
        }

        .ed-pillar-category {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #8c6d1f;
          font-weight: 700;
          display: block;
          margin-bottom: 4px;
        }

        .ed-pillar-title {
          font-family: 'Cinzel', serif;
          font-size: 17px;
          font-weight: 700;
          color: var(--ed-dark);
          margin-bottom: 6px;
        }

        .ed-pillar-highlight {
          font-size: 12px;
          font-style: italic;
          color: #4a4a4a;
          margin-bottom: 8px;
        }

        .ed-pillar-desc {
          font-size: 12.5px;
          color: var(--ed-muted);
          line-height: 1.6;
        }

        /* ─── Skills Section ─── */
        .ed-skills-section {
          padding: 50px 0;
          border-bottom: 1px solid var(--ed-border);
        }

        .ed-section-header-row {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 28px;
        }

        .ed-filter-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .ed-pill {
          padding: 4px 12px;
          border-radius: 9999px;
          border: 1px solid var(--ed-border);
          background: #ffffff;
          font-size: 11px;
          font-weight: 600;
          color: var(--ed-muted);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .ed-pill.active {
          background: var(--ed-dark);
          color: #ffffff;
          border-color: var(--ed-dark);
        }

        /* Circular Gauges Grid */
        .ed-gauge-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 24px;
        }

        .ed-gauge-card {
          background: #ffffff;
          border: 1px solid var(--ed-border);
          border-radius: 14px;
          padding: 20px 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.2s ease;
        }

        .ed-gauge-card:hover {
          transform: translateY(-2px);
        }

        .ed-gauge-ring-wrap {
          position: relative;
          width: 68px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }

        .ed-gauge-svg {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }

        .ed-gauge-bg-path {
          color: #eceae5;
        }

        .ed-gauge-val-path {
          color: var(--ed-dark);
          transition: stroke-dasharray 0.8s ease;
        }

        .ed-gauge-percent {
          position: absolute;
          font-size: 13px;
          font-weight: 700;
          color: var(--ed-dark);
        }

        .ed-gauge-title {
          font-size: 13px;
          font-weight: 700;
          color: var(--ed-dark);
          margin-bottom: 2px;
        }

        .ed-gauge-sub {
          font-size: 11px;
          color: var(--ed-muted);
          line-height: 1.3;
        }

        .ed-tags-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
        }

        .ed-skill-tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: #ffffff;
          border: 1px solid var(--ed-border);
          border-radius: 9999px;
          font-size: 12px;
        }

        .ed-tag-name {
          font-weight: 600;
          color: var(--ed-dark);
        }

        .ed-tag-exp {
          font-size: 10px;
          color: var(--ed-muted);
          background: #f4f3ef;
          padding: 1px 6px;
          border-radius: 6px;
        }

        /* ─── Timeline Section ─── */
        .ed-timeline-section {
          padding: 50px 0;
          border-bottom: 1px solid var(--ed-border);
          background: var(--ed-bg);
        }

        .ed-timeline-tree {
          position: relative;
          margin-top: 30px;
          padding-left: 20px;
          border-left: 1px solid var(--ed-border);
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .ed-timeline-node {
          position: relative;
        }

        .ed-node-bullet {
          position: absolute;
          left: -26px;
          top: 4px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          border: 2px solid var(--ed-dark);
          background: #ffffff;
        }

        .ed-node-bullet.active {
          background: var(--ed-dark);
        }

        .ed-node-period {
          font-family: monospace;
          font-size: 10.5px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--ed-muted);
          display: block;
          margin-bottom: 4px;
        }

        .ed-node-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--ed-dark);
        }

        .ed-node-org {
          font-size: 12px;
          color: #8c6d1f;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .ed-node-desc {
          font-size: 12.5px;
          color: var(--ed-muted);
          line-height: 1.6;
        }

        .ed-node-subpillars {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 8px;
        }

        .ed-subpillar-badge {
          font-size: 10.5px;
          background: #ffffff;
          border: 1px solid var(--ed-border);
          padding: 2px 8px;
          border-radius: 6px;
          color: #383838;
        }

        /* ─── Projects Section ─── */
        .ed-projects-section {
          padding: 50px 0;
          border-bottom: 1px solid var(--ed-border);
        }

        .ed-projects-count {
          font-size: 12px;
          font-weight: 600;
          color: var(--ed-muted);
        }

        .ed-projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-top: 25px;
        }

        .ed-project-card {
          background: #ffffff;
          border: 1px solid var(--ed-border);
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .ed-project-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
        }

        .ed-project-thumb {
          position: relative;
          aspect-ratio: 16 / 9;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          overflow: hidden;
        }

        .ed-project-cat-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(18, 18, 18, 0.85);
          backdrop-filter: blur(8px);
          color: #ffffff;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 4px 10px;
          border-radius: 6px;
          font-weight: 600;
          z-index: 5;
        }

        .ed-center-eye-link {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          border: none;
          outline: none;
          cursor: pointer;
          background: linear-gradient(135deg, #fcd34d 0%, #f43f5e 100%);
          color: #121212;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 22px rgba(244, 63, 94, 0.35);
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
          z-index: 5;
          text-decoration: none;
        }

        .ed-center-eye-link:hover {
          transform: scale(1.12);
          box-shadow: 0 10px 28px rgba(244, 63, 94, 0.55);
        }

        .ed-project-info {
          padding: 20px;
        }

        .ed-project-title-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }

        .ed-project-title {
          font-family: 'Cinzel', serif;
          font-size: 17px;
          font-weight: 700;
          color: var(--ed-dark);
          line-height: 1.3;
          margin-bottom: 4px;
          transition: color 0.2s ease;
        }

        .ed-project-title:hover {
          color: #8c6d1f;
        }

        .ed-project-short-desc {
          font-size: 12px;
          color: var(--ed-muted);
          line-height: 1.5;
        }

        .ed-project-launch-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--ed-border);
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ed-dark);
          text-decoration: none;
          flex-shrink: 0;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .ed-project-launch-btn:hover {
          background: var(--ed-dark);
          color: #ffffff;
          border-color: var(--ed-dark);
        }

        .ed-project-outcome-box {
          margin-top: 14px;
          background: #f7f6f3;
          border: 1px solid #eae8e4;
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 11.5px;
          color: #383838;
        }

        .ed-project-tools-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 12px;
        }

        .ed-tool-pill {
          font-size: 10px;
          background: #ffffff;
          border: 1px solid var(--ed-border);
          padding: 2px 8px;
          border-radius: 4px;
          color: var(--ed-muted);
          font-weight: 500;
        }

        /* ─── Contact Section ─── */
        .ed-contact-section {
          padding: 60px 0;
          background: #11141a;
          color: #ffffff;
        }

        .ed-contact-box {
          text-align: center;
          max-width: 620px;
        }

        .ed-contact-eyebrow {
          font-family: monospace;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: #94a3b8;
          display: block;
          margin-bottom: 8px;
        }

        .ed-contact-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .ed-contact-desc {
          font-size: 13px;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .ed-contact-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ed-form-inputs-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .ed-form-input,
        .ed-form-textarea {
          width: 100%;
          background: #1a1e27;
          border: 1px solid #2e3442;
          color: #ffffff;
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 13px;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .ed-form-input:focus,
        .ed-form-textarea:focus {
          border-color: #d4af37;
        }

        .ed-form-submit-row {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 10px;
        }

        .ed-submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 26px;
          background: #ffffff;
          color: #121212;
          border-radius: 9999px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .ed-submit-btn:hover {
          background: #e2e8f0;
          transform: translateY(-1px);
        }

        .ed-direct-email-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 12px;
          color: #94a3b8;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .ed-direct-email-btn:hover {
          color: #ffffff;
        }

        .ed-form-alert {
          margin-top: 14px;
          padding: 12px;
          border-radius: 8px;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .ed-form-alert.success {
          background: #064e3b;
          color: #a7f3d0;
          border: 1px solid #10b981;
        }

        .ed-form-alert.error {
          background: #450a0a;
          color: #fca5a5;
          border: 1px solid #ef4444;
        }

        /* ─── Footer ─── */
        .ed-footer {
          padding: 40px 0;
          background: #ffffff;
          border-top: 1px solid var(--ed-border);
        }

        .ed-footer-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          text-align: center;
        }

        .ed-footer-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid var(--ed-dark);
          overflow: hidden;
          margin: 0 auto 6px;
        }

        .ed-footer-avatar img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .ed-footer-copy {
          font-size: 11.5px;
          color: var(--ed-muted);
        }

        .ed-footer-socials {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 11.5px;
        }

        .ed-footer-socials a {
          color: var(--ed-muted);
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: color 0.2s ease;
        }

        .ed-footer-socials a:hover {
          color: var(--ed-dark);
        }

        .ed-footer-admin-link {
          color: #8c6d1f !important;
          font-weight: 600;
        }

        /* ═══════════════════════════════
           DESKTOP MEDIA QUERIES (min-width: 768px)
           ═══════════════════════════════ */
        @media (min-width: 768px) {
          .ed-desktop-nav {
            display: flex;
          }

          .ed-cta-link {
            display: inline-flex;
          }

          .ed-menu-toggle {
            display: none;
          }

          .ed-mini-contact-panel {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }

          .ed-pillars-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .ed-section-header-row {
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
          }

          .ed-gauge-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .ed-projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ed-form-inputs-grid {
            grid-template-columns: 1fr 1fr;
          }

          .ed-form-submit-row {
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 20px;
          }

          .ed-footer-inner {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }

          .ed-footer-brand {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .ed-footer-avatar {
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
}
