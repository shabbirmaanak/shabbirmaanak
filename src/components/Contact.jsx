import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, AlertTriangle, Sparkles, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { contactInfo, personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [lastSubmittedTime, setLastSubmittedTime] = useState(0);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please enter a brief message or project description.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters.';
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent duplicate accidental double submissions within 15 seconds
    const now = Date.now();
    if (now - lastSubmittedTime < 15000 && submitStatus === 'success') {
      alert('You have already submitted a message recently. Thank you!');
      return;
    }

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate reliable dispatch pipeline
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setLastSubmittedTime(Date.now());
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <MessageSquare size={13} />
            <span>Initiate Dialogue</span>
          </div>
          <h2 className="section-title">
            Let's Start a <span className="text-gold-gradient">Conversation</span>
          </h2>
          <p className="section-subtitle">
            {contactInfo.subheading}
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info & Social Cards */}
          <div className="contact-info-panel">
            <div className="glass-card contact-main-card">
              <h3 className="contact-panel-title">Direct Inquiries</h3>
              <p className="contact-panel-desc">
                Feel free to reach out directly via email, phone, or LinkedIn for consultation, project inquiries, or professional networking.
              </p>

              <div className="contact-channels-list">
                {/* Email */}
                <a href={`mailto:${contactInfo.email}`} className="contact-channel-item">
                  <div className="channel-icon-box">
                    <Mail size={20} className="text-gold" />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Email Address</span>
                    <span className="channel-value">{contactInfo.email}</span>
                  </div>
                </a>

                {/* Phone */}
                <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="contact-channel-item">
                  <div className="channel-icon-box">
                    <Phone size={20} className="text-gold" />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Direct Line</span>
                    <span className="channel-value">{contactInfo.phone}</span>
                  </div>
                </a>

                {/* Location */}
                <div className="contact-channel-item non-clickable">
                  <div className="channel-icon-box">
                    <MapPin size={20} className="text-gold" />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Location</span>
                    <span className="channel-value">{contactInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="contact-socials-block">
                <span className="socials-label">Professional Networks</span>
                <div className="socials-buttons-row">
                  <a 
                    href={personalInfo.linkedin} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="social-pill-btn"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href={personalInfo.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="social-pill-btn"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Availability Notice */}
              <div className="availability-notice">
                <div className="avail-indicator" />
                <span>{contactInfo.availability}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-panel">
            <div className="glass-card contact-form-card">
              <h3 className="form-card-title">Send a Direct Message</h3>
              <p className="form-card-sub">All submissions receive a response within 24–48 hours.</p>

              {/* Submission Status Alerts */}
              {submitStatus === 'success' && (
                <div className="form-alert success-alert" role="alert">
                  <CheckCircle2 size={20} className="alert-icon" />
                  <div className="alert-text">
                    <strong>Message sent successfully!</strong>
                    <span>Thank you for reaching out, Shabbir will review your note and respond promptly.</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-alert error-alert" role="alert">
                  <AlertTriangle size={20} className="alert-icon" />
                  <div className="alert-text">
                    <strong>Something went wrong.</strong>
                    <span>Please try again or contact me directly via <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="form-body">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="form-name" className="form-label">
                    Your Name <span className="req-star">*</span>
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Murtaza Jamali"
                    className={`form-input ${formErrors.name ? 'input-error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {formErrors.name && <span className="field-error-msg">{formErrors.name}</span>}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="form-email" className="form-label">
                    Email Address <span className="req-star">*</span>
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. name@organization.com"
                    className={`form-input ${formErrors.email ? 'input-error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {formErrors.email && <span className="field-error-msg">{formErrors.email}</span>}
                </div>

                {/* Subject */}
                <div className="form-group">
                  <label htmlFor="form-subject" className="form-label">
                    Subject / Project Context
                  </label>
                  <input
                    id="form-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Workflow Automation Collaboration"
                    className="form-input"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="form-message" className="form-label">
                    Message <span className="req-star">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share the details of your initiative, question, or proposal..."
                    className={`form-input form-textarea ${formErrors.message ? 'input-error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {formErrors.message && <span className="field-error-msg">{formErrors.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary form-submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <span className="submit-spinner" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: linear-gradient(180deg, rgba(8,9,13,0) 0%, rgba(14,18,27,0.7) 100%);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 2.5rem;
          align-items: start;
        }

        .contact-main-card {
          padding: 2.5rem 2.25rem;
        }

        .contact-panel-title {
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.6rem;
        }

        .contact-panel-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 2rem;
        }

        .contact-channels-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .contact-channel-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.25rem;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          transition: all var(--transition-fast);
        }

        .contact-channel-item:not(.non-clickable):hover {
          background: rgba(212, 175, 55, 0.08);
          border-color: var(--border-gold);
          transform: translateX(4px);
        }

        .channel-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .channel-details {
          display: flex;
          flex-direction: column;
        }

        .channel-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-muted);
          font-weight: 600;
        }

        .channel-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .contact-socials-block {
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-subtle);
          margin-bottom: 1.5rem;
        }

        .socials-label {
          display: block;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-muted);
          font-weight: 600;
          margin-bottom: 0.85rem;
        }

        .socials-buttons-row {
          display: flex;
          gap: 0.75rem;
        }

        .social-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }

        .social-pill-btn:hover {
          color: var(--gold-300);
          border-color: var(--border-gold);
          background: rgba(212, 175, 55, 0.1);
        }

        .availability-notice {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.82rem;
          color: #a1a1aa;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
        }

        .avail-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
        }

        /* Form Card */
        .contact-form-card {
          padding: 2.5rem 2.25rem;
        }

        .form-card-title {
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
        }

        .form-card-sub {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 1.75rem;
        }

        .form-alert {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 1rem 1.25rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.5rem;
          animation: fadeIn 0.3s ease;
        }

        .success-alert {
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.35);
          color: #a7f3d0;
        }

        .error-alert {
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.35);
          color: #fca5a5;
        }

        .alert-icon {
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .alert-text {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          font-size: 0.86rem;
        }

        .alert-text strong {
          color: #ffffff;
        }

        .alert-text a {
          color: var(--gold-300);
          text-decoration: underline;
        }

        .form-body {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-label {
          font-size: 0.84rem;
          font-weight: 600;
          color: #e2e8f0;
        }

        .req-star {
          color: var(--gold-400);
        }

        .form-input {
          width: 100%;
          padding: 0.85rem 1.1rem;
          background: rgba(8, 10, 16, 0.7);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.92rem;
          outline: none;
          transition: all var(--transition-fast);
        }

        .form-input:focus {
          border-color: var(--gold-400);
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.2);
          background: rgba(14, 18, 28, 0.9);
        }

        .form-input.input-error {
          border-color: #ef4444;
          background: rgba(239, 68, 68, 0.05);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .field-error-msg {
          font-size: 0.78rem;
          color: #f87171;
          font-weight: 500;
        }

        .form-submit-btn {
          margin-top: 0.75rem;
          width: 100%;
          padding: 0.95rem;
        }

        .submit-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(0, 0, 0, 0.3);
          border-top-color: #000000;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 960px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
