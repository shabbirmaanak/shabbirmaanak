import React, { useState } from 'react';
import { 
  Sliders, User, Briefcase, FolderGit2, Wrench, Layers, 
  GraduationCap, Quote, Save, RotateCcw, Download, Upload, 
  Eye, Plus, Trash2, CheckCircle2, Sparkles, AlertCircle, X, Check, Loader2, ExternalLink, Camera
} from 'lucide-react';
import logoImg from '../../assets/logo.jpg';
import { defaultPortfolioData, savePortfolioData, resetPortfolioData } from '../../data/portfolioData';

export default function AdminDashboard({ data, onUpdateData, onExitAdmin }) {
  const [activeSection, setActiveSection] = useState('personal');
  const [localData, setLocalData] = useState(JSON.parse(JSON.stringify(data)));
  const [saveToast, setSaveToast] = useState(null); // null | 'saving' | 'success' | 'error'
  const [jsonModalOpen, setJsonModalOpen] = useState(false);
  const [jsonMode, setJsonMode] = useState('export');
  const [importJsonText, setImportJsonText] = useState('');
  const [importError, setImportError] = useState('');
  const [editingProjectIndex, setEditingProjectIndex] = useState(null);

  // Save changes (async to Supabase)
  const handleSave = async () => {
    setSaveToast('saving');
    try {
      await savePortfolioData(localData);
      onUpdateData(localData);
      setSaveToast('success');
      setTimeout(() => setSaveToast(null), 3000);
    } catch (err) {
      console.error('Save failed:', err);
      // Keep in-memory app state updated so edits reflect in the current session
      onUpdateData(localData);
      setSaveToast('error');
      setTimeout(() => setSaveToast(null), 6000);
    }
  };

  // Reset to default (async)
  const handleReset = async () => {
    if (window.confirm('Are you sure you want to reset all portfolio data back to default? All custom edits will be reverted.')) {
      setSaveToast('saving');
      try {
        const reset = await resetPortfolioData();
        setLocalData(JSON.parse(JSON.stringify(reset)));
        onUpdateData(reset);
        setSaveToast('success');
        setTimeout(() => setSaveToast(null), 3000);
      } catch (err) {
        console.error('Reset failed:', err);
        setSaveToast('error');
        setTimeout(() => setSaveToast(null), 4000);
      }
    }
  };

  // Import JSON handler
  const handleImport = async () => {
    try {
      setImportError('');
      const parsed = JSON.parse(importJsonText);
      const merged = { ...defaultPortfolioData, ...parsed };
      setLocalData(merged);
      await savePortfolioData(merged);
      onUpdateData(merged);
      setJsonModalOpen(false);
      setSaveToast('success');
      setTimeout(() => setSaveToast(null), 3000);
    } catch (e) {
      setImportError('Error: ' + e.message);
    }
  };

  // Generic updater
  const updateField = (path, value) => {
    setLocalData(prev => {
      const clone = JSON.parse(JSON.stringify(prev));
      const keys = path.split('.');
      let cur = clone;
      for (let i = 0; i < keys.length - 1; i++) {
        if (!cur[keys[i]]) cur[keys[i]] = {};
        cur = cur[keys[i]];
      }
      cur[keys[keys.length - 1]] = value;
      return clone;
    });
  };

  // Upload, optimize, and resize profile photo
  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new window.Image();
      img.onload = () => {
        const maxDim = 500;
        let width = img.width;
        let height = img.height;
        if (width > height) {
          if (width > maxDim) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          }
        } else {
          if (height > maxDim) {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', 0.88);
        updateField('personalInfo.avatarUrl', dataUrl);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="cms-wrapper">
      {/* Top CMS Header */}
      <header className="cms-topbar">
        <div className="cms-brand-left">
          <div className="cms-logo-badge">
            <span>CMS</span>
          </div>
          <div>
            <h1 className="cms-title">Shabbir Maanak — Portfolio CMS</h1>
            <span className="cms-status-tag">
              <span className="cms-status-dot" /> Live Instant Edit Mode
            </span>
          </div>
        </div>

        <div className="cms-actions-right">
          <button 
            type="button" 
            onClick={() => { setJsonMode('export'); setJsonModalOpen(true); }}
            className="cms-btn-subtle"
            title="Export / Download JSON Configuration"
          >
            <Download size={15} />
            <span>Export JSON</span>
          </button>

          <button 
            type="button" 
            onClick={() => { setJsonMode('import'); setImportJsonText(''); setImportError(''); setJsonModalOpen(true); }}
            className="cms-btn-subtle"
            title="Import JSON Configuration"
          >
            <Upload size={15} />
            <span>Import JSON</span>
          </button>

          <button 
            type="button" 
            onClick={handleReset}
            className="cms-btn-danger"
            title="Reset to default original data"
          >
            <RotateCcw size={15} />
            <span>Reset</span>
          </button>

          <button 
            type="button" 
            onClick={handleSave}
            className="cms-btn-save"
          >
            <Save size={16} />
            <span>Save Changes</span>
          </button>

          <button 
            type="button" 
            onClick={onExitAdmin}
            className="cms-btn-preview"
          >
            <Eye size={16} />
            <span>View Portfolio</span>
          </button>
        </div>
      </header>

      {/* Save Toast */}
      {saveToast && (
        <div className={`cms-toast ${saveToast === 'error' ? 'cms-toast-error' : ''}`} role="alert">
          {saveToast === 'saving' && <><Loader2 size={18} className="spin-icon" /><span>Saving to database…</span></>}
          {saveToast === 'success' && <><CheckCircle2 size={18} /><span>Changes saved to Supabase!</span></>}
          {saveToast === 'error' && (
            <>
              <AlertCircle size={18} />
              <div>
                <div><strong>Save failed:</strong> Database unreachable.</div>
                <div style={{ fontSize: '11px', opacity: 0.9, marginTop: '2px', fontWeight: 'normal' }}>
                  Supabase project may be paused. Visit supabase.com/dashboard to restore it.
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* CMS Main Body */}
      <div className="cms-layout-grid">
        {/* Left Sidebar Menu */}
        <aside className="cms-nav-sidebar">
          <ul className="cms-nav-list">
            <li>
              <button
                type="button"
                className={`cms-nav-btn ${activeSection === 'personal' ? 'active' : ''}`}
                onClick={() => setActiveSection('personal')}
              >
                <User size={18} />
                <span>Profile & Contact</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`cms-nav-btn ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => { setActiveSection('projects'); setEditingProjectIndex(null); }}
              >
                <FolderGit2 size={18} />
                <span>Case Studies & Projects ({localData.projects.length})</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`cms-nav-btn ${activeSection === 'experience' ? 'active' : ''}`}
                onClick={() => setActiveSection('experience')}
              >
                <Briefcase size={18} />
                <span>Experience & Pillars</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`cms-nav-btn ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={() => setActiveSection('skills')}
              >
                <Wrench size={18} />
                <span>Skills Matrix ({localData.skills.length})</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`cms-nav-btn ${activeSection === 'services' ? 'active' : ''}`}
                onClick={() => setActiveSection('services')}
              >
                <Layers size={18} />
                <span>What I Do Pillars ({localData.whatIDo.length})</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`cms-nav-btn ${activeSection === 'education' ? 'active' : ''}`}
                onClick={() => setActiveSection('education')}
              >
                <GraduationCap size={18} />
                <span>Education Timeline ({localData.education.length})</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`cms-nav-btn ${activeSection === 'philosophy' ? 'active' : ''}`}
                onClick={() => setActiveSection('philosophy')}
              >
                <Quote size={18} />
                <span>Philosophy & Ethos</span>
              </button>
            </li>
          </ul>
        </aside>

        {/* Right Editor Area */}
        <main className="cms-editor-panel">
          {/* SECTION 1: Personal & Contact */}
          {activeSection === 'personal' && (
            <div className="cms-section-card">
              <h2 className="cms-section-title">Personal Identity & Contact Information</h2>
              <p className="cms-section-subtitle">Manage your profile photo, primary brand positioning, contact details, bio, and social channels.</p>

              {/* Profile Photo / Avatar Editor */}
              <div className="cms-avatar-uploader-card">
                <div className="cms-avatar-preview-wrap">
                  <img
                    src={localData.personalInfo.avatarUrl || logoImg}
                    alt="Profile Preview"
                    className="cms-avatar-preview-img"
                  />
                  <div className="cms-avatar-badge">
                    <Camera size={14} />
                  </div>
                </div>

                <div className="cms-avatar-controls">
                  <h4 className="cms-avatar-title">Profile Photo / Brand Monogram</h4>
                  <p className="cms-avatar-hint">
                    Upload your headshot or custom monogram logo. Automatically resized and optimized.
                  </p>

                  <div className="cms-avatar-btn-row">
                    <label className="cms-btn-upload-photo">
                      <Upload size={14} />
                      <span>Upload New Photo</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        style={{ display: 'none' }}
                      />
                    </label>

                    {localData.personalInfo.avatarUrl && (
                      <button
                        type="button"
                        onClick={() => updateField('personalInfo.avatarUrl', '')}
                        className="cms-btn-subtle"
                        title="Revert to original default monogram logo"
                      >
                        <RotateCcw size={13} />
                        <span>Reset to Monogram</span>
                      </button>
                    )}
                  </div>

                  <div className="cms-field" style={{ marginTop: '12px' }}>
                    <label style={{ fontSize: '11px' }}>Or Paste an Image URL</label>
                    <input
                      type="url"
                      placeholder="https://example.com/photo.jpg"
                      value={localData.personalInfo.avatarUrl || ''}
                      onChange={(e) => updateField('personalInfo.avatarUrl', e.target.value)}
                      style={{ fontSize: '12px', padding: '6px 10px' }}
                    />
                  </div>
                </div>
              </div>

              <div className="cms-form-grid">
                <div className="cms-field">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Shabbir Mustafa Heera"
                    value={localData.personalInfo.name}
                    onChange={(e) => updateField('personalInfo.name', e.target.value)}
                  />
                </div>

                <div className="cms-field">
                  <label>Second Name / Honorific Name (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. (Mulla Shabbir Shk Mustafa bh Maanak)"
                    value={localData.personalInfo.secondName || ''}
                    onChange={(e) => updateField('personalInfo.secondName', e.target.value)}
                  />
                </div>

                <div className="cms-field">
                  <label>Primary Role Title</label>
                  <input
                    type="text"
                    value={localData.personalInfo.role}
                    onChange={(e) => updateField('personalInfo.role', e.target.value)}
                  />
                </div>

                <div className="cms-field">
                  <label>Organization</label>
                  <input
                    type="text"
                    value={localData.personalInfo.organization}
                    onChange={(e) => updateField('personalInfo.organization', e.target.value)}
                  />
                </div>

                <div className="cms-field">
                  <label>Department</label>
                  <input
                    type="text"
                    value={localData.personalInfo.department}
                    onChange={(e) => updateField('personalInfo.department', e.target.value)}
                  />
                </div>

                <div className="cms-field">
                  <label>Experience Since (Year)</label>
                  <input
                    type="text"
                    value={localData.personalInfo.experienceSince}
                    onChange={(e) => updateField('personalInfo.experienceSince', e.target.value)}
                  />
                </div>

                <div className="cms-field">
                  <label>Professional Positioning Tagline</label>
                  <input
                    type="text"
                    value={localData.personalInfo.positioning}
                    onChange={(e) => updateField('personalInfo.positioning', e.target.value)}
                  />
                </div>

                <div className="cms-field full-width">
                  <label>Core Hero Statement / Tagline</label>
                  <input
                    type="text"
                    value={localData.personalInfo.tagline}
                    onChange={(e) => updateField('personalInfo.tagline', e.target.value)}
                  />
                </div>

                <div className="cms-field full-width">
                  <label>Biography & Summary</label>
                  <textarea
                    rows="4"
                    value={localData.personalInfo.bio}
                    onChange={(e) => updateField('personalInfo.bio', e.target.value)}
                  />
                </div>

                <div className="cms-field">
                  <label>Email Address</label>
                  <input
                    type="email"
                    value={localData.personalInfo.email}
                    onChange={(e) => updateField('personalInfo.email', e.target.value)}
                  />
                </div>

                <div className="cms-field">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    value={localData.personalInfo.phone}
                    onChange={(e) => updateField('personalInfo.phone', e.target.value)}
                  />
                </div>

                <div className="cms-field">
                  <label>Location (City, Country)</label>
                  <input
                    type="text"
                    value={localData.personalInfo.location}
                    onChange={(e) => updateField('personalInfo.location', e.target.value)}
                  />
                </div>

                <div className="cms-field">
                  <label>LinkedIn URL</label>
                  <input
                    type="text"
                    value={localData.personalInfo.linkedin || ''}
                    onChange={(e) => updateField('personalInfo.linkedin', e.target.value)}
                  />
                </div>

                <div className="cms-field">
                  <label>Instagram URL</label>
                  <input
                    type="text"
                    value={localData.personalInfo.instagram || ''}
                    placeholder="https://instagram.com/yourusername"
                    onChange={(e) => updateField('personalInfo.instagram', e.target.value)}
                  />
                </div>

                <div className="cms-field">
                  <label>GitHub URL</label>
                  <input
                    type="text"
                    value={localData.personalInfo.github || ''}
                    onChange={(e) => updateField('personalInfo.github', e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* SECTION 2: Projects & Case Studies */}
          {activeSection === 'projects' && (
            <div className="cms-section-card">
              <div className="cms-card-header-row">
                <div>
                  <h2 className="cms-section-title">Case Studies & Projects Portfolio</h2>
                  <p className="cms-section-subtitle">Add, edit, or remove project case studies with full problem-solving metrics.</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newProj = {
                      id: `project-${Date.now()}`,
                      title: "New Case Study Project",
                      projectUrl: "",
                      category: "multimedia",
                      categoryLabel: "Multimedia Campaigns",
                      featured: false,
                      thumbnailGradient: "linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #312e81 100%)",
                      accentColor: "#d4af37",
                      shortDesc: "Brief description of the project outcome and core deliverables.",
                      role: "Lead Coordinator",
                      tools: ["Photoshop", "Illustrator", "Premiere Pro"],
                      outcome: "Measurable key impact and results delivered.",
                      overview: "Comprehensive overview of the initiative.",
                      problem: "Detailed problem description.",
                      approach: "Strategic approach and technical implementation.",
                      result: "Tangible operational result.",
                      impact: "Long-term organizational impact."
                    };
                    const updated = [newProj, ...localData.projects];
                    updateField('projects', updated);
                    setEditingProjectIndex(0);
                  }}
                  className="cms-btn-add"
                >
                  <Plus size={16} />
                  <span>Add New Project</span>
                </button>
              </div>

              {editingProjectIndex !== null && localData.projects[editingProjectIndex] ? (
                /* Project Edit Subform */
                <div className="cms-sub-editor">
                  <div className="cms-sub-header">
                    <h3>Editing: {localData.projects[editingProjectIndex].title}</h3>
                    <button 
                      type="button" 
                      onClick={() => setEditingProjectIndex(null)}
                      className="cms-btn-subtle"
                    >
                      <Check size={14} /> Done Editing
                    </button>
                  </div>

                  <div className="cms-form-grid">
                    <div className="cms-field full-width">
                      <label>Project Title</label>
                      <input
                        type="text"
                        value={localData.projects[editingProjectIndex].title}
                        onChange={(e) => {
                          const updated = [...localData.projects];
                          updated[editingProjectIndex].title = e.target.value;
                          updateField('projects', updated);
                        }}
                      />
                    </div>

                    <div className="cms-field">
                      <label>Category Key (multimedia | automation | research | design | tech)</label>
                      <input
                        type="text"
                        value={localData.projects[editingProjectIndex].category}
                        onChange={(e) => {
                          const updated = [...localData.projects];
                          updated[editingProjectIndex].category = e.target.value;
                          updateField('projects', updated);
                        }}
                      />
                    </div>

                    <div className="cms-field">
                      <label>Category Display Label</label>
                      <input
                        type="text"
                        value={localData.projects[editingProjectIndex].categoryLabel}
                        onChange={(e) => {
                          const updated = [...localData.projects];
                          updated[editingProjectIndex].categoryLabel = e.target.value;
                          updateField('projects', updated);
                        }}
                      />
                    </div>

                    <div className="cms-field">
                      <label>Role</label>
                      <input
                        type="text"
                        value={localData.projects[editingProjectIndex].role}
                        onChange={(e) => {
                          const updated = [...localData.projects];
                          updated[editingProjectIndex].role = e.target.value;
                          updateField('projects', updated);
                        }}
                      />
                    </div>

                    <div className="cms-field">
                      <label>Featured Project?</label>
                      <select
                        value={localData.projects[editingProjectIndex].featured ? 'true' : 'false'}
                        onChange={(e) => {
                          const updated = [...localData.projects];
                          updated[editingProjectIndex].featured = e.target.value === 'true';
                          updateField('projects', updated);
                        }}
                        className="cms-select"
                      >
                        <option value="true">Yes (Featured Badge)</option>
                        <option value="false">No (Standard)</option>
                      </select>
                    </div>

                    <div className="cms-field full-width">
                      <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <ExternalLink size={14} style={{ color: 'var(--gold-primary)' }} />
                        <span>Project Redirect Link / Live URL (Optional)</span>
                      </label>
                      <input
                        type="url"
                        placeholder="e.g. https://github.com/... or https://your-live-demo.com"
                        value={localData.projects[editingProjectIndex].projectUrl || ''}
                        onChange={(e) => {
                          const updated = [...localData.projects];
                          updated[editingProjectIndex].projectUrl = e.target.value;
                          updateField('projects', updated);
                        }}
                      />
                      <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '4px', display: 'block' }}>
                        When set, viewers can click to redirect directly to this live page or demo.
                      </span>
                    </div>

                    <div className="cms-field full-width">
                      <label>Short Summary / Card Description</label>
                      <input
                        type="text"
                        value={localData.projects[editingProjectIndex].shortDesc}
                        onChange={(e) => {
                          const updated = [...localData.projects];
                          updated[editingProjectIndex].shortDesc = e.target.value;
                          updateField('projects', updated);
                        }}
                      />
                    </div>

                    <div className="cms-field full-width">
                      <label>Primary Outcome & Key Result Preview</label>
                      <input
                        type="text"
                        value={localData.projects[editingProjectIndex].outcome}
                        onChange={(e) => {
                          const updated = [...localData.projects];
                          updated[editingProjectIndex].outcome = e.target.value;
                          updateField('projects', updated);
                        }}
                      />
                    </div>

                    <div className="cms-field full-width">
                      <label>Tools & Technologies (Comma-separated)</label>
                      <input
                        type="text"
                        value={localData.projects[editingProjectIndex].tools.join(', ')}
                        onChange={(e) => {
                          const updated = [...localData.projects];
                          updated[editingProjectIndex].tools = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                          updateField('projects', updated);
                        }}
                      />
                    </div>

                    {/* Case Study Detail Fields */}
                    <div className="cms-field full-width">
                      <label>Case Study: Overview</label>
                      <textarea
                        rows="3"
                        value={localData.projects[editingProjectIndex].overview}
                        onChange={(e) => {
                          const updated = [...localData.projects];
                          updated[editingProjectIndex].overview = e.target.value;
                          updateField('projects', updated);
                        }}
                      />
                    </div>

                    <div className="cms-field full-width">
                      <label>Case Study: The Challenge / Problem</label>
                      <textarea
                        rows="3"
                        value={localData.projects[editingProjectIndex].problem}
                        onChange={(e) => {
                          const updated = [...localData.projects];
                          updated[editingProjectIndex].problem = e.target.value;
                          updateField('projects', updated);
                        }}
                      />
                    </div>

                    <div className="cms-field full-width">
                      <label>Case Study: Strategic Approach & Implementation</label>
                      <textarea
                        rows="3"
                        value={localData.projects[editingProjectIndex].approach}
                        onChange={(e) => {
                          const updated = [...localData.projects];
                          updated[editingProjectIndex].approach = e.target.value;
                          updateField('projects', updated);
                        }}
                      />
                    </div>

                    <div className="cms-field full-width">
                      <label>Case Study: Tangible Results</label>
                      <textarea
                        rows="3"
                        value={localData.projects[editingProjectIndex].result}
                        onChange={(e) => {
                          const updated = [...localData.projects];
                          updated[editingProjectIndex].result = e.target.value;
                          updateField('projects', updated);
                        }}
                      />
                    </div>

                    <div className="cms-field full-width">
                      <label>Case Study: Long-term Impact</label>
                      <textarea
                        rows="3"
                        value={localData.projects[editingProjectIndex].impact}
                        onChange={(e) => {
                          const updated = [...localData.projects];
                          updated[editingProjectIndex].impact = e.target.value;
                          updateField('projects', updated);
                        }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                /* Projects List */
                <div className="cms-items-list">
                  {localData.projects.map((proj, idx) => (
                    <div key={proj.id || idx} className="cms-list-row">
                      <div className="cms-row-info">
                        <span className="cms-row-badge">{proj.categoryLabel}</span>
                        <h4 className="cms-row-title">{proj.title}</h4>
                        <p className="cms-row-sub">{proj.shortDesc}</p>
                        {proj.projectUrl && (
                          <div style={{ marginTop: '6px' }}>
                            <a
                              href={proj.projectUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '5px',
                                fontSize: '11px',
                                color: 'var(--gold-primary, #d4af37)',
                                textDecoration: 'none',
                                background: 'rgba(212, 175, 55, 0.1)',
                                padding: '2px 8px',
                                borderRadius: '4px',
                                border: '1px solid rgba(212, 175, 55, 0.25)'
                              }}
                            >
                              <ExternalLink size={11} />
                              <span style={{ maxWidth: '280px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {proj.projectUrl}
                              </span>
                            </a>
                          </div>
                        )}
                      </div>
                      <div className="cms-row-actions">
                        <button
                          type="button"
                          onClick={() => setEditingProjectIndex(idx)}
                          className="cms-btn-subtle"
                        >
                          Edit Details
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (window.confirm(`Delete project "${proj.title}"?`)) {
                              const updated = localData.projects.filter((_, i) => i !== idx);
                              updateField('projects', updated);
                            }
                          }}
                          className="cms-btn-danger-icon"
                          title="Delete Project"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* SECTION 3: Experience & Pillars */}
          {activeSection === 'experience' && (
            <div className="cms-section-card">
              <h2 className="cms-section-title">Professional Experience & Pillars</h2>
              <p className="cms-section-subtitle">Manage institutional tenure at Dawat-e-Hadiyah and key functional responsibilities.</p>

              <div className="cms-form-grid">
                <div className="cms-field">
                  <label>Role</label>
                  <input
                    type="text"
                    value={localData.experience.role}
                    onChange={(e) => updateField('experience.role', e.target.value)}
                  />
                </div>

                <div className="cms-field">
                  <label>Organization</label>
                  <input
                    type="text"
                    value={localData.experience.organization}
                    onChange={(e) => updateField('experience.organization', e.target.value)}
                  />
                </div>

                <div className="cms-field">
                  <label>Department</label>
                  <input
                    type="text"
                    value={localData.experience.department}
                    onChange={(e) => updateField('experience.department', e.target.value)}
                  />
                </div>

                <div className="cms-field">
                  <label>Period</label>
                  <input
                    type="text"
                    value={localData.experience.period}
                    onChange={(e) => updateField('experience.period', e.target.value)}
                  />
                </div>

                <div className="cms-field full-width">
                  <label>Executive Overview</label>
                  <textarea
                    rows="3"
                    value={localData.experience.description}
                    onChange={(e) => updateField('experience.description', e.target.value)}
                  />
                </div>
              </div>

              {/* 3 Pillars Responsibilities Editor */}
              <h3 className="cms-subheading" style={{ marginTop: '30px' }}>Functional Area Pillars</h3>
              <div className="cms-pillars-manager">
                {localData.experience.pillars.map((pillar, pIdx) => (
                  <div key={pillar.title} className="cms-pillar-box">
                    <h4 className="cms-pillar-name">{pillar.title}</h4>
                    <div className="cms-pillar-bullets-list">
                      {pillar.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="cms-bullet-input-row">
                          <input
                            type="text"
                            value={resp}
                            onChange={(e) => {
                              const updated = JSON.parse(JSON.stringify(localData.experience.pillars));
                              updated[pIdx].responsibilities[rIdx] = e.target.value;
                              updateField('experience.pillars', updated);
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const updated = JSON.parse(JSON.stringify(localData.experience.pillars));
                              updated[pIdx].responsibilities = updated[pIdx].responsibilities.filter((_, i) => i !== rIdx);
                              updateField('experience.pillars', updated);
                            }}
                            className="cms-btn-del"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={() => {
                          const updated = JSON.parse(JSON.stringify(localData.experience.pillars));
                          updated[pIdx].responsibilities.push("New functional responsibility description...");
                          updateField('experience.pillars', updated);
                        }}
                        className="cms-btn-add-mini"
                      >
                        <Plus size={14} /> Add Responsibility Point
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 4: Skills System */}
          {activeSection === 'skills' && (
            <div className="cms-section-card">
              <div className="cms-card-header-row">
                <div>
                  <h2 className="cms-section-title">Technical & Creative Skills System</h2>
                  <p className="cms-section-subtitle">Manage tools, proficiency percentages, and capability tags.</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newSkill = {
                      name: "New Tool / Capability",
                      category: "technology",
                      level: 85,
                      experience: "3+ Years",
                      tags: ["Tool Tag 1", "Tool Tag 2"],
                      highlight: "Brief highlight of practical application"
                    };
                    updateField('skills', [newSkill, ...localData.skills]);
                  }}
                  className="cms-btn-add"
                >
                  <Plus size={16} />
                  <span>Add Skill</span>
                </button>
              </div>

              <div className="cms-skills-editor-grid">
                {localData.skills.map((skill, idx) => (
                  <div key={idx} className="cms-skill-edit-card">
                    <div className="cms-skill-head">
                      <input
                        type="text"
                        value={skill.name}
                        onChange={(e) => {
                          const updated = [...localData.skills];
                          updated[idx].name = e.target.value;
                          updateField('skills', updated);
                        }}
                        className="cms-skill-name-input"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const updated = localData.skills.filter((_, i) => i !== idx);
                          updateField('skills', updated);
                        }}
                        className="cms-btn-danger-icon"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div className="cms-skill-row">
                      <div className="cms-field-mini">
                        <label>Category (design | video | technology | communication)</label>
                        <input
                          type="text"
                          value={skill.category}
                          onChange={(e) => {
                            const updated = [...localData.skills];
                            updated[idx].category = e.target.value;
                            updateField('skills', updated);
                          }}
                        />
                      </div>

                      <div className="cms-field-mini">
                        <label>Experience Label</label>
                        <input
                          type="text"
                          value={skill.experience}
                          onChange={(e) => {
                            const updated = [...localData.skills];
                            updated[idx].experience = e.target.value;
                            updateField('skills', updated);
                          }}
                        />
                      </div>
                    </div>

                    {/* Proficiency Slider */}
                    <div className="cms-slider-row">
                      <label>Proficiency: <strong>{skill.level}%</strong></label>
                      <input
                        type="range"
                        min="50"
                        max="100"
                        value={skill.level}
                        onChange={(e) => {
                          const updated = [...localData.skills];
                          updated[idx].level = parseInt(e.target.value, 10);
                          updateField('skills', updated);
                        }}
                        className="cms-range-slider"
                      />
                    </div>

                    <div className="cms-field-mini" style={{ marginTop: '8px' }}>
                      <label>Highlight Note</label>
                      <input
                        type="text"
                        value={skill.highlight}
                        onChange={(e) => {
                          const updated = [...localData.skills];
                          updated[idx].highlight = e.target.value;
                          updateField('skills', updated);
                        }}
                      />
                    </div>

                    <div className="cms-field-mini" style={{ marginTop: '8px' }}>
                      <label>Tags (Comma-separated)</label>
                      <input
                        type="text"
                        value={skill.tags.join(', ')}
                        onChange={(e) => {
                          const updated = [...localData.skills];
                          updated[idx].tags = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                          updateField('skills', updated);
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 5: Services & What I Do */}
          {activeSection === 'services' && (
            <div className="cms-section-card">
              <h2 className="cms-section-title">What I Do Pillars</h2>
              <p className="cms-section-subtitle">Manage service offerings and capability items displayed on the About tab.</p>

              <div className="cms-services-list">
                {localData.whatIDo.map((item, sIdx) => (
                  <div key={item.id} className="cms-service-edit-card">
                    <div className="cms-form-grid">
                      <div className="cms-field">
                        <label>Pillar Title</label>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => {
                            const updated = [...localData.whatIDo];
                            updated[sIdx].title = e.target.value;
                            updateField('whatIDo', updated);
                          }}
                        />
                      </div>

                      <div className="cms-field">
                        <label>Category Label</label>
                        <input
                          type="text"
                          value={item.category}
                          onChange={(e) => {
                            const updated = [...localData.whatIDo];
                            updated[sIdx].category = e.target.value;
                            updateField('whatIDo', updated);
                          }}
                        />
                      </div>

                      <div className="cms-field full-width">
                        <label>Highlight Statement</label>
                        <input
                          type="text"
                          value={item.highlight}
                          onChange={(e) => {
                            const updated = [...localData.whatIDo];
                            updated[sIdx].highlight = e.target.value;
                            updateField('whatIDo', updated);
                          }}
                        />
                      </div>

                      <div className="cms-field full-width">
                        <label>Description</label>
                        <textarea
                          rows="3"
                          value={item.description}
                          onChange={(e) => {
                            const updated = [...localData.whatIDo];
                            updated[sIdx].description = e.target.value;
                            updateField('whatIDo', updated);
                          }}
                        />
                      </div>

                      <div className="cms-field full-width">
                        <label>Capabilities (Comma-separated)</label>
                        <input
                          type="text"
                          value={item.capabilities.join(', ')}
                          onChange={(e) => {
                            const updated = [...localData.whatIDo];
                            updated[sIdx].capabilities = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                            updateField('whatIDo', updated);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 6: Education Timeline */}
          {activeSection === 'education' && (
            <div className="cms-section-card">
              <div className="cms-card-header-row">
                <div>
                  <h2 className="cms-section-title">Education & Academic Timeline</h2>
                  <p className="cms-section-subtitle">Manage degree programs, university details, and achievements.</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newEdu = {
                      degree: "New Degree or Certification",
                      institution: "Institution / University",
                      period: "Year / Duration",
                      location: "Location",
                      status: "Completed",
                      description: "Course description...",
                      highlights: ["Key highlight 1", "Key highlight 2"]
                    };
                    updateField('education', [...localData.education, newEdu]);
                  }}
                  className="cms-btn-add"
                >
                  <Plus size={16} />
                  <span>Add Education</span>
                </button>
              </div>

              <div className="cms-edu-list">
                {localData.education.map((edu, eIdx) => (
                  <div key={eIdx} className="cms-edu-card">
                    <div className="cms-card-header-row">
                      <h4 className="cms-row-title">{edu.degree}</h4>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = localData.education.filter((_, i) => i !== eIdx);
                          updateField('education', updated);
                        }}
                        className="cms-btn-danger-icon"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div className="cms-form-grid">
                      <div className="cms-field">
                        <label>Degree / Qualification Title</label>
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) => {
                            const updated = [...localData.education];
                            updated[eIdx].degree = e.target.value;
                            updateField('education', updated);
                          }}
                        />
                      </div>

                      <div className="cms-field">
                        <label>Institution</label>
                        <input
                          type="text"
                          value={edu.institution}
                          onChange={(e) => {
                            const updated = [...localData.education];
                            updated[eIdx].institution = e.target.value;
                            updateField('education', updated);
                          }}
                        />
                      </div>

                      <div className="cms-field">
                        <label>Period / Year</label>
                        <input
                          type="text"
                          value={edu.period}
                          onChange={(e) => {
                            const updated = [...localData.education];
                            updated[eIdx].period = e.target.value;
                            updateField('education', updated);
                          }}
                        />
                      </div>

                      <div className="cms-field">
                        <label>Location</label>
                        <input
                          type="text"
                          value={edu.location}
                          onChange={(e) => {
                            const updated = [...localData.education];
                            updated[eIdx].location = e.target.value;
                            updateField('education', updated);
                          }}
                        />
                      </div>

                      <div className="cms-field full-width">
                        <label>Description</label>
                        <textarea
                          rows="2"
                          value={edu.description}
                          onChange={(e) => {
                            const updated = [...localData.education];
                            updated[eIdx].description = e.target.value;
                            updateField('education', updated);
                          }}
                        />
                      </div>

                      <div className="cms-field full-width">
                        <label>Highlights (Comma-separated)</label>
                        <input
                          type="text"
                          value={edu.highlights.join(', ')}
                          onChange={(e) => {
                            const updated = [...localData.education];
                            updated[eIdx].highlights = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                            updateField('education', updated);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 7: Philosophy & Ethos */}
          {activeSection === 'philosophy' && (
            <div className="cms-section-card">
              <h2 className="cms-section-title">Personal Philosophy & Guiding Ethos</h2>
              <p className="cms-section-subtitle">Edit the core quote and the three non-negotiable principles.</p>

              <div className="cms-form-grid">
                <div className="cms-field full-width">
                  <label>Featured Quote</label>
                  <input
                    type="text"
                    value={localData.philosophy.quote}
                    onChange={(e) => updateField('philosophy.quote', e.target.value)}
                  />
                </div>

                <div className="cms-field full-width">
                  <label>Subtext / Supporting Statement</label>
                  <input
                    type="text"
                    value={localData.philosophy.subtext}
                    onChange={(e) => updateField('philosophy.subtext', e.target.value)}
                  />
                </div>
              </div>

              <h3 className="cms-subheading" style={{ marginTop: '25px' }}>3 Core Principles</h3>
              <div className="cms-principles-grid">
                {localData.philosophy.principles.map((prin, pIdx) => (
                  <div key={pIdx} className="cms-prin-card">
                    <div className="cms-field full-width">
                      <label>Principle {pIdx + 1} Title</label>
                      <input
                        type="text"
                        value={prin.title}
                        onChange={(e) => {
                          const updated = [...localData.philosophy.principles];
                          updated[pIdx].title = e.target.value;
                          updateField('philosophy.principles', updated);
                        }}
                      />
                    </div>
                    <div className="cms-field full-width" style={{ marginTop: '10px' }}>
                      <label>Description</label>
                      <textarea
                        rows="2"
                        value={prin.description}
                        onChange={(e) => {
                          const updated = [...localData.philosophy.principles];
                          updated[pIdx].description = e.target.value;
                          updateField('philosophy.principles', updated);
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Export / Import Modal */}
      {jsonModalOpen && (
        <div className="cms-modal-overlay" onClick={() => setJsonModalOpen(false)}>
          <div className="cms-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="cms-modal-header">
              <h3>{jsonMode === 'export' ? 'Export Portfolio JSON Configuration' : 'Import Portfolio JSON Configuration'}</h3>
              <button type="button" onClick={() => setJsonModalOpen(false)} className="cms-modal-close">
                <X size={18} />
              </button>
            </div>

            <div className="cms-modal-body">
              {jsonMode === 'export' ? (
                <>
                  <p className="cms-modal-desc">
                    Copy the JSON below or download it as a backup. You can replace the default dataset in your codebase anytime.
                  </p>
                  <textarea
                    rows="14"
                    readOnly
                    className="cms-json-textarea"
                    value={JSON.stringify(localData, null, 2)}
                  />
                  <div className="cms-modal-footer">
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(JSON.stringify(localData, null, 2));
                        alert('JSON copied to clipboard!');
                      }}
                      className="cms-btn-save"
                    >
                      Copy to Clipboard
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p className="cms-modal-desc">
                    Paste your valid JSON configuration below. This will overwrite current in-browser data.
                  </p>
                  {importError && <div className="cms-error-msg">{importError}</div>}
                  <textarea
                    rows="14"
                    className="cms-json-textarea"
                    placeholder="Paste JSON here..."
                    value={importJsonText}
                    onChange={(e) => setImportJsonText(e.target.value)}
                  />
                  <div className="cms-modal-footer">
                    <button
                      type="button"
                      onClick={handleImport}
                      className="cms-btn-save"
                    >
                      Import & Apply
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .cms-wrapper {
          min-height: 100vh;
          background: #08090d;
          color: #f1f5f9;
          font-family: 'Poppins', 'Plus Jakarta Sans', sans-serif;
          padding-bottom: 60px;
        }

        .cms-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 30px;
          background: #0f121a;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
        }

        .cms-brand-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .cms-logo-badge {
          background: linear-gradient(135deg, hsl(45, 100%, 72%) 0%, hsl(35, 100%, 68%) 100%);
          color: #0b0c10;
          font-weight: 800;
          font-size: 13px;
          padding: 6px 10px;
          border-radius: 8px;
          letter-spacing: 0.5px;
        }

        .cms-title {
          font-size: 17px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2px;
        }

        .cms-status-tag {
          font-size: 11px;
          color: hsl(45, 100%, 72%);
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .cms-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
        }

        .cms-actions-right {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .cms-btn-save {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, hsl(45, 100%, 72%) 0%, hsl(35, 100%, 68%) 100%);
          color: #0b0c10;
          font-weight: 700;
          font-size: 13px;
          padding: 9px 18px;
          border-radius: 10px;
          transition: transform 0.2s ease, filter 0.2s ease;
        }

        .cms-btn-save:hover {
          filter: brightness(1.1);
          transform: translateY(-2px);
        }

        .cms-btn-preview {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          font-size: 13px;
          font-weight: 600;
          padding: 9px 16px;
          border-radius: 10px;
          transition: all 0.2s ease;
        }

        .cms-btn-preview:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: hsl(45, 100%, 72%);
          color: hsl(45, 100%, 72%);
        }

        .cms-btn-subtle {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #cbd5e1;
          font-size: 12px;
          font-weight: 500;
          padding: 8px 12px;
          border-radius: 8px;
        }

        .cms-btn-subtle:hover {
          background: rgba(255, 255, 255, 0.09);
          color: #ffffff;
        }

        .cms-btn-danger {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #fca5a5;
          font-size: 12px;
          padding: 8px 12px;
          border-radius: 8px;
        }

        .cms-btn-danger:hover {
          background: rgba(239, 68, 68, 0.2);
        }

        .cms-toast {
          position: fixed;
          top: 85px;
          right: 30px;
          background: #064e3b;
          border: 1px solid #10b981;
          color: #a7f3d0;
          padding: 12px 18px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          z-index: 200;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          animation: fadeIn 0.3s ease;
        }

        .cms-toast-error {
          background: #450a0a;
          border-color: #dc2626;
          color: #fca5a5;
        }

        .spin-icon {
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Layout Grid */
        .cms-layout-grid {
          display: flex;
          max-width: 1350px;
          margin: 30px auto;
          padding: 0 25px;
          gap: 30px;
        }

        .cms-nav-sidebar {
          width: 270px;
          flex-shrink: 0;
        }

        .cms-nav-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          background: #11141e;
          padding: 12px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          position: sticky;
          top: 95px;
        }

        .cms-nav-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 500;
          color: #94a3b8;
          transition: all 0.2s ease;
          text-align: left;
        }

        .cms-nav-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
        }

        .cms-nav-btn.active {
          background: hsla(45, 100%, 72%, 0.12);
          border: 1px solid hsla(45, 100%, 72%, 0.3);
          color: hsl(45, 100%, 72%);
          font-weight: 600;
        }

        .cms-editor-panel {
          flex: 1;
          min-width: 0;
        }

        .cms-section-card {
          background: #11141e;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .cms-section-title {
          font-size: 22px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .cms-section-subtitle {
          font-size: 13px;
          color: #94a3b8;
          margin-bottom: 25px;
        }

        /* Avatar Uploader */
        .cms-avatar-uploader-card {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 22px;
          background: #090b10;
          border: 1px solid rgba(212, 175, 55, 0.25);
          border-radius: 16px;
          margin-bottom: 26px;
          flex-wrap: wrap;
        }

        .cms-avatar-preview-wrap {
          position: relative;
          width: 96px;
          height: 96px;
          border-radius: 50%;
          border: 2px solid #d4af37;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cms-avatar-preview-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .cms-avatar-badge {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #d4af37;
          color: #121212;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }

        .cms-avatar-controls {
          flex: 1;
          min-width: 250px;
        }

        .cms-avatar-title {
          font-size: 15px;
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 4px;
        }

        .cms-avatar-hint {
          font-size: 12px;
          color: #94a3b8;
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .cms-avatar-btn-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .cms-btn-upload-photo {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: linear-gradient(135deg, #fcd34d 0%, #d4af37 100%);
          color: #0f172a;
          font-size: 12px;
          font-weight: 700;
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.2s ease, filter 0.2s ease;
        }

        .cms-btn-upload-photo:hover {
          transform: translateY(-1px);
          filter: brightness(1.1);
        }

        .cms-card-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .cms-btn-add {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: hsla(45, 100%, 72%, 0.15);
          border: 1px solid hsl(45, 100%, 72%);
          color: hsl(45, 100%, 72%);
          font-size: 12px;
          font-weight: 600;
          padding: 8px 14px;
          border-radius: 8px;
        }

        .cms-btn-add:hover {
          background: hsl(45, 100%, 72%);
          color: #000000;
        }

        .cms-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .cms-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .cms-field.full-width {
          grid-column: span 2;
        }

        .cms-field label {
          font-size: 12px;
          font-weight: 600;
          color: #cbd5e1;
        }

        .cms-field input, .cms-field textarea, .cms-field select {
          background: #080a10;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 10px;
          padding: 10px 14px;
          font-size: 13px;
          color: #ffffff;
          outline: none;
        }

        .cms-field input:focus, .cms-field textarea:focus, .cms-field select:focus {
          border-color: hsl(45, 100%, 72%);
        }

        .cms-items-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .cms-list-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #090c13;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 14px 18px;
        }

        .cms-row-badge {
          font-size: 11px;
          color: hsl(45, 100%, 72%);
          font-weight: 600;
          text-transform: uppercase;
        }

        .cms-row-title {
          font-size: 15px;
          color: #ffffff;
          margin: 2px 0;
        }

        .cms-row-sub {
          font-size: 12px;
          color: #94a3b8;
        }

        .cms-row-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cms-btn-danger-icon {
          color: #f87171;
          padding: 6px;
          border-radius: 6px;
          background: rgba(239, 68, 68, 0.1);
        }

        .cms-btn-danger-icon:hover {
          background: rgba(239, 68, 68, 0.25);
        }

        .cms-sub-editor {
          background: #090c13;
          border: 1px solid hsla(45, 100%, 72%, 0.3);
          border-radius: 14px;
          padding: 20px;
          margin-bottom: 20px;
        }

        .cms-sub-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .cms-sub-header h3 {
          font-size: 15px;
          color: hsl(45, 100%, 72%);
        }

        /* Pillars Manager */
        .cms-pillars-manager {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cms-pillar-box {
          background: #090c13;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 16px;
        }

        .cms-pillar-name {
          font-size: 14px;
          color: hsl(45, 100%, 72%);
          margin-bottom: 12px;
        }

        .cms-pillar-bullets-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .cms-bullet-input-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cms-bullet-input-row input {
          flex: 1;
          background: #050608;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 12px;
          color: #ffffff;
        }

        .cms-btn-del {
          color: #f87171;
          padding: 6px;
        }

        .cms-btn-add-mini {
          align-self: flex-start;
          font-size: 11px;
          color: hsl(45, 100%, 72%);
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 4px;
        }

        /* Skills Grid */
        .cms-skills-editor-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .cms-skill-edit-card {
          background: #090c13;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 14px;
        }

        .cms-skill-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 10px;
        }

        .cms-skill-name-input {
          font-weight: 700;
          font-size: 14px;
          color: #ffffff;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          padding: 2px 4px;
          width: 100%;
        }

        .cms-skill-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 8px;
        }

        .cms-field-mini label {
          display: block;
          font-size: 10px;
          color: #94a3b8;
          text-transform: uppercase;
          margin-bottom: 2px;
        }

        .cms-field-mini input {
          width: 100%;
          background: #050608;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 6px;
          padding: 6px 8px;
          font-size: 12px;
          color: #ffffff;
        }

        .cms-slider-row label {
          display: block;
          font-size: 11px;
          color: #cbd5e1;
          margin-bottom: 4px;
        }

        .cms-range-slider {
          width: 100%;
          accent-color: hsl(45, 100%, 72%);
        }

        /* Modal */
        .cms-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .cms-modal-box {
          background: #11141e;
          border: 1px solid hsla(45, 100%, 72%, 0.4);
          border-radius: 18px;
          width: 100%;
          max-width: 700px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.9);
        }

        .cms-modal-header {
          padding: 16px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cms-modal-body {
          padding: 20px;
        }

        .cms-modal-desc {
          font-size: 12px;
          color: #94a3b8;
          margin-bottom: 12px;
        }

        .cms-json-textarea {
          width: 100%;
          background: #06080d;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 10px;
          padding: 12px;
          color: #a7f3d0;
          font-family: monospace;
          font-size: 12px;
          outline: none;
        }

        .cms-modal-footer {
          margin-top: 15px;
          display: flex;
          justify-content: flex-end;
        }

        .cms-error-msg {
          color: #f87171;
          font-size: 12px;
          margin-bottom: 8px;
        }

        @media (max-width: 900px) {
          .cms-layout-grid {
            flex-direction: column;
          }
          .cms-nav-sidebar {
            width: 100%;
          }
          .cms-form-grid {
            grid-template-columns: 1fr;
          }
          .cms-field.full-width {
            grid-column: span 1;
          }
          .cms-skills-editor-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
