import React from 'react';
import { Microscope, Video, Workflow, Sparkles, Quote, CheckCircle2 } from 'lucide-react';

export default function TabAbout({ data }) {
  const personalInfo = data?.personalInfo || {};
  const whatIDo = data?.whatIDo || [];
  const aboutStats = data?.aboutStats || [];
  const philosophy = data?.philosophy || {};

  const serviceIconMap = {
    rd: <Microscope size={26} />,
    multimedia: <Video size={26} />,
    operations: <Workflow size={26} />
  };

  return (
    <article className="about-tab tab-content-active">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>

      {/* Main Narrative */}
      <section className="about-text-section">
        <p className="about-lead-quote">
          "{personalInfo.tagline}"
        </p>

        <p className="about-paragraph">
          {personalInfo.bio}
        </p>

        <p className="about-paragraph">
          Serving as <strong className="text-gold">{personalInfo.role}</strong> at <strong className="text-ruby">{personalInfo.organization}</strong> ({personalInfo.department}) since {personalInfo.experienceSince}, Shabbir specializes in bridging technical possibilities with practical institutional realities—delivering measurable enhancements to communication outreach and operational agility.
        </p>
      </section>

      {/* What I'm Doing Section */}
      <section className="service-section">
        <h3 className="h3 service-heading">What I'm Doing</h3>

        <ul className="service-list">
          {whatIDo.map((item) => (
            <li key={item.id} className="service-item">
              <div className="service-icon-box">
                {serviceIconMap[item.id] || <Sparkles size={26} />}
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">{item.title}</h4>
                <p className="service-highlight">"{item.highlight}"</p>
                <p className="service-item-text">{item.description}</p>
              </div>
            </li>
          ))}

          {/* Innovation & Strategy Card */}
          <li className="service-item">
            <div className="service-icon-box">
              <Sparkles size={26} />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Innovation & Digital Transformation</h4>
              <p className="service-highlight">"Continuous system refinement & digital modernization"</p>
              <p className="service-item-text">
                Auditing manual administrative routines, conducting feasibility studies for modern productivity tooling, and authoring rigorous standard operating procedures (SOPs).
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/* Organization Highlights Section */}
      <section className="highlights-section">
        <h3 className="h3 service-heading">Key Highlights</h3>

        <div className="highlights-grid">
          {aboutStats.map((stat, idx) => (
            <div key={idx} className="content-card highlight-card">
              <span className="highlight-label">{stat.label}</span>
              <h4 className="highlight-val text-gradient-yellow">{stat.value}</h4>
              <p className="highlight-sub">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Working Ethos / Philosophy Section */}
      <section className="ethos-section">
        <h3 className="h3 service-heading">Guiding Philosophy</h3>

        <div className="content-card ethos-card">
          <div className="ethos-quote-icon">
            <Quote size={28} />
          </div>

          <blockquote className="ethos-quote">
            "{philosophy.quote}"
          </blockquote>

          <p className="ethos-subtext">
            {philosophy.subtext}
          </p>

          <div className="ethos-principles-row">
            {(philosophy.principles || []).map((p, i) => (
              <div key={i} className="ethos-principle-box">
                <div className="principle-bullet">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h5>{p.title}</h5>
                  <p>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .about-tab {
          display: block;
        }

        .about-text-section {
          margin-bottom: 28px;
        }

        .about-lead-quote {
          font-size: var(--fs-4);
          font-weight: var(--fw-600);
          color: var(--gold-primary);
          margin-bottom: 12px;
          line-height: 1.5;
          letter-spacing: -0.01em;
        }

        .about-paragraph {
          color: var(--light-gray-70);
          font-size: var(--fs-6);
          font-weight: var(--fw-300);
          line-height: 1.7;
          margin-bottom: 14px;
        }

        .text-gold {
          color: var(--gold-primary);
          font-weight: var(--fw-600);
        }

        .text-ruby {
          color: var(--ruby-glow);
          font-weight: var(--fw-600);
        }

        .service-section, .highlights-section, .ethos-section {
          margin-bottom: 28px;
        }

        .service-heading {
          margin-bottom: 16px;
        }

        /* Mobile-first: single column */
        .service-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .service-item {
          position: relative;
          background: var(--border-gradient-onyx);
          padding: 18px;
          border-radius: 14px;
          box-shadow: var(--shadow-2);
          z-index: 1;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          transition: transform var(--transition-1), border-color var(--transition-1);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .service-item::before {
          content: "";
          position: absolute;
          inset: 1px;
          background: var(--bg-gradient-jet);
          border-radius: inherit;
          z-index: -1;
        }

        .service-item:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-3);
          border-color: hsla(348, 83%, 52%, 0.3);
        }

        .service-icon-box {
          margin-top: 2px;
          color: var(--ruby-glow);
          flex-shrink: 0;
        }

        .service-content-box {
          flex: 1;
          min-width: 0;
        }

        .service-item-title {
          margin-bottom: 4px;
          color: var(--white-2);
          font-size: var(--fs-4);
        }

        .service-highlight {
          font-size: var(--fs-8);
          font-style: italic;
          color: var(--vegas-gold);
          margin-bottom: 6px;
        }

        .service-item-text {
          color: var(--light-gray-70);
          font-size: var(--fs-7);
          font-weight: var(--fw-300);
          line-height: 1.6;
        }

        /* Mobile: 2-col highlights always */
        .highlights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .highlight-card {
          padding: 14px;
        }

        .highlight-label {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--ruby-glow);
          font-weight: var(--fw-600);
          display: block;
          margin-bottom: 3px;
        }

        .highlight-val {
          font-size: var(--fs-3);
          font-weight: var(--fw-700);
          margin-bottom: 3px;
        }

        .highlight-sub {
          font-size: 11px;
          color: var(--light-gray-70);
          line-height: 1.4;
        }

        .ethos-card {
          padding: 20px 18px;
          text-align: center;
        }

        .ethos-quote-icon {
          color: var(--ruby-glow);
          display: flex;
          justify-content: center;
          margin-bottom: 10px;
        }

        .ethos-quote {
          font-size: var(--fs-3);
          font-weight: var(--fw-600);
          color: var(--white-2);
          line-height: 1.45;
          margin-bottom: 8px;
        }

        .ethos-subtext {
          font-size: var(--fs-6);
          color: var(--vegas-gold);
          margin-bottom: 18px;
        }

        /* Mobile: principles as 1-col stacked list */
        .ethos-principles-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          text-align: left;
          border-top: 1px solid var(--jet);
          padding-top: 16px;
        }

        .ethos-principle-box {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .principle-bullet {
          color: var(--gold-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .ethos-principle-box h5 {
          font-size: var(--fs-7);
          color: var(--white-2);
          font-weight: var(--fw-600);
          margin-bottom: 3px;
        }

        .ethos-principle-box p {
          font-size: 11px;
          color: var(--light-gray-70);
          line-height: 1.45;
        }

        /* Tablet+ */
        @media (min-width: 640px) {
          .service-list {
            grid-template-columns: 1fr 1fr;
          }
          .ethos-principles-row {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Desktop+ */
        @media (min-width: 1024px) {
          .service-list {
            grid-template-columns: 1fr 1fr;
          }
          .highlights-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .highlight-card {
            padding: 18px;
          }
          .ethos-card {
            padding: 26px 24px;
          }
        }
      `}</style>
    </article>
  );
}
