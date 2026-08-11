import React, { useState } from 'react';
import { Send, MapPin, CheckCircle2, AlertCircle, Phone, Mail, Linkedin, Instagram } from 'lucide-react';

export default function TabContact({ data }) {
  const personalInfo = data?.personalInfo || {};

  const [formData, setFormData] = useState({ fullname: '', email: '', subject: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const validate = () => {
    const errors = {};
    if (!formData.fullname.trim()) errors.fullname = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Date.now() - lastSubmitTime < 15000 && submitStatus === 'success') {
      alert('You already sent a message recently. Thank you!');
      return;
    }
    const errors = validate();
    if (Object.keys(errors).length > 0) { setFormErrors(errors); return; }
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 900));
      setSubmitStatus('success');
      setLastSubmitTime(Date.now());
      setFormData({ fullname: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article className="contact-tab tab-content-active">
      <header><h2 className="h2 article-title">Contact</h2></header>

      {/* Location card */}
      <section className="location-card">
        <div className="location-pin"><MapPin size={24} /></div>
        <h4 className="location-city">{personalInfo.location}</h4>
        <p className="location-meta">
          <span className="lm-org">{personalInfo.organization}</span>
          <span className="lm-sep">•</span>
          <span className="lm-dept">{personalInfo.department}</span>
        </p>
      </section>

      {/* Quick contact chips */}
      <div className="quick-contact-row">
        {personalInfo.phone && (
          <a href={`tel:${(personalInfo.phone||'').replace(/\s+/g,'')}`} className="quick-chip">
            <Phone size={14} /><span>{personalInfo.phone}</span>
          </a>
        )}
        {personalInfo.email && (
          <a href={`mailto:${personalInfo.email}`} className="quick-chip">
            <Mail size={14} /><span>{personalInfo.email}</span>
          </a>
        )}
        {personalInfo.linkedin && (
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="quick-chip">
            <Linkedin size={14} /><span>LinkedIn</span>
          </a>
        )}
        {personalInfo.instagram && (
          <a href={personalInfo.instagram} target="_blank" rel="noreferrer" className="quick-chip">
            <Instagram size={14} /><span>Instagram</span>
          </a>
        )}
      </div>

      {/* Contact Form */}
      <section className="contact-form-section">
        <h3 className="h3 form-section-title">Send a Message</h3>

        {submitStatus === 'success' && (
          <div className="form-alert alert-success">
            <CheckCircle2 size={16} />
            <span>Message sent! Thank you for reaching out.</span>
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="form-alert alert-error">
            <AlertCircle size={16} />
            <span>Something went wrong. Email me directly at <strong>{personalInfo.email}</strong>.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-field">
              <input
                type="text" name="fullname"
                className={`form-input ${formErrors.fullname ? 'err' : ''}`}
                placeholder="Full name *"
                value={formData.fullname}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              {formErrors.fullname && <span className="err-msg">{formErrors.fullname}</span>}
            </div>
            <div className="form-field">
              <input
                type="email" name="email"
                className={`form-input ${formErrors.email ? 'err' : ''}`}
                placeholder="Email address *"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              {formErrors.email && <span className="err-msg">{formErrors.email}</span>}
            </div>
          </div>

          <div className="form-field" style={{ marginBottom: '16px' }}>
            <input
              type="text" name="subject"
              className="form-input"
              placeholder="Subject (Optional)"
              value={formData.subject}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>

          <div className="form-field" style={{ marginBottom: '20px' }}>
            <textarea
              name="message"
              className={`form-input form-textarea ${formErrors.message ? 'err' : ''}`}
              placeholder="Your Message *"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            {formErrors.message && <span className="err-msg">{formErrors.message}</span>}
          </div>

          <button type="submit" className="form-submit-btn" disabled={isSubmitting}>
            <Send size={15} />
            <span>{isSubmitting ? 'Sending…' : 'Send Message'}</span>
          </button>
        </form>
      </section>

      <style>{`
        .contact-tab { display: block; }

        /* ── Location card ── */
        .location-card {
          border-radius: 16px;
          padding: 24px 18px;
          margin-bottom: 16px;
          text-align: center;
          background: linear-gradient(145deg, hsl(344, 32%, 13%) 0%, hsl(330, 20%, 10%) 100%);
          border: 1px solid hsla(348, 50%, 35%, 0.4);
          background-image:
            radial-gradient(circle at center, hsla(348, 70%, 35%, 0.15) 0%, transparent 65%),
            linear-gradient(to right, hsla(344, 20%, 20%, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, hsla(344, 20%, 20%, 0.08) 1px, transparent 1px);
          background-size: 100% 100%, 22px 22px, 22px 22px;
          position: relative;
          overflow: hidden;
        }

        .location-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, hsl(348, 83%, 52%), hsl(43, 96%, 64%), transparent);
        }

        .location-pin {
          color: hsl(348, 83%, 65%);
          display: flex;
          justify-content: center;
          margin-bottom: 8px;
          filter: drop-shadow(0 0 10px hsla(348, 83%, 52%, 0.5));
        }

        .location-city {
          font-size: clamp(15px, 3.5vw, 18px);
          color: hsl(330, 30%, 94%);
          font-weight: 700;
          margin-bottom: 6px;
        }

        .location-meta {
          font-size: 12.5px;
          color: hsla(330, 15%, 70%, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 6px;
        }

        .lm-org { color: hsl(43, 90%, 65%); font-weight: 500; }
        .lm-sep { color: hsla(348, 50%, 50%, 0.6); }
        .lm-dept { color: hsl(348, 75%, 65%); }

        /* ── Quick contact chips ── */
        .quick-contact-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .quick-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: 20px;
          font-size: 12.5px;
          font-weight: 500;
          background: linear-gradient(145deg, hsl(344, 32%, 13%) 0%, hsl(330, 20%, 10%) 100%);
          border: 1px solid hsla(348, 50%, 35%, 0.4);
          color: hsla(330, 15%, 78%, 0.85);
          transition: var(--ease-1);
          min-height: 36px;
        }

        .quick-chip:hover {
          border-color: hsl(43, 90%, 58%);
          color: hsl(43, 96%, 68%);
          background: linear-gradient(135deg, hsla(43, 80%, 40%, 0.15) 0%, hsla(348, 70%, 35%, 0.15) 100%);
          transform: translateY(-1px);
          box-shadow: 0 4px 14px hsla(348, 70%, 20%, 0.3);
        }

        /* ── Form section ── */
        .form-section-title { margin-bottom: 16px; }

        .form-alert {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 12px;
          font-size: 13px;
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .alert-success {
          background: hsla(140, 40%, 15%, 0.5);
          border: 1px solid hsla(140, 55%, 35%, 0.6);
          color: hsl(140, 60%, 70%);
        }

        .alert-error {
          background: hsla(0, 40%, 15%, 0.5);
          border: 1px solid hsla(0, 55%, 35%, 0.6);
          color: hsl(0, 70%, 72%);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-bottom: 14px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .form-input {
          color: hsl(330, 25%, 90%);
          font-size: 13.5px;
          font-weight: 400;
          padding: 12px 16px;
          border: 1px solid hsla(348, 50%, 35%, 0.4);
          border-radius: 12px;
          outline: none;
          background: linear-gradient(145deg, hsl(344, 32%, 12%) 0%, hsl(330, 20%, 9%) 100%);
          transition: border-color var(--ease-1), box-shadow var(--ease-1);
        }

        .form-input::placeholder { color: hsla(330, 12%, 55%, 0.6); }

        .form-input:focus {
          border-color: hsl(43, 90%, 58%);
          box-shadow: 0 0 0 3px hsla(43, 96%, 64%, 0.12);
        }

        .form-input.err { border-color: hsl(0, 80%, 60%); }

        .form-textarea { resize: vertical; min-height: 110px; }

        .err-msg {
          font-size: 11.5px;
          color: hsl(0, 80%, 68%);
          padding-left: 4px;
        }

        .form-submit-btn {
          position: relative;
          width: 100%;
          background: linear-gradient(135deg, hsl(348, 70%, 38%) 0%, hsl(320, 65%, 32%) 100%);
          border: 1px solid hsla(348, 70%, 50%, 0.6);
          color: hsl(330, 30%, 96%);
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          padding: 13px 24px;
          border-radius: 12px;
          font-size: 13.5px;
          font-weight: 700;
          letter-spacing: 0.02em;
          transition: var(--ease-1);
          min-height: 48px;
          box-shadow: 0 4px 20px hsla(348, 70%, 30%, 0.3);
        }

        .form-submit-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, hsl(348, 75%, 45%) 0%, hsl(43, 80%, 48%) 100%);
          border-color: hsl(43, 90%, 65%);
          box-shadow: 0 6px 28px hsla(348, 70%, 35%, 0.5), var(--shadow-gold);
          transform: translateY(-2px);
          color: #fff;
        }

        .form-submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (min-width: 640px) {
          .form-row { grid-template-columns: 1fr 1fr; }
          .form-submit-btn {
            width: auto;
            min-width: 180px;
            margin-left: auto;
          }
        }

        @media (min-width: 1024px) {
          .location-card { padding: 30px 24px; }
        }
      `}</style>
    </article>
  );
}
