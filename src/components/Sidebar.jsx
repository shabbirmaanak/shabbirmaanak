import React, { useState } from 'react';
import { Mail, Phone, Calendar, MapPin, Building, ChevronDown, ChevronUp, Linkedin, Instagram, Github, FileText } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

export default function Sidebar({ data, onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false);
  const personalInfo = data?.personalInfo || {};

  return (
    <aside className="vcard-sidebar-col">
      <div className={`sidebar ${isOpen ? 'active' : ''}`}>
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
          >
            <span>{isOpen ? 'Hide Contacts' : 'Show Contacts'}</span>
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {/* Extended Contacts & Socials */}
        <div className="sidebar-info_more">
          <div className="separator" />

          <ul className="contacts-list">
            {/* Email */}
            <li className="contact-item">
              <div className="icon-box">
                <Mail size={16} />
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href={`mailto:${personalInfo.email}`} className="contact-link" title={personalInfo.email}>
                  {personalInfo.email}
                </a>
              </div>
            </li>

            {/* Phone */}
            <li className="contact-item">
              <div className="icon-box">
                <Phone size={16} />
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href={`tel:${personalInfo.phone ? personalInfo.phone.replace(/\s+/g, '') : ''}`} className="contact-link">
                  {personalInfo.phone}
                </a>
              </div>
            </li>

            {/* Experience Since */}
            <li className="contact-item">
              <div className="icon-box">
                <Calendar size={16} />
              </div>
              <div className="contact-info">
                <p className="contact-title">Experience</p>
                <span className="contact-link">Since {personalInfo.experienceSince} (5+ Yrs)</span>
              </div>
            </li>

            {/* Department */}
            <li className="contact-item">
              <div className="icon-box">
                <Building size={16} />
              </div>
              <div className="contact-info">
                <p className="contact-title">Department</p>
                <span className="contact-link contact-wrap-text">
                  {personalInfo.department}
                </span>
              </div>
            </li>

            {/* Location */}
            <li className="contact-item">
              <div className="icon-box">
                <MapPin size={16} />
              </div>
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

          {/* Resume Download Action */}
          <div className="sidebar-resume-action">
            <button 
              type="button" 
              onClick={onOpenResume} 
              className="sidebar-cv-btn"
            >
              <FileText size={15} />
              <span>Download CV (PDF)</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .sidebar {
          transition: var(--transition-2);
          overflow: hidden;
        }

        .sidebar-info {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .avatar-box {
          background: linear-gradient(135deg, hsla(43, 96%, 64%, 0.5) 0%, hsla(348, 83%, 52%, 0.4) 100%);
          border-radius: 20px;
          padding: 3px;
          box-shadow: var(--shadow-1), 0 0 16px hsla(43, 96%, 64%, 0.2);
          flex-shrink: 0;
        }

        .avatar-img-wrap {
          width: 98px;
          height: 75px;
          border-radius: 17px;
          overflow: hidden;
          background: #dfe3ea;
          background-image: linear-gradient(135deg, #edf0f5 0%, #dfe3ea 100%);
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
          transform: scale(1.05);
        }

        .info-content {
          flex: 1;
          min-width: 0;
        }

        .info-content .name {
          color: var(--white-2);
          font-size: var(--fs-3);
          font-weight: var(--fw-600);
          letter-spacing: -0.2px;
          margin-bottom: 6px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .info-content .title {
          color: var(--gold-primary);
          background: hsla(43, 96%, 64%, 0.08);
          border: 1px solid hsla(43, 96%, 64%, 0.2);
          font-size: var(--fs-8);
          font-weight: var(--fw-500);
          width: max-content;
          padding: 3px 12px;
          border-radius: 8px;
          margin-bottom: 4px;
        }

        .info-content .sub-title {
          font-size: 11px;
          color: var(--ruby-glow);
          font-weight: 500;
        }

        .info_more-btn {
          position: absolute;
          top: -4px;
          right: -4px;
          border-radius: 0 16px;
          font-size: var(--fs-7);
          color: var(--gold-primary);
          background: var(--border-gradient-onyx);
          padding: 8px 12px;
          display: none;
          align-items: center;
          gap: 6px;
          box-shadow: var(--shadow-2);
          transition: var(--transition-1);
          z-index: 1;
        }

        .info_more-btn::before {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          background: var(--bg-gradient-jet);
          transition: var(--transition-1);
          z-index: -1;
        }

        .contacts-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .contact-item .icon-box {
          margin-top: 2px;
          flex-shrink: 0;
        }

        .contact-info {
          flex: 1;
          min-width: 0;
        }

        .contact-title {
          color: var(--light-gray-70);
          font-size: var(--fs-8);
          text-transform: uppercase;
          margin-bottom: 3px;
          letter-spacing: 0.3px;
        }

        .contact-link {
          color: var(--white-2);
          font-size: var(--fs-7);
          font-weight: var(--fw-400);
          display: block;
          font-style: normal;
          line-height: 1.45;
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

        .social-list {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          padding-bottom: 4px;
        }

        .social-link {
          color: var(--light-gray-70);
          font-size: 18px;
          transition: var(--transition-1);
        }

        .social-link:hover {
          color: var(--gold-primary);
          transform: translateY(-2px);
        }

        .sidebar-resume-action {
          margin-top: 18px;
        }

        .sidebar-cv-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 12px;
          background: linear-gradient(135deg, hsla(43, 96%, 64%, 0.12) 0%, hsla(348, 83%, 52%, 0.12) 100%);
          border: 1px solid hsla(43, 96%, 64%, 0.35);
          color: var(--gold-primary);
          font-size: 13px;
          font-weight: 600;
          transition: var(--transition-1);
          box-shadow: var(--shadow-1);
        }

        .sidebar-cv-btn:hover {
          background: linear-gradient(135deg, hsla(43, 96%, 64%, 0.22) 0%, hsla(348, 83%, 52%, 0.22) 100%);
          border-color: var(--gold-primary);
          box-shadow: var(--shadow-gold-glow);
          transform: translateY(-2px);
        }

        /* Desktop Sidebar View */
        @media (min-width: 1024px) {
          .sidebar-info {
            flex-direction: column;
            text-align: center;
          }

          .avatar-box {
            padding: 3.5px;
            border-radius: 22px;
            margin-bottom: 8px;
          }

          .avatar-img-wrap {
            width: 145px;
            height: 111px;
            border-radius: 19px;
          }

          .info-content .name {
            font-size: var(--fs-2);
            white-space: normal;
          }

          .info-content .title {
            margin: 0 auto 6px auto;
          }

          .sidebar-info_more {
            opacity: 1;
            visibility: visible;
          }
        }

        /* Mobile & Tablet Toggle */
        @media (max-width: 1023px) {
          .sidebar {
            max-height: 120px;
          }

          .sidebar.active {
            max-height: 600px;
          }

          .info_more-btn {
            display: flex;
          }

          .sidebar-info_more {
            opacity: 0;
            visibility: hidden;
            transition: var(--transition-2);
          }

          .sidebar.active .sidebar-info_more {
            opacity: 1;
            visibility: visible;
          }
        }
      `}</style>
    </aside>
  );
}
