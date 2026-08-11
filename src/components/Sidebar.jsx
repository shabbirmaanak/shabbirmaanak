import React, { useState } from 'react';
import { Mail, Phone, Calendar, MapPin, Building, ChevronDown, ChevronUp, Linkedin, Instagram, Github, FileText } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

export default function Sidebar({ data, onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false);
  const personalInfo = data?.personalInfo || {};

  return (
    <aside className="vcard-sidebar-col">
      <div className={`sidebar ${isOpen ? 'sidebar-active' : ''}`}>
        {/* Profile Info Header */}
        <div className="sidebar-info">
          <figure className="avatar-box">
            <div className="avatar-img-wrap">
              <img 
                src={logoImg} 
                alt="Shabbir Maanak Emblem" 
                className="avatar-logo-img"
                loading="eager"
              />
            </div>
          </figure>

          <div className="info-content">
            <h1 className="name" title={personalInfo.name}>
              {personalInfo.name}
            </h1>
            <p className="title">{personalInfo.role}</p>
            <p className="sub-title">{personalInfo.organization}</p>
          </div>

          {/* Mobile Accordion Toggle */}
          <button 
            type="button"
            className="info_more-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Hide Contacts' : 'Show Contacts'}
            aria-expanded={isOpen}
          >
            <span>{isOpen ? 'Hide Contacts' : 'Show Contacts'}</span>
            {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>

        {/* Extended Contacts & Socials — collapsible on mobile, always visible on desktop */}
        <div className={`sidebar-info_more ${isOpen ? 'sidebar-info_more-open' : ''}`}>
          <div className="separator" />

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box"><Mail size={15} /></div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href={`mailto:${personalInfo.email}`} className="contact-link" title={personalInfo.email}>
                  {personalInfo.email}
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box"><Phone size={15} /></div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href={`tel:${personalInfo.phone ? personalInfo.phone.replace(/\s+/g, '') : ''}`} className="contact-link">
                  {personalInfo.phone}
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box"><Calendar size={15} /></div>
              <div className="contact-info">
                <p className="contact-title">Experience</p>
                <span className="contact-link">Since {personalInfo.experienceSince} (5+ Yrs)</span>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box"><Building size={15} /></div>
              <div className="contact-info">
                <p className="contact-title">Department</p>
                <span className="contact-link contact-wrap-text">
                  {personalInfo.department}
                </span>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box"><MapPin size={15} /></div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address className="contact-link contact-wrap-text">{personalInfo.location}</address>
              </div>
            </li>
          </ul>

          <div className="separator" />

          {/* Social Links */}
          <ul className="social-list">
            {personalInfo.linkedin && (
              <li className="social-item">
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
                  <Linkedin size={17} />
                </a>
              </li>
            )}
            {personalInfo.instagram && (
              <li className="social-item">
                <a href={personalInfo.instagram} target="_blank" rel="noreferrer" className="social-link" title="Instagram">
                  <Instagram size={17} />
                </a>
              </li>
            )}
            {personalInfo.github && (
              <li className="social-item">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-link" title="GitHub">
                  <Github size={17} />
                </a>
              </li>
            )}
            {personalInfo.email && (
              <li className="social-item">
                <a href={`mailto:${personalInfo.email}`} className="social-link" title="Send Email">
                  <Mail size={17} />
                </a>
              </li>
            )}
          </ul>

          {/* Resume Download */}
          <div className="sidebar-resume-action">
            <button 
              type="button" 
              onClick={onOpenResume} 
              className="sidebar-cv-btn"
            >
              <FileText size={14} />
              <span>Download CV (PDF)</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        /* ---- Sidebar Card ---- */
        .sidebar {
          overflow: hidden;
          transition: var(--transition-2);
        }

        /* ---- Profile Row ---- */
        .sidebar-info {
          position: relative;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        /* ---- Avatar Jewel Frame ---- */
        .avatar-box {
          background: linear-gradient(135deg, hsla(43, 96%, 64%, 0.5) 0%, hsla(348, 83%, 52%, 0.4) 100%);
          border-radius: 18px;
          padding: 3px;
          box-shadow: var(--shadow-1), 0 0 14px hsla(43, 96%, 64%, 0.18);
          flex-shrink: 0;
        }

        .avatar-img-wrap {
          width: 82px;
          height: 63px;
          border-radius: 15px;
          overflow: hidden;
          background: linear-gradient(135deg, #edf0f5 0%, #dfe3ea 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.08);
        }

        .avatar-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          transition: transform 0.3s ease;
        }

        .avatar-box:hover .avatar-logo-img {
          transform: scale(1.04);
        }

        /* ---- Name / Role / Org ---- */
        .info-content {
          flex: 1;
          min-width: 0;
        }

        .info-content .name {
          color: var(--white-2);
          font-size: clamp(15px, 3.5vw, 18px);
          font-weight: var(--fw-600);
          letter-spacing: -0.2px;
          margin-bottom: 5px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .info-content .title {
          color: var(--gold-primary);
          background: hsla(43, 96%, 64%, 0.08);
          border: 1px solid hsla(43, 96%, 64%, 0.2);
          font-size: 11px;
          font-weight: var(--fw-500);
          width: max-content;
          max-width: 100%;
          padding: 2px 10px;
          border-radius: 7px;
          margin-bottom: 3px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .info-content .sub-title {
          font-size: 10.5px;
          color: var(--ruby-glow);
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* ---- Mobile Toggle Button ---- */
        .info_more-btn {
          position: absolute;
          top: -4px;
          right: -4px;
          border-radius: 0 16px 0 10px;
          font-size: 11px;
          color: var(--gold-primary);
          background: var(--border-gradient-onyx);
          padding: 7px 10px;
          display: flex;
          align-items: center;
          gap: 5px;
          box-shadow: var(--shadow-2);
          transition: var(--transition-1);
          border: 1px solid hsla(43, 96%, 64%, 0.2);
          white-space: nowrap;
          /* Touch target minimum 44×44 */
          min-height: 36px;
        }

        .info_more-btn::before {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          background: var(--bg-gradient-jet);
          z-index: -1;
        }

        /* ---- Collapsible Panel ---- */
        .sidebar-info_more {
          max-height: 0;
          overflow: hidden;
          visibility: hidden;
          transition: max-height 0.45s ease, visibility 0s linear 0.45s;
        }

        .sidebar-info_more-open {
          max-height: 800px;
          visibility: visible;
          transition: max-height 0.45s ease, visibility 0s linear 0s;
        }

        /* ---- Contacts List ---- */
        .contacts-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .contact-item .icon-box {
          margin-top: 2px;
        }

        .contact-info {
          flex: 1;
          min-width: 0;
        }

        .contact-title {
          color: var(--light-gray-70);
          font-size: 10.5px;
          text-transform: uppercase;
          margin-bottom: 2px;
          letter-spacing: 0.3px;
        }

        .contact-link {
          color: var(--white-2);
          font-size: 12.5px;
          font-weight: var(--fw-400);
          display: block;
          font-style: normal;
          line-height: 1.4;
        }

        .contact-link.contact-wrap-text {
          white-space: normal;
          word-break: break-word;
        }

        .contact-link:not(.contact-wrap-text) {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .contact-link:hover {
          color: var(--gold-primary);
        }

        /* ---- Social Icons ---- */
        .social-list {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 14px;
          padding-bottom: 2px;
        }

        .social-link {
          color: var(--light-gray-70);
          font-size: 18px;
          transition: var(--transition-1);
          /* Bigger touch target */
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
        }

        .social-link:hover {
          color: var(--gold-primary);
          transform: translateY(-2px);
        }

        /* ---- Download CV ---- */
        .sidebar-resume-action {
          margin-top: 16px;
        }

        .sidebar-cv-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 10px 14px;
          border-radius: 12px;
          background: linear-gradient(135deg, hsla(43, 96%, 64%, 0.12) 0%, hsla(348, 83%, 52%, 0.12) 100%);
          border: 1px solid hsla(43, 96%, 64%, 0.35);
          color: var(--gold-primary);
          font-size: 13px;
          font-weight: 600;
          transition: var(--transition-1);
          box-shadow: var(--shadow-1);
          min-height: 44px;
        }

        .sidebar-cv-btn:hover {
          background: linear-gradient(135deg, hsla(43, 96%, 64%, 0.22) 0%, hsla(348, 83%, 52%, 0.22) 100%);
          border-color: var(--gold-primary);
          box-shadow: var(--shadow-gold-glow);
          transform: translateY(-2px);
        }

        /* ===========================
           DESKTOP SIDEBAR LAYOUT
           =========================== */
        @media (min-width: 1024px) {
          .sidebar-info {
            flex-direction: column;
            text-align: center;
            gap: 0;
          }

          .avatar-box {
            padding: 3.5px;
            border-radius: 22px;
            margin-bottom: 12px;
          }

          .avatar-img-wrap {
            width: 145px;
            height: 111px;
            border-radius: 19px;
          }

          .info-content .name {
            font-size: var(--fs-2);
            white-space: normal;
            text-align: center;
          }

          .info-content .title {
            margin: 0 auto 5px auto;
          }

          .info-content .sub-title {
            font-size: 11px;
            white-space: normal;
          }

          /* Always show contacts on desktop */
          .info_more-btn {
            display: none;
          }

          .sidebar-info_more {
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
