import React from 'react';
import { Microscope, Video, Workflow, Sparkles, Quote, CheckCircle2 } from 'lucide-react';

export default function TabAbout({ data }) {
  const personalInfo = data?.personalInfo || {};
  const whatIDo = data?.whatIDo || [];
  const aboutStats = data?.aboutStats || [];
  const philosophy = data?.philosophy || {};

  const serviceIconMap = {
    rd: <Microscope size={24} />,
    multimedia: <Video size={24} />,
    operations: <Workflow size={24} />
  };

  return (
    <article className="about-tab tab-content-active">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>

      {/* Main Narrative */}
      <section className="about-text-section">
        <p className="about-lead-quote">"{personalInfo.tagline}"</p>
        <p className="about-paragraph">{personalInfo.bio}</p>
        <p className="about-paragraph">
          Serving as <strong className="text-gold">{personalInfo.role}</strong> at{' '}
          <strong className="text-ruby">{personalInfo.organization}</strong>{' '}
          ({personalInfo.department}) since {personalInfo.experienceSince},
          Shabbir specializes in bridging technical possibilities with practical institutional
          realities — delivering measurable enhancements to communication outreach and operational agility.
        </p>
      </section>

      {/* What I'm Doing */}
      <section className="service-section">
        <h3 className="h3 section-heading">What I'm Doing</h3>
        <ul className="service-list">
          {whatIDo.map((item) => (
            <li key={item.id} className="service-item">
              <div className="service-icon-box">
                {serviceIconMap[item.id] || <Sparkles size={24} />}
              </div>
              <div className="service-content-box">
                <h4 className="service-item-title">{item.title}</h4>
                <p className="service-highlight">"{item.highlight}"</p>
                <p className="service-item-text">{item.description}</p>
              </div>
            </li>
          ))}
          <li className="service-item">
            <div className="service-icon-box"><Sparkles size={24} /></div>
            <div className="service-content-box">
              <h4 className="service-item-title">Innovation & Digital Transformation</h4>
              <p className="service-highlight">"Continuous system refinement & digital modernization"</p>
              <p className="service-item-text">
                Auditing manual administrative routines, conducting feasibility studies for modern
                productivity tooling, and authoring rigorous standard operating procedures (SOPs).
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/* Key Highlights */}
      <section className="highlights-section">
        <h3 className="h3 section-heading">Key Highlights</h3>
        <div className="highlights-grid">
          {aboutStats.map((stat, idx) => (
            <div key={idx} className="highlight-card">
              <span className="highlight-label">{stat.label}</span>
              <h4 className="highlight-val text-gradient-yellow">{stat.value}</h4>
              <p className="highlight-sub">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="ethos-section">
        <h3 className="h3 section-heading">Guiding Philosophy</h3>
        <div className="ethos-card">
          <div className="ethos-quote-icon"><Quote size={26} /></div>
          <blockquote className="ethos-quote">"{philosophy.quote}"</blockquote>
          <p className="ethos-subtext">{philosophy.subtext}</p>
          <div className="ethos-principles-row">
            {(philosophy.principles || []).map((p, i) => (
              <div key={i} className="ethos-principle-box">
                <div className="principle-bullet"><CheckCircle2 size={15} /></div>
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
        .about-tab { display: block; }

        .about-text-section { margin-bottom: 26px; }

        .about-lead-quote {
          font-size: clamp(14px, 3vw, 16px);
          font-weight: 600;
          color: hsl(43, 96%, 68%);
          margin-bottom: 12px;
          line-height: 1.55;
          padding: 14px 16px;
          border-left: 3px solid hsl(348, 83%, 52%);
          background: linear-gradient(90deg, hsla(348, 70%, 30%, 0.18) 0%, transparent 100%);
          border-radius: 0 10px 10px 0;
        }

        .about-paragraph {
          color: hsla(330, 15%, 80%, 0.8);
          font-size: 13.5px;
          font-weight: 400;
          line-height: 1.75;
          margin-bottom: 12px;
        }

        .text-gold { color: hsl(43, 96%, 65%); font-weight: 600; }
        .text-ruby { color: hsl(348, 85%, 65%); font-weight: 600; }

        /* ── Section headings ── */
        .section-heading {
          margin-bottom: 16px;
          font-size: clamp(15px, 3.2vw, 18px);
        }

        .service-section, .highlights-section, .ethos-section {
          margin-bottom: 26px;
        }

        /* ── Service cards ── */
        .service-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }

        .service-item {
          position: relative;
          padding: 16px;
          border-radius: 14px;
          border: 1px solid hsla(348, 50%, 35%, 0.4);
          background: linear-gradient(145deg, hsl(344, 32%, 13%) 0%, hsl(330, 20%, 10%) 100%);
          display: flex;
          align-items: flex-start;
          gap: 14px;
          transition: border-color var(--ease-1), transform var(--ease-1), box-shadow var(--ease-1);
          overflow: hidden;
        }

        .service-item::before {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 3px; height: 100%;
          background: linear-gradient(to bottom, hsl(43, 96%, 64%), hsl(348, 83%, 52%));
          border-radius: 2px 0 0 2px;
        }

        .service-item:hover {
          transform: translateY(-2px);
          border-color: hsla(348, 70%, 45%, 0.6);
          box-shadow: 0 8px 28px hsla(348, 70%, 20%, 0.4), 0 0 0 1px hsla(348, 60%, 40%, 0.2);
        }

        .service-icon-box {
          margin-top: 2px;
          color: hsl(348, 85%, 65%);
          flex-shrink: 0;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: linear-gradient(135deg, hsla(348, 70%, 30%, 0.3) 0%, hsla(344, 50%, 18%, 0.6) 100%);
          border: 1px solid hsla(348, 60%, 40%, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .service-content-box { flex: 1; min-width: 0; }

        .service-item-title {
          font-size: clamp(13px, 2.5vw, 15px);
          font-weight: 600;
          color: hsl(330, 30%, 94%);
          margin-bottom: 4px;
          line-height: 1.3;
        }

        .service-highlight {
          font-size: 11.5px;
          font-style: italic;
          color: hsl(43, 80%, 60%);
          margin-bottom: 6px;
          opacity: 0.9;
        }

        .service-item-text {
          color: hsla(330, 15%, 75%, 0.75);
          font-size: 12.5px;
          font-weight: 400;
          line-height: 1.65;
        }

        /* ── Highlights grid ── */
        .highlights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .highlight-card {
          padding: 16px;
          border-radius: 14px;
          border: 1px solid hsla(348, 50%, 35%, 0.4);
          background: linear-gradient(145deg, hsl(344, 32%, 13%) 0%, hsl(330, 20%, 10%) 100%);
          position: relative;
          overflow: hidden;
          transition: var(--ease-1);
        }

        .highlight-card::after {
          content: "";
          position: absolute;
          bottom: 0; right: 0;
          width: 50px; height: 50px;
          background: radial-gradient(circle, hsla(348, 70%, 40%, 0.12) 0%, transparent 70%);
        }

        .highlight-card:hover {
          border-color: hsla(43, 80%, 50%, 0.4);
          transform: translateY(-2px);
        }

        .highlight-label {
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: hsl(348, 80%, 65%);
          display: block;
          margin-bottom: 4px;
        }

        .highlight-val {
          font-size: clamp(15px, 3.2vw, 20px);
          font-weight: 800;
          margin-bottom: 4px;
          line-height: 1.2;
        }

        .highlight-sub {
          font-size: 11.5px;
          color: hsla(330, 15%, 70%, 0.7);
          line-height: 1.4;
        }

        /* ── Philosophy card ── */
        .ethos-card {
          padding: 20px 18px;
          text-align: center;
          border-radius: 16px;
          border: 1px solid hsla(348, 50%, 35%, 0.4);
          background: linear-gradient(145deg, hsl(344, 32%, 13%) 0%, hsl(330, 20%, 10%) 100%);
          position: relative;
          overflow: hidden;
        }

        .ethos-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, hsl(348, 83%, 52%), hsl(43, 96%, 64%), transparent);
        }

        .ethos-quote-icon {
          color: hsl(348, 85%, 65%);
          display: flex;
          justify-content: center;
          margin-bottom: 10px;
        }

        .ethos-quote {
          font-size: clamp(14px, 3vw, 17px);
          font-weight: 600;
          color: hsl(330, 30%, 94%);
          line-height: 1.5;
          margin-bottom: 8px;
        }

        .ethos-subtext {
          font-size: 13px;
          color: hsl(43, 70%, 62%);
          margin-bottom: 18px;
          opacity: 0.9;
        }

        .ethos-principles-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          text-align: left;
          border-top: 1px solid hsla(348, 40%, 30%, 0.4);
          padding-top: 16px;
        }

        .ethos-principle-box {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .principle-bullet {
          color: hsl(43, 96%, 65%);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .ethos-principle-box h5 {
          font-size: 12.5px;
          color: hsl(330, 30%, 92%);
          font-weight: 600;
          margin-bottom: 3px;
        }

        .ethos-principle-box p {
          font-size: 11.5px;
          color: hsla(330, 15%, 70%, 0.7);
          line-height: 1.45;
        }

        @media (min-width: 640px) {
          .service-list { grid-template-columns: 1fr 1fr; }
          .ethos-principles-row { grid-template-columns: repeat(3, 1fr); }
        }

        @media (min-width: 1024px) {
          .highlights-grid { gap: 16px; }
          .highlight-card { padding: 18px; }
          .ethos-card { padding: 28px 26px; }
          .service-item { padding: 20px; }
        }
      `}</style>
    </article>
  );
}
