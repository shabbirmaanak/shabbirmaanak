import React, { useState } from 'react';
import { Send, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

export default function TabContact({ data }) {
  const personalInfo = data?.personalInfo || {};

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const validate = () => {
    const errors = {};
    if (!formData.fullname.trim()) errors.fullname = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
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

    const now = Date.now();
    if (now - lastSubmitTime < 15000 && submitStatus === 'success') {
      alert('You have already sent a message recently. Thank you!');
      return;
    }

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 900));
      setSubmitStatus('success');
      setLastSubmitTime(Date.now());
      setFormData({ fullname: '', email: '', subject: '', message: '' });
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article className="contact-tab tab-content-active">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      {/* Mapbox / Location Card */}
      <section className="mapbox">
        <figure className="map-visual-box">
          <div className="map-overlay-content">
            <div className="map-pin-icon">
              <MapPin size={26} />
            </div>
            <h4>{personalInfo.location}</h4>
            <p><span className="text-gold">{personalInfo.organization}</span> • <span className="text-ruby">{personalInfo.department}</span></p>
          </div>
        </figure>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h3 className="h3 form-title">Contact Form</h3>

        {/* Feedback Alert */}
        {submitStatus === 'success' && (
          <div className="vcard-alert vcard-alert-success">
            <CheckCircle2 size={18} />
            <span>Message sent successfully! Thank you for reaching out.</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="vcard-alert vcard-alert-error">
            <AlertCircle size={18} />
            <span>Something went wrong. Please email directly at {personalInfo.email}.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="vcard-form">
          <div className="input-wrapper">
            <div className="form-item">
              <input
                type="text"
                name="fullname"
                className={`form-input ${formErrors.fullname ? 'error' : ''}`}
                placeholder="Full name *"
                value={formData.fullname}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              {formErrors.fullname && <span className="err-text">{formErrors.fullname}</span>}
            </div>

            <div className="form-item">
              <input
                type="email"
                name="email"
                className={`form-input ${formErrors.email ? 'error' : ''}`}
                placeholder="Email address *"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              {formErrors.email && <span className="err-text">{formErrors.email}</span>}
            </div>
          </div>

          <div className="form-item" style={{ marginBottom: '25px' }}>
            <input
              type="text"
              name="subject"
              className="form-input"
              placeholder="Subject (Optional)"
              value={formData.subject}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>

          <div className="form-item" style={{ marginBottom: '25px' }}>
            <textarea
              name="message"
              className={`form-input form-textarea ${formErrors.message ? 'error' : ''}`}
              placeholder="Your Message *"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            {formErrors.message && <span className="err-text">{formErrors.message}</span>}
          </div>

          <button 
            type="submit" 
            className="form-btn" 
            disabled={isSubmitting}
          >
            <Send size={16} />
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
      </section>

      <style>{`
        .contact-tab {
          display: block;
        }

        .mapbox {
          position: relative;
          height: 220px;
          width: 100%;
          border-radius: 16px;
          margin-bottom: 30px;
          border: 1px solid var(--jet);
          overflow: hidden;
          background: linear-gradient(135deg, hsl(232, 18%, 14%) 0%, hsl(232, 20%, 9%) 100%);
        }

        .map-visual-box {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          background-image: 
            radial-gradient(circle at center, hsla(348, 83%, 52%, 0.1) 0%, transparent 70%),
            linear-gradient(to right, hsla(232, 10%, 25%, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsla(232, 10%, 25%, 0.1) 1px, transparent 1px);
          background-size: 100% 100%, 20px 20px, 20px 20px;
        }

        .map-pin-icon {
          color: var(--ruby-glow);
          display: flex;
          justify-content: center;
          margin-bottom: 8px;
          filter: drop-shadow(0 0 8px hsla(348, 83%, 52%, 0.4));
        }

        .map-overlay-content h4 {
          font-size: var(--fs-3);
          color: var(--white-2);
          margin-bottom: 4px;
        }

        .map-overlay-content p {
          font-size: var(--fs-7);
          color: var(--light-gray);
        }

        .text-gold {
          color: var(--gold-primary);
          font-weight: 500;
        }

        .text-ruby {
          color: var(--ruby-glow);
          font-weight: 500;
        }

        .form-title {
          margin-bottom: 20px;
        }

        .vcard-alert {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: var(--fs-6);
          margin-bottom: 20px;
        }

        .vcard-alert-success {
          background: hsla(140, 50%, 20%, 0.4);
          border: 1px solid hsla(140, 60%, 40%, 0.6);
          color: hsl(140, 70%, 75%);
        }

        .vcard-alert-error {
          background: hsla(0, 50%, 20%, 0.4);
          border: 1px solid hsla(0, 60%, 40%, 0.6);
          color: hsl(0, 70%, 75%);
        }

        .input-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 25px;
          margin-bottom: 25px;
        }

        .form-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .form-input {
          color: var(--white-2);
          font-size: var(--fs-6);
          font-weight: var(--fw-400);
          padding: 13px 20px;
          border: 1px solid var(--jet);
          border-radius: 14px;
          outline: none;
          background: var(--eerie-black-1);
          transition: border-color var(--transition-1);
        }

        .form-input:focus {
          border-color: var(--gold-primary);
          box-shadow: 0 0 10px hsla(43, 96%, 64%, 0.15);
        }

        .form-input.error {
          border-color: #ef4444;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .err-text {
          font-size: 11px;
          color: #f87171;
          padding-left: 4px;
        }

        .form-btn {
          position: relative;
          width: 100%;
          background: linear-gradient(135deg, hsla(43, 96%, 64%, 0.2) 0%, hsla(348, 83%, 52%, 0.2) 100%);
          border: 1px solid hsla(43, 96%, 64%, 0.4);
          color: var(--gold-primary);
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          padding: 13px 24px;
          border-radius: 14px;
          font-size: var(--fs-6);
          font-weight: var(--fw-600);
          text-transform: capitalize;
          box-shadow: var(--shadow-3);
          z-index: 1;
          transition: var(--transition-1);
        }

        .form-btn:hover {
          background: linear-gradient(135deg, hsl(43, 96%, 64%) 0%, hsl(348, 83%, 52%) 100%);
          color: #0b0d14;
          box-shadow: 0 0 20px hsla(348, 83%, 52%, 0.4);
          transform: translateY(-2px);
        }

        @media (min-width: 768px) {
          .input-wrapper {
            grid-template-columns: 1fr 1fr;
          }
          .form-btn {
            width: max-content;
            margin-left: auto;
          }
        }
      `}</style>
    </article>
  );
}
