import React, { useState } from 'react';
import {
  Mail, Phone, Calendar, MapPin, Building,
  ChevronDown, ChevronUp, Linkedin, Instagram, Github, FileText
} from 'lucide-react';
import logoImg from '../assets/logo.jpg';

export default function Sidebar({ data, onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false);
  const personalInfo = data?.personalInfo || {};

  return (
    <aside className="vcard-sidebar-col">
      <div className="sidebar">

        {/* ── Top Profile Block ── */}
        <div className="sb-profile">
          {/* Avatar */}
          <div className="sb-avatar-ring">
            <div className="sb-avatar-wrap">
              <img
                src={logoImg}
                alt="Shabbir Maanak monogram"
                className="sb-avatar-img"
                loading="eager"
              />
            </div>
          </div>

          {/* Identity text */}
          <div className="sb-identity">
            <h1 className="sb-name">{personalInfo.name}</h1>
            {personalInfo.secondName && (
              <p className="sb-second-name">{personalInfo.secondName}</p>
            )}
            <span className="sb-role-badge">{personalInfo.role}</span>
            <p className="sb-org">{personalInfo.organization}</p>
          </div>
        </div>

        {/* ── Mobile "Show Contacts" Toggle ── placed BELOW the profile row ── */}
        <button
          type="button"
          className="sb-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span>{isOpen ? 'Hide Contacts' : 'Show Contacts'}</span>
          {isOpen ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
        </button>

        {/* ── Collapsible Contacts Panel ── */}
        <div className={`sb-panel ${isOpen ? 'sb-panel-open' : ''}`}>
          <div className="separator" />

          <ul className="sb-contacts">
            {[
              { icon: <Mail size={14} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, truncate: true },
              { icon: <Phone size={14} />, label: 'Phone', value: personalInfo.phone, href: `tel:${(personalInfo.phone||'').replace(/\s+/g,'')}`, truncate: true },
              { icon: <Calendar size={14} />, label: 'Experience', value: `Since ${personalInfo.experienceSince} (5+ Yrs)`, truncate: false },
              { icon: <Building size={14} />, label: 'Department', value: personalInfo.department, truncate: false },
              { icon: <MapPin size={14} />, label: 'Location', value: personalInfo.location, truncate: false },
            ].map(({ icon, label, value, href, truncate }) => (
              <li key={label} className="sb-contact-item">
                <div className="sb-icon-box">{icon}</div>
                <div className="sb-contact-text">
                  <p className="sb-contact-label">{label}</p>
                  {href ? (
                    <a href={href} className={`sb-contact-val ${truncate ? 'truncate' : ''}`}>{value}</a>
                  ) : (
                    <span className={`sb-contact-val ${truncate ? 'truncate' : ''}`}>{value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="separator" />

          {/* Social icons */}
          <ul className="sb-socials">
            {personalInfo.linkedin && (
              <li><a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="sb-social-link" title="LinkedIn"><Linkedin size={16} /></a></li>
            )}
            {personalInfo.instagram && (
              <li><a href={personalInfo.instagram} target="_blank" rel="noreferrer" className="sb-social-link" title="Instagram"><Instagram size={16} /></a></li>
            )}
            {personalInfo.github && (
              <li><a href={personalInfo.github} target="_blank" rel="noreferrer" className="sb-social-link" title="GitHub"><Github size={16} /></a></li>
            )}
            {personalInfo.email && (
              <li><a href={`mailto:${personalInfo.email}`} className="sb-social-link" title="Email"><Mail size={16} /></a></li>
            )}
          </ul>

          {/* CV Button */}
          <button type="button" onClick={onOpenResume} className="sb-cv-btn">
            <FileText size={13} />
            <span>Download CV / Resume</span>
          </button>
        </div>
      </div>

      <style>{`
        /* ─── Sidebar Card ─── */
        .sidebar {
          overflow: hidden;
        }

        /* ─── Profile Row ─── */
        .sb-profile {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 14px;
        }

        /* ─── Avatar ring ─── */
        .sb-avatar-ring {
          flex-shrink: 0;
          padding: 2.5px;
          border-radius: 16px;
          background: conic-gradient(
            from 0deg,
            hsl(43, 96%, 64%) 0deg,
            hsl(348, 83%, 52%) 120deg,
            hsl(320, 75%, 42%) 240deg,
            hsl(43, 96%, 64%) 360deg
          );
          box-shadow: 0 0 18px hsla(43, 96%, 64%, 0.25), 0 0 40px hsla(348, 70%, 40%, 0.15);
          animation: ring-spin 8s linear infinite;
        }

        @keyframes ring-spin {
          from { filter: hue-rotate(0deg); }
          to   { filter: hue-rotate(30deg); }
        }

        .sb-avatar-wrap {
          width: 78px;
          height: 60px;
          border-radius: 14px;
          overflow: hidden;
          background: linear-gradient(135deg, #edf0f5 0%, #dfe3ea 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sb-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        /* ─── Name / Role / Org ─── */
        .sb-identity {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .sb-name {
          font-size: clamp(15px, 3.8vw, 18px);
          font-weight: 700;
          color: hsl(330, 30%, 96%);
          letter-spacing: -0.02em;
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .sb-second-name {
          font-size: 11.5px;
          color: hsl(330, 20%, 78%);
          font-weight: 500;
          line-height: 1.25;
          margin-top: -2px;
          margin-bottom: 2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .sb-role-badge {
          display: inline-flex;
          align-items: center;
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.01em;
          background: linear-gradient(135deg, hsla(43, 96%, 64%, 0.18) 0%, hsla(348, 83%, 52%, 0.15) 100%);
          border: 1px solid hsla(43, 96%, 64%, 0.35);
          color: hsl(43, 96%, 68%);
          width: fit-content;
          max-width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .sb-org {
          font-size: 11px;
          color: var(--ruby-300);
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* ─── Mobile Toggle ─── */
        .sb-toggle-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 9px 16px;
          border-radius: 10px;
          background: linear-gradient(135deg, hsla(348, 60%, 28%, 0.4) 0%, hsla(330, 40%, 18%, 0.4) 100%);
          border: 1px solid hsla(348, 60%, 40%, 0.4);
          color: hsl(43, 90%, 65%);
          font-size: 12px;
          font-weight: 600;
          transition: var(--ease-1);
          letter-spacing: 0.02em;
          min-height: 40px;
        }

        .sb-toggle-btn:hover {
          background: linear-gradient(135deg, hsla(348, 60%, 32%, 0.5) 0%, hsla(330, 40%, 22%, 0.5) 100%);
          border-color: hsla(43, 96%, 64%, 0.5);
        }

        /* ─── Collapsible Panel ─── */
        .sb-panel {
          max-height: 0;
          overflow: hidden;
          visibility: hidden;
          transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), visibility 0s linear 0.4s;
        }

        .sb-panel-open {
          max-height: 900px;
          visibility: visible;
          transition: max-height 0.45s cubic-bezier(0.4,0,0.2,1), visibility 0s;
        }

        /* ─── Contacts ─── */
        .sb-contacts {
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .sb-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .sb-icon-box {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: linear-gradient(135deg, hsla(348, 70%, 30%, 0.35) 0%, hsla(344, 50%, 18%, 0.7) 100%);
          border: 1px solid hsla(348, 60%, 40%, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold-400);
          margin-top: 1px;
        }

        .sb-contact-text {
          flex: 1;
          min-width: 0;
        }

        .sb-contact-label {
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: hsla(330, 15%, 60%, 0.7);
          margin-bottom: 2px;
        }

        .sb-contact-val {
          font-size: 12.5px;
          color: hsl(330, 25%, 90%);
          font-weight: 400;
          display: block;
          font-style: normal;
          line-height: 1.4;
          white-space: normal;
          word-break: break-word;
          transition: color var(--ease-1);
        }

        .sb-contact-val.truncate {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        a.sb-contact-val:hover { color: var(--gold-300); }

        /* ─── Socials ─── */
        .sb-socials {
          display: flex;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .sb-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, hsla(348, 60%, 25%, 0.3) 0%, hsla(330, 30%, 15%, 0.5) 100%);
          border: 1px solid hsla(348, 50%, 40%, 0.3);
          color: hsla(330, 20%, 70%, 0.75);
          transition: var(--ease-1);
        }

        .sb-social-link:hover {
          color: var(--gold-300);
          border-color: hsla(43, 96%, 64%, 0.5);
          background: linear-gradient(135deg, hsla(43, 80%, 40%, 0.18) 0%, hsla(348, 70%, 35%, 0.2) 100%);
          transform: translateY(-2px);
          box-shadow: 0 4px 16px hsla(43, 96%, 64%, 0.2);
        }

        /* ─── CV Button ─── */
        .sb-cv-btn {
          margin-top: 12px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 11px 16px;
          border-radius: 12px;
          background: linear-gradient(135deg, hsla(348, 70%, 38%, 0.25) 0%, hsla(330, 50%, 25%, 0.2) 100%);
          border: 1px solid hsla(348, 70%, 45%, 0.5);
          color: hsl(348, 90%, 72%);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.01em;
          transition: var(--ease-1);
          min-height: 44px;
        }

        .sb-cv-btn:hover {
          background: linear-gradient(135deg, hsla(348, 70%, 45%, 0.35) 0%, hsla(43, 80%, 40%, 0.2) 100%);
          border-color: var(--ruby-300);
          color: hsl(330, 30%, 96%);
          box-shadow: var(--shadow-ruby);
          transform: translateY(-1px);
        }

        /* ═══════════════════════════════
           DESKTOP OVERRIDES
           ═══════════════════════════════ */
        @media (min-width: 1024px) {
          .sb-profile {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 14px;
            padding-bottom: 0;
          }

          .sb-avatar-ring {
            padding: 3px;
            border-radius: 20px;
          }

          .sb-avatar-wrap {
            width: 140px;
            height: 107px;
            border-radius: 17px;
          }

          .sb-identity {
            align-items: center;
          }

          .sb-name {
            font-size: 20px;
            white-space: normal;
            text-align: center;
          }

          .sb-second-name {
            font-size: 12.5px;
            color: hsl(330, 25%, 80%);
            font-weight: 500;
            line-height: 1.35;
            white-space: normal;
            text-align: center;
            margin-top: -3px;
            margin-bottom: 3px;
            max-width: 220px;
          }

          .sb-role-badge {
            text-align: center;
          }

          .sb-org {
            white-space: normal;
            text-align: center;
            font-size: 11.5px;
          }

          /* Hide toggle on desktop, always show panel */
          .sb-toggle-btn { display: none; }

          .sb-panel {
            max-height: none;
            overflow: visible;
            visibility: visible;
            transition: none;
          }
        }
      `}</style>
    </aside>
  );
}
