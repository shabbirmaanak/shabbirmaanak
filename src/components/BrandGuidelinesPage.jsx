import React, { useState } from 'react';
import { 
  ArrowLeft, Copy, Check, Printer, Download, Sparkles, 
  ExternalLink, Layers, Eye, RefreshCw, Shield, AlertTriangle, 
  CheckCircle, FileText, Share2, Compass, Box, Palette, Type, Award
} from 'lucide-react';

export default function BrandGuidelinesPage({ onBackToPortfolio }) {
  const [copiedToken, setCopiedToken] = useState(null);
  const [cardFlipped, setCardFlipped] = useState(false);
  const [letterheadEditable, setLetterheadEditable] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  // Letterhead editable content state
  const [letterheadData, setLetterheadData] = useState({
    date: '10 November 2026',
    refNo: 'DH/ADMIN/2026/048',
    classification: 'EXECUTIVE RESTRICTED',
    recipientName: 'The Administrative Council',
    recipientOrg: 'Dawat-e-Hadiyah Directorate',
    recipientAddress: 'Badri Mahal, Fort, Mumbai 400001',
    subject: 'INSTITUTIONAL DIRECTIVE: ADOPTION OF UNIFIED DIGITAL & BRAND ARCHITECTURE',
    bodyParagraph1: 'This official memorandum establishes the formal adoption of the unified Brand Identity Guidelines and Executive Stationery Architecture across all departmental communication channels, multimedia initiatives, and technical repositories.',
    bodyParagraph2: 'All official correspondence, digital platforms, and executive presentations under the auspices of the Department of Well-being of Women and Children shall strictly adhere to the chromatic standards, typographic hierarchy, and precision layout grids codified herein.',
    bodyParagraph3: 'By harmonizing classical institutional dignity with modern computational design, this framework ensures consistent excellence in our public outreach, administrative efficiency, and long-term institutional memory.',
    signatoryName: 'Shabbir Mustafa Heera',
    signatoryNative: 'Mulla Shabbir Shk Mustafa bh Maanak',
    signatoryTitle: 'Assistant Administrator — Research, IT & Multimedia | Operations'
  });

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(label);
    setTimeout(() => setCopiedToken(null), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const colors = [
    {
      name: "Warm Editorial Cream",
      hex: "#FAF9F6",
      rgb: "250, 249, 246",
      cmyk: "2, 2, 3, 0",
      role: "Primary surface background, stationery paper stock, gifting bags",
      border: true
    },
    {
      name: "Deep Onyx Charcoal",
      hex: "#111111",
      rgb: "17, 17, 17",
      cmyk: "70, 65, 65, 90",
      role: "Primary typography, formal body copy, dark accents",
      dark: true
    },
    {
      name: "Antique Warm Gold",
      hex: "#A37E2C",
      rgb: "163, 126, 44",
      cmyk: "20, 35, 90, 20",
      role: "Monogram hot foil, headline accents, luxury highlights",
      dark: true
    },
    {
      name: "Card Container White",
      hex: "#FFFFFF",
      rgb: "255, 255, 255",
      cmyk: "0, 0, 0, 0",
      role: "Secondary card surfaces, clean content frames",
      border: true
    },
    {
      name: "Muted Slate Gray",
      hex: "#555555",
      rgb: "85, 85, 85",
      cmyk: "0, 0, 0, 75",
      role: "Metadata labels, subtitles, secondary correspondence lines",
      dark: true
    },
    {
      name: "Subtle Hairline Gray",
      hex: "#EEEEEE",
      rgb: "238, 238, 238",
      cmyk: "5, 4, 4, 0",
      role: "Borders, divider rules, grid separators",
      border: true
    },
    {
      name: "Live Indicator Green",
      hex: "#28A745",
      rgb: "40, 167, 69",
      cmyk: "75, 0, 100, 0",
      role: "Availability badge, operational status indicator",
      dark: true
    },
    {
      name: "Status Crimson",
      hex: "#C84B53",
      rgb: "200, 75, 83",
      cmyk: "15, 85, 65, 5",
      role: "Milestone tags, ceremonial accents, formal seal highlights",
      dark: true
    }
  ];

  const svgMonogramCode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <circle cx="50" cy="50" r="48" fill="none" stroke="#A37E2C" stroke-width="1"/>
  <path d="M35 65 C35 45, 45 35, 50 35 C55 35, 65 45, 65 65" fill="none" stroke="#A37E2C" stroke-width="2"/>
  <text x="50" y="58" font-family="Cormorant Garamond, serif" font-size="22" font-weight="bold" fill="#A37E2C" text-anchor="middle">SM</text>
</svg>`;

  const designTokensCSS = `:root {
  /* Color Tokens */
  --color-surface-cream: #FAF9F6;
  --color-surface-white: #FFFFFF;
  --color-text-primary: #111111;
  --color-text-secondary: #555555;
  --color-accent-gold: #A37E2C;
  --color-border-hairline: #EEEEEE;
  --color-status-live: #28A745;
  --color-status-crimson: #C84B53;

  /* Typography Tokens */
  --font-serif: "Cormorant Garamond", "Playfair Display", Georgia, serif;
  --font-sans: "Inter", "Plus Jakarta Sans", system-ui, sans-serif;
  --font-mono: "Roboto Mono", monospace;

  /* Spacing Tokens */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;

  /* Surface & Radius */
  --radius-card: 8px;
  --radius-badge: 9999px;
  --shadow-subtle: 0 1px 3px rgba(0,0,0,0.05);
}`;

  return (
    <div className="bg-brand-portal">
      {/* ─── Top Global Announcement / Breadcrumb Bar ─── */}
      <div className="bg-top-bar">
        <div className="bg-container bg-top-bar-inner">
          <button 
            type="button" 
            onClick={onBackToPortfolio}
            className="bg-back-btn"
            title="Return to Public Portfolio"
          >
            <ArrowLeft size={14} />
            <span>Return to Portfolio</span>
          </button>

          <div className="bg-top-meta">
            <span className="bg-live-dot" />
            <span className="bg-top-title">Official Brand Identity Guidelines &amp; Executive Stationery System</span>
            <span className="bg-top-ref">shabbirmaanak.com</span>
          </div>

          <div className="bg-top-actions">
            <button 
              type="button" 
              onClick={handlePrint}
              className="bg-print-btn"
              title="Print Document or Save as PDF"
            >
              <Printer size={14} />
              <span>Print Guidelines</span>
            </button>
          </div>
        </div>
      </div>

      {/* ─── Sticky Section Anchor Navigation ─── */}
      <nav className="bg-nav-sticky">
        <div className="bg-container bg-nav-inner">
          <a href="#overview" className="bg-nav-item">Overview</a>
          <a href="#colors" className="bg-nav-item">Colors</a>
          <a href="#typography" className="bg-nav-item">Typography</a>
          <a href="#visiting-card" className="bg-nav-item">Visiting Card (3D)</a>
          <a href="#letterhead" className="bg-nav-item">Executive Letterhead</a>
          <a href="#gifting-bag" className="bg-nav-item">Gifting Bag</a>
          <a href="#governance" className="bg-nav-item">Governance</a>
          <a href="#tokens" className="bg-nav-item">DESIGN.md Tokens</a>
        </div>
      </nav>

      <main className="bg-main-content">
        {/* ─── Section 1: Executive Summary & Brand Foundation ─── */}
        <section id="overview" className="bg-section">
          <div className="bg-container">
            <div className="bg-header-hero">
              <div className="bg-monogram-emblem-wrap">
                <svg viewBox="0 0 100 100" className="bg-hero-svg-monogram">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="#A37E2C" strokeWidth="1" strokeDasharray="2,2"/>
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#A37E2C" strokeWidth="1"/>
                  <path d="M35 65 C35 45, 45 35, 50 35 C55 35, 65 45, 65 65" fill="none" stroke="#A37E2C" strokeWidth="2"/>
                  <text x="50" y="58" fontFamily="Cormorant Garamond, serif" fontSize="22" fontWeight="bold" fill="#A37E2C" textAnchor="middle">SM</text>
                </svg>
              </div>

              <div className="bg-hero-titles">
                <span className="bg-eyebrow-pill">Brand Manual &bull; Executive System v2.0</span>
                <h1 className="bg-doc-title">SHABBIR MUSTAFA HEERA</h1>
                <p className="bg-native-subtitle">Mulla Shabbir Shk Mustafa bh Maanak</p>
                <p className="bg-hero-role-desc">
                  Assistant Administrator &bull; Research, IT &amp; Multimedia &bull; Operations
                </p>
                <p className="bg-hero-inst">
                  Dawat-e-Hadiyah (Department of Well-being of Women &amp; Children)
                </p>
              </div>
            </div>

            {/* Tagline Callout Banner */}
            <div className="bg-quote-card">
              <blockquote className="bg-quote-text">
                "Building technology, media and workflows that create lasting impact."
              </blockquote>
              <div className="bg-philosophy-breakdown">
                <strong>Design Philosophy:</strong> Editorial Luxury meets structured Bento Grid functionality. The brand visual language balances classical institutional dignity (fine serif typography, antique gold accents, generous negative space) with modern digital execution (geometric sans-serif type, modular card structures, subtle borders).
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 2: Official Color Palette & Chromatic Architecture ─── */}
        <section id="colors" className="bg-section bg-section-light">
          <div className="bg-container">
            <div className="bg-section-heading-box">
              <span className="bg-section-num">02</span>
              <div>
                <h2 className="bg-section-title">Official Color Palette &amp; Chromatic Architecture</h2>
                <p className="bg-section-subtitle">A dual-mode palette anchored in warm editorial tones with metallic gold prestige.</p>
              </div>
            </div>

            <div className="bg-colors-grid">
              {colors.map((c) => (
                <div key={c.name} className="bg-color-card">
                  <div 
                    className="bg-color-swatch"
                    style={{ 
                      backgroundColor: c.hex,
                      border: c.border ? '1px solid #e0dfda' : 'none'
                    }}
                  >
                    <span 
                      className="bg-swatch-hex"
                      style={{ color: c.dark ? '#ffffff' : '#111111' }}
                    >
                      {c.hex}
                    </span>
                  </div>

                  <div className="bg-color-details">
                    <h3 className="bg-color-name">{c.name}</h3>
                    <p className="bg-color-role">{c.role}</p>

                    <div className="bg-color-values">
                      <div className="bg-val-row">
                        <span className="bg-val-label">HEX:</span>
                        <code className="bg-val-code">{c.hex}</code>
                        <button 
                          type="button" 
                          onClick={() => copyToClipboard(c.hex, `hex-${c.hex}`)}
                          className="bg-copy-val-btn"
                          title="Copy Hex"
                        >
                          {copiedToken === `hex-${c.hex}` ? <Check size={12} /> : <Copy size={12} />}
                        </button>
                      </div>

                      <div className="bg-val-row">
                        <span className="bg-val-label">RGB:</span>
                        <code className="bg-val-code">{c.rgb}</code>
                        <button 
                          type="button" 
                          onClick={() => copyToClipboard(`rgb(${c.rgb})`, `rgb-${c.hex}`)}
                          className="bg-copy-val-btn"
                          title="Copy RGB"
                        >
                          {copiedToken === `rgb-${c.hex}` ? <Check size={12} /> : <Copy size={12} />}
                        </button>
                      </div>

                      <div className="bg-val-row">
                        <span className="bg-val-label">CMYK:</span>
                        <code className="bg-val-code">{c.cmyk}</code>
                        <button 
                          type="button" 
                          onClick={() => copyToClipboard(c.cmyk, `cmyk-${c.hex}`)}
                          className="bg-copy-val-btn"
                          title="Copy CMYK"
                        >
                          {copiedToken === `cmyk-${c.hex}` ? <Check size={12} /> : <Copy size={12} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Section 3: Typography Hierarchy & Standard Typefaces ─── */}
        <section id="typography" className="bg-section">
          <div className="bg-container">
            <div className="bg-section-heading-box">
              <span className="bg-section-num">03</span>
              <div>
                <h2 className="bg-section-title">Typography Hierarchy &amp; Standard Typefaces</h2>
                <p className="bg-section-subtitle">High-contrast serif for editorial authority, paired with precision geometric sans-serif for functional legibility.</p>
              </div>
            </div>

            <div className="bg-type-columns">
              {/* Typeface 1: Cormorant Garamond */}
              <div className="bg-type-card serif-card">
                <span className="bg-type-role-badge">Display &amp; Headline Typeface</span>
                <h3 className="bg-font-title serif-title">Cormorant Garamond</h3>
                <p className="bg-font-meta">Serif &bull; High Contrast &bull; Classical Proportions &bull; Refined Italics</p>
                <div className="bg-font-alphabet serif-specimen">
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
                  <br />
                  1234567890 &bull; $ &pound; &euro; &amp; @ % ! ? ( ) [ ]
                </div>
                <div className="bg-font-use">
                  <strong>Used for:</strong> Primary nameplate, formal headings, monogram letterforms, pull quotes.
                </div>
              </div>

              {/* Typeface 2: Inter / Plus Jakarta Sans */}
              <div className="bg-type-card sans-card">
                <span className="bg-type-role-badge">UI &amp; Body Typeface</span>
                <h3 className="bg-font-title sans-title">Inter / Plus Jakarta Sans</h3>
                <p className="bg-font-meta">Geometric Sans-Serif &bull; Open Apertures &bull; High X-Height &bull; Superior Print Clarity</p>
                <div className="bg-font-alphabet sans-specimen">
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
                  <br />
                  1234567890 &bull; $ &pound; &euro; &amp; @ % ! ? ( ) [ ]
                </div>
                <div className="bg-font-use">
                  <strong>Used for:</strong> Correspondence body text, metadata, contact coordinates, technical documentation.
                </div>
              </div>
            </div>

            {/* Typographic Scale Demonstration */}
            <div className="bg-type-scale-box">
              <h3 className="bg-scale-heading">Standard Typographic Scale</h3>
              
              <div className="bg-scale-item">
                <div className="bg-scale-meta">
                  <span className="bg-scale-step">1. Document Title</span>
                  <code>28pt–32pt | Bold Serif | Tracked +25</code>
                </div>
                <div className="bg-scale-sample serif-title" style={{ fontSize: '30px', fontWeight: 700, letterSpacing: '0.025em' }}>
                  SHABBIR MUSTAFA HEERA
                </div>
              </div>

              <div className="bg-scale-item">
                <div className="bg-scale-meta">
                  <span className="bg-scale-step">2. Major Heading (H1)</span>
                  <code>18pt–22pt | Bold Serif | Uppercase, Tracked +50</code>
                </div>
                <div className="bg-scale-sample serif-title" style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Official Brand Identity Guidelines &amp; Executive System
                </div>
              </div>

              <div className="bg-scale-item">
                <div className="bg-scale-meta">
                  <span className="bg-scale-step">3. Sub-Heading (H2)</span>
                  <code>13pt–15pt | Semi-Bold Sans-Serif | Sentence Case</code>
                </div>
                <div className="bg-scale-sample sans-title" style={{ fontSize: '14.5px', fontWeight: 600 }}>
                  Executive Visiting Card &bull; Professional Letterhead &bull; Boutique Gifting System
                </div>
              </div>

              <div className="bg-scale-item">
                <div className="bg-scale-meta">
                  <span className="bg-scale-step">4. Body Text</span>
                  <code>10.5pt–11pt | Regular Sans-Serif | 1.5 Line Spacing</code>
                </div>
                <div className="bg-scale-sample sans-title" style={{ fontSize: '11pt', lineHeight: 1.5, color: '#333333' }}>
                  The brand employs a high-contrast serif for editorial authority, paired with a precision geometric sans-serif for functional legibility across digital portals and archival cotton stationery.
                </div>
              </div>

              <div className="bg-scale-item">
                <div className="bg-scale-meta">
                  <span className="bg-scale-step">5. Metadata &amp; Caption</span>
                  <code>8.5pt–9pt | Medium Sans-Serif | Uppercase, Tracked +80</code>
                </div>
                <div className="bg-scale-sample sans-title" style={{ fontSize: '8.5pt', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#555555' }}>
                  OFFICE OF ADMINISTRATION &bull; BADRI MAHAL, FORT, MUMBAI 400001 &bull; RESTRICTED
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 4: Executive Visiting Card (3D 180° Flip Card) ─── */}
        <section id="visiting-card" className="bg-section bg-section-light">
          <div className="bg-container">
            <div className="bg-section-heading-box">
              <span className="bg-section-num">04</span>
              <div>
                <h2 className="bg-section-title">Executive Visiting Card (Interactive 3D Card)</h2>
                <p className="bg-section-subtitle">
                  3.5" x 2.0" (88.9 mm x 50.8 mm) &bull; 450 GSM Heavy Cotton Archival Cardstock &bull; Natural Cream (#FAF9F6) &bull; Gilded Gold Edges
                </p>
              </div>
            </div>

            <div className="bg-card-showcase-wrap">
              {/* Card Controls */}
              <div className="bg-card-action-bar">
                <button 
                  type="button" 
                  onClick={() => setCardFlipped(!cardFlipped)}
                  className="bg-flip-toggle-btn"
                >
                  <RefreshCw size={15} />
                  <span>{cardFlipped ? 'Flip to Front (Monogram Emblem)' : 'Flip to Reverse (Executive Coordinates)'}</span>
                </button>
                <span className="bg-card-flip-hint">Click the card or button to rotate 180&deg;</span>
              </div>

              {/* 3D Flip Container */}
              <div className="bg-scene-3d" onClick={() => setCardFlipped(!cardFlipped)}>
                <div className={`bg-card-3d ${cardFlipped ? 'is-flipped' : ''}`}>
                  {/* FRONT FACE: The Monogram Emblem */}
                  <div className="bg-card-face bg-card-front">
                    <div className="bg-debossed-frame">
                      <div className="bg-card-front-content">
                        {/* Gold Foil Monogram Emblem */}
                        <div className="bg-card-gold-monogram">
                          <svg viewBox="0 0 100 100" width="80" height="80">
                            <circle cx="50" cy="50" r="48" fill="none" stroke="#A37E2C" strokeWidth="1.2"/>
                            <circle cx="50" cy="50" r="44" fill="none" stroke="#A37E2C" strokeWidth="0.8" strokeDasharray="1.5,1.5"/>
                            <path d="M35 65 C35 45, 45 35, 50 35 C55 35, 65 45, 65 65" fill="none" stroke="#A37E2C" strokeWidth="2.2"/>
                            <text x="50" y="58" fontFamily="Cormorant Garamond, serif" fontSize="24" fontWeight="bold" fill="#A37E2C" textAnchor="middle">SM</text>
                          </svg>
                        </div>

                        {/* Gold Foil Tracked Nameplate */}
                        <div className="bg-card-front-name">SHABBIR MUSTAFA HEERA</div>
                        <div className="bg-card-front-sub">EXECUTIVE SUITE</div>
                      </div>
                    </div>
                  </div>

                  {/* REVERSE FACE: Executive Coordinates */}
                  <div className="bg-card-face bg-card-back">
                    <div className="bg-debossed-frame bg-card-back-frame">
                      <div className="bg-card-back-header">
                        <div className="bg-card-back-name">SHABBIR MUSTAFA HEERA</div>
                        <div className="bg-card-back-native">Mulla Shabbir Shk Mustafa bh Maanak</div>
                        <div className="bg-card-back-role">
                          ASSISTANT ADMINISTRATOR &mdash; Dawat-e-Hadiyah
                        </div>
                        <div className="bg-card-back-dept">
                          Department of Well-being of Women &amp; Children
                        </div>
                      </div>

                      <div className="bg-card-back-divider" />

                      <div className="bg-card-back-coords">
                        <div className="bg-coord-line">
                          <span className="bg-coord-label">Email:</span>
                          <span className="bg-coord-val">shabbirmaanak@gmail.com</span>
                        </div>
                        <div className="bg-coord-line">
                          <span className="bg-coord-label">Web:</span>
                          <span className="bg-coord-val">www.shabbirmaanak.com</span>
                        </div>
                        <div className="bg-coord-line">
                          <span className="bg-coord-label">Location:</span>
                          <span className="bg-coord-val">Mumbai, Maharashtra, India</span>
                        </div>
                        <div className="bg-coord-line">
                          <span className="bg-coord-label">HQ:</span>
                          <span className="bg-coord-val">Badri Mahal, Fort, Mumbai 400001</span>
                        </div>
                      </div>

                      <div className="bg-card-back-watermark">
                        <svg viewBox="0 0 100 100" width="36" height="36">
                          <circle cx="50" cy="50" r="48" fill="none" stroke="#A37E2C" strokeWidth="1" opacity="0.3"/>
                          <text x="50" y="58" fontFamily="Cormorant Garamond, serif" fontSize="22" fontWeight="bold" fill="#A37E2C" opacity="0.3" textAnchor="middle">SM</text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visiting Card Technical Specifications Table */}
              <div className="bg-card-specs-table">
                <div className="bg-spec-row">
                  <span className="bg-spec-key">Dimensions:</span>
                  <span className="bg-spec-val">3.5" x 2.0" (88.9 mm x 50.8 mm) + 3mm full bleed</span>
                </div>
                <div className="bg-spec-row">
                  <span className="bg-spec-key">Substrate:</span>
                  <span className="bg-spec-val">450 GSM Heavy Cotton Archival Cardstock, natural uncoated cream finish (#FAF9F6)</span>
                </div>
                <div className="bg-spec-row">
                  <span className="bg-spec-key">Finishing:</span>
                  <span className="bg-spec-val">Matte Antique Gold Hot Foil (Kurz 385), Blind-debossed 0.5pt perimeter, Hand-gilded antique gold edges</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 5: Professional Executive Letterhead System (Interactive A4 Canvas) ─── */}
        <section id="letterhead" className="bg-section">
          <div className="bg-container">
            <div className="bg-section-heading-box">
              <span className="bg-section-num">05</span>
              <div>
                <h2 className="bg-section-title">Professional Executive Letterhead System</h2>
                <p className="bg-section-subtitle">
                  International Standard A4 (210 mm x 297 mm) &bull; 100 GSM Archival Laid Cotton &bull; Watermarked &bull; CSS @media print Ready
                </p>
              </div>
            </div>

            {/* Letterhead Action Toolbar */}
            <div className="bg-letterhead-toolbar">
              <button 
                type="button" 
                onClick={() => setLetterheadEditable(!letterheadEditable)}
                className="bg-btn-outline"
              >
                <FileText size={15} />
                <span>{letterheadEditable ? 'Switch to Final View' : 'Edit Memorandum Content'}</span>
              </button>

              <button 
                type="button" 
                onClick={handlePrint}
                className="bg-btn-primary"
              >
                <Printer size={15} />
                <span>Print Official Letterhead (A4)</span>
              </button>
            </div>

            {/* A4 Printable Canvas Container */}
            <div className="bg-a4-canvas-wrapper">
              <div className="bg-a4-sheet" id="printable-letterhead">
                {/* Monogram Watermark Background */}
                <div className="bg-a4-watermark">
                  <svg viewBox="0 0 100 100" className="bg-watermark-svg">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="#A37E2C" strokeWidth="0.8"/>
                    <circle cx="50" cy="50" r="44" fill="none" stroke="#A37E2C" strokeWidth="0.5" strokeDasharray="2,2"/>
                    <path d="M35 65 C35 45, 45 35, 50 35 C55 35, 65 45, 65 65" fill="none" stroke="#A37E2C" strokeWidth="1.5"/>
                    <text x="50" y="58" fontFamily="Cormorant Garamond, serif" fontSize="22" fontWeight="bold" fill="#A37E2C" textAnchor="middle">SM</text>
                  </svg>
                </div>

                {/* Letterhead Header */}
                <div className="bg-lh-header">
                  <div className="bg-lh-header-left">
                    <div className="bg-lh-monogram-box">
                      <svg viewBox="0 0 100 100" width="46" height="46">
                        <circle cx="50" cy="50" r="48" fill="none" stroke="#A37E2C" strokeWidth="1"/>
                        <path d="M35 65 C35 45, 45 35, 50 35 C55 35, 65 45, 65 65" fill="none" stroke="#A37E2C" strokeWidth="2"/>
                        <text x="50" y="58" fontFamily="Cormorant Garamond, serif" fontSize="22" fontWeight="bold" fill="#A37E2C" textAnchor="middle">SM</text>
                      </svg>
                    </div>
                    <div>
                      <h2 className="bg-lh-name">SHABBIR MUSTAFA HEERA</h2>
                      <p className="bg-lh-sub">Office of Administration &amp; Digital Operations &bull; Dawat-e-Hadiyah</p>
                    </div>
                  </div>

                  <div className="bg-lh-header-right">
                    <div className="bg-lh-meta-item">
                      <span className="bg-lh-meta-k">Date:</span>
                      <span className="bg-lh-meta-v">{letterheadData.date}</span>
                    </div>
                    <div className="bg-lh-meta-item">
                      <span className="bg-lh-meta-k">Ref No:</span>
                      <span className="bg-lh-meta-v">{letterheadData.refNo}</span>
                    </div>
                    <div className="bg-lh-meta-item">
                      <span className="bg-lh-meta-k">Security:</span>
                      <span className="bg-lh-meta-v">{letterheadData.classification}</span>
                    </div>
                  </div>
                </div>

                {/* Dual-Tone Decorative Hairline Rule */}
                <div className="bg-lh-dual-divider">
                  <div className="bg-lh-divider-gold" />
                  <div className="bg-lh-divider-gray" />
                </div>

                {/* Letterhead Body Grid */}
                <div className="bg-lh-body">
                  {letterheadEditable ? (
                    <div className="bg-lh-edit-form">
                      <div className="bg-form-row">
                        <input 
                          type="text" 
                          value={letterheadData.recipientName} 
                          onChange={(e) => setLetterheadData({...letterheadData, recipientName: e.target.value})}
                          className="bg-lh-input bold"
                          placeholder="Recipient Name"
                        />
                        <input 
                          type="text" 
                          value={letterheadData.recipientOrg} 
                          onChange={(e) => setLetterheadData({...letterheadData, recipientOrg: e.target.value})}
                          className="bg-lh-input"
                          placeholder="Recipient Organization"
                        />
                      </div>
                      <input 
                        type="text" 
                        value={letterheadData.subject} 
                        onChange={(e) => setLetterheadData({...letterheadData, subject: e.target.value})}
                        className="bg-lh-input subject"
                        placeholder="Subject Line"
                      />
                      <textarea 
                        rows={3} 
                        value={letterheadData.bodyParagraph1} 
                        onChange={(e) => setLetterheadData({...letterheadData, bodyParagraph1: e.target.value})}
                        className="bg-lh-textarea"
                      />
                      <textarea 
                        rows={3} 
                        value={letterheadData.bodyParagraph2} 
                        onChange={(e) => setLetterheadData({...letterheadData, bodyParagraph2: e.target.value})}
                        className="bg-lh-textarea"
                      />
                      <textarea 
                        rows={3} 
                        value={letterheadData.bodyParagraph3} 
                        onChange={(e) => setLetterheadData({...letterheadData, bodyParagraph3: e.target.value})}
                        className="bg-lh-textarea"
                      />
                    </div>
                  ) : (
                    <div className="bg-lh-content">
                      <div className="bg-lh-recipient-block">
                        <strong>To:</strong> {letterheadData.recipientName}<br />
                        {letterheadData.recipientOrg}<br />
                        {letterheadData.recipientAddress}
                      </div>

                      <div className="bg-lh-subject-line">
                        <strong>SUBJECT:</strong> {letterheadData.subject}
                      </div>

                      <p className="bg-lh-p">{letterheadData.bodyParagraph1}</p>
                      <p className="bg-lh-p">{letterheadData.bodyParagraph2}</p>
                      <p className="bg-lh-p">{letterheadData.bodyParagraph3}</p>

                      <div className="bg-lh-signoff">
                        <div className="bg-lh-seal-box">
                          <svg viewBox="0 0 100 100" width="55" height="55">
                            <circle cx="50" cy="50" r="46" fill="none" stroke="#C84B53" strokeWidth="1.2" strokeDasharray="3,2"/>
                            <text x="50" y="44" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="bold" fill="#C84B53" textAnchor="middle">DAWAT-E-HADIYAH</text>
                            <text x="50" y="55" fontFamily="Cormorant Garamond, serif" fontSize="13" fontWeight="bold" fill="#C84B53" textAnchor="middle">APPROVED</text>
                            <text x="50" y="65" fontFamily="Inter, sans-serif" fontSize="6.5" fill="#C84B53" textAnchor="middle">DIRECTORATE</text>
                          </svg>
                        </div>
                        <div className="bg-lh-sig-text">
                          <span className="bg-lh-sig-name">{letterheadData.signatoryName}</span>
                          <span className="bg-lh-sig-native">{letterheadData.signatoryNative}</span>
                          <span className="bg-lh-sig-role">{letterheadData.signatoryTitle}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Letterhead Footer Architecture */}
                <div className="bg-lh-footer">
                  <div className="bg-lh-footer-divider" />
                  <div className="bg-lh-footer-cols">
                    <div className="bg-lh-f-col">
                      <span className="bg-lh-f-title">Headquarters</span>
                      <span>Badri Mahal, Fort</span>
                      <span>Mumbai, MH 400001, India</span>
                    </div>
                    <div className="bg-lh-f-col">
                      <span className="bg-lh-f-title">Direct Inquiries</span>
                      <span>Email: shabbirmaanak@gmail.com</span>
                      <span>Web: www.shabbirmaanak.com</span>
                    </div>
                    <div className="bg-lh-f-col">
                      <span className="bg-lh-f-title">Institutional Directorate</span>
                      <span>Department of Well-being of Women &amp; Children</span>
                      <span>Dawat-e-Hadiyah</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 6: Boutique Gifting Bag & Monogram Guidelines ─── */}
        <section id="gifting-bag" className="bg-section bg-section-light">
          <div className="bg-container">
            <div className="bg-section-heading-box">
              <span className="bg-section-num">06</span>
              <div>
                <h2 className="bg-section-title">Boutique Gifting Bag &amp; Luxury Packaging System</h2>
                <p className="bg-section-subtitle">
                  320 GSM Rigid Bleached White Kraft Paper &bull; Matte Cream Soft-Touch Laminate &bull; 3D Sculpted Embossed Gold Foil
                </p>
              </div>
            </div>

            <div className="bg-bag-showcase-grid">
              {/* Bag Visual Mockup Card */}
              <div className="bg-bag-mockup-card">
                <div className="bg-bag-canvas">
                  {/* Ribbon Handles */}
                  <div className="bg-bag-handles">
                    <div className="bg-bag-ribbon-loop" />
                  </div>

                  {/* Bag Front Surface */}
                  <div className="bg-bag-surface">
                    <div className="bg-bag-eyelets">
                      <span className="bg-bag-eyelet" />
                      <span className="bg-bag-eyelet" />
                    </div>

                    <div className="bg-bag-branding">
                      <div className="bg-bag-embossed-monogram">
                        <svg viewBox="0 0 100 100" width="90" height="90">
                          <circle cx="50" cy="50" r="48" fill="none" stroke="#A37E2C" strokeWidth="1.5"/>
                          <circle cx="50" cy="50" r="44" fill="none" stroke="#A37E2C" strokeWidth="0.8" strokeDasharray="1.5,1.5"/>
                          <path d="M35 65 C35 45, 45 35, 50 35 C55 35, 65 45, 65 65" fill="none" stroke="#A37E2C" strokeWidth="2.5"/>
                          <text x="50" y="58" fontFamily="Cormorant Garamond, serif" fontSize="24" fontWeight="bold" fill="#A37E2C" textAnchor="middle">SM</text>
                        </svg>
                      </div>

                      <div className="bg-bag-gold-text">SHABBIR MUSTAFA HEERA</div>
                      <div className="bg-bag-gold-sub">MULLA SHABBIR SHK MUSTAFA BH MAANAK</div>
                    </div>

                    <div className="bg-bag-base-fold" />
                  </div>
                </div>
              </div>

              {/* Technical Packaging Specifications */}
              <div className="bg-bag-specs-card">
                <h3 className="bg-bag-specs-heading">Packaging Engineering Specifications</h3>
                
                <div className="bg-spec-list">
                  <div className="bg-spec-item">
                    <strong>Material:</strong> 320 GSM Rigid Bleached White Kraft Paper with Matte Cream Soft-Touch Laminate.
                  </div>
                  <div className="bg-spec-item">
                    <strong>Dimensions:</strong> Medium Luxury Gift Bag (240 mm W x 280 mm H x 100 mm D).
                  </div>
                  <div className="bg-spec-item">
                    <strong>Handles:</strong> 25 mm Black Ribbed Herringbone / Cotton Twill Ribbon with gunmetal eyelet reinforcement.
                  </div>
                  <div className="bg-spec-item">
                    <strong>Branding Application:</strong> Center-aligned 85 mm diameter "SM" monogram rendered in Sculpted 3D Multi-Level Embossing and Kurz Matte Antique Gold Foil (#A37E2C).
                  </div>
                  <div className="bg-spec-item">
                    <strong>Typography Below Emblem:</strong> SHABBIR MUSTAFA HEERA in 10pt all-caps tracked gold foil.
                  </div>
                  <div className="bg-spec-item">
                    <strong>Interior Lining:</strong> Custom monochrome micro-pattern featuring repeating geometric gold stars on midnight charcoal tissue paper.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 7: Brand Governance & Application Standards ─── */}
        <section id="governance" className="bg-section">
          <div className="bg-container">
            <div className="bg-section-heading-box">
              <span className="bg-section-num">07</span>
              <div>
                <h2 className="bg-section-title">Brand Governance &amp; Application Standards</h2>
                <p className="bg-section-subtitle">Strict compliance rules for digital assets, print reproductions, and agentic workflows.</p>
              </div>
            </div>

            <div className="bg-gov-grid">
              {/* Clear Space Rule */}
              <div className="bg-gov-card">
                <div className="bg-gov-icon-title">
                  <Shield size={20} className="bg-gov-icon" />
                  <h3>Clear Space &amp; Exclusion Zone</h3>
                </div>
                <p>The monogram emblem must always maintain an exclusion zone equal to the height of the letter "S" on all four perimeter sides to preserve institutional authority.</p>
                <div className="bg-clear-space-diagram">
                  <div className="bg-clear-box-outer">
                    <span className="bg-clear-label top">&uarr; Height of "S"</span>
                    <span className="bg-clear-label left">&larr; "S"</span>
                    <div className="bg-clear-box-inner">
                      <span className="bg-clear-monogram-sample">SM</span>
                    </div>
                    <span className="bg-clear-label right">"S" &rarr;</span>
                    <span className="bg-clear-label bottom">&darr; Height of "S"</span>
                  </div>
                </div>
              </div>

              {/* Minimum Reproduction Sizes */}
              <div className="bg-gov-card">
                <div className="bg-gov-icon-title">
                  <Layers size={20} className="bg-gov-icon" />
                  <h3>Minimum Reproduction Sizes</h3>
                </div>
                <div className="bg-gov-rules-list">
                  <div className="bg-gov-rule-item">
                    <strong>Print Monogram:</strong> Minimum 15 mm width for hot foil / debossing; 12 mm for digital offset.
                  </div>
                  <div className="bg-gov-rule-item">
                    <strong>Digital Favicon:</strong> 32px x 32px simplified monogram mark without outer filigree.
                  </div>
                  <div className="bg-gov-rule-item">
                    <strong>Color Contrast:</strong> Text on Warm Cream must always use #111111 or #555555 for WCAG AAA compliance (contrast ratio &gt; 7:1).
                  </div>
                </div>
              </div>

              {/* Prohibited Alterations Checklist */}
              <div className="bg-gov-card full-width">
                <div className="bg-gov-icon-title">
                  <AlertTriangle size={20} className="bg-gov-icon-crimson" />
                  <h3>Prohibited Brand Alterations (Never Permitted)</h3>
                </div>
                <div className="bg-prohibited-grid">
                  <div className="bg-prohib-item">
                    <span className="bg-cross-mark">&times;</span>
                    <div>
                      <strong>No Drop Shadows:</strong> Do not cast artificial soft shadows or blur glows beneath the monogram.
                    </div>
                  </div>
                  <div className="bg-prohib-item">
                    <span className="bg-cross-mark">&times;</span>
                    <div>
                      <strong>No Unauthorized Primaries:</strong> Never recolor the gold monogram with synthetic or neon primaries.
                    </div>
                  </div>
                  <div className="bg-prohib-item">
                    <span className="bg-cross-mark">&times;</span>
                    <div>
                      <strong>No Aspect Ratio Distortion:</strong> Always scale the emblem proportionally with locked 1:1 constraints.
                    </div>
                  </div>
                  <div className="bg-prohib-item">
                    <span className="bg-cross-mark">&times;</span>
                    <div>
                      <strong>No Establishment Year Tags:</strong> Antigravity Directive: Never include establishment year tags or founding date badges in generated components.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 8: Antigravity Implementation Logic & DESIGN.md ─── */}
        <section id="tokens" className="bg-section bg-section-light">
          <div className="bg-container">
            <div className="bg-section-heading-box">
              <span className="bg-section-num">08</span>
              <div>
                <h2 className="bg-section-title">Antigravity Implementation Logic &amp; DESIGN.md Specifications</h2>
                <p className="bg-section-subtitle">System CSS tokens, prompt instructions, and raw technical SVG vector code.</p>
              </div>
            </div>

            <div className="bg-code-cards-grid">
              {/* CSS Design Tokens */}
              <div className="bg-code-box">
                <div className="bg-code-header">
                  <span className="bg-code-title">8.1 DESIGN.md System Tokens (:root)</span>
                  <button 
                    type="button" 
                    onClick={() => copyToClipboard(designTokensCSS, 'css-tokens')}
                    className="bg-copy-btn"
                  >
                    {copiedToken === 'css-tokens' ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copiedToken === 'css-tokens' ? 'Copied Tokens' : 'Copy CSS Tokens'}</span>
                  </button>
                </div>
                <pre className="bg-pre-code"><code>{designTokensCSS}</code></pre>
              </div>

              {/* Monogram SVG Technical Vector */}
              <div className="bg-code-box">
                <div className="bg-code-header">
                  <span className="bg-code-title">8.4 Monogram SVG Technical Vector Code</span>
                  <button 
                    type="button" 
                    onClick={() => copyToClipboard(svgMonogramCode, 'svg-code')}
                    className="bg-copy-btn"
                  >
                    {copiedToken === 'svg-code' ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copiedToken === 'svg-code' ? 'Copied SVG' : 'Copy SVG Vector'}</span>
                  </button>
                </div>
                <pre className="bg-pre-code"><code>{svgMonogramCode}</code></pre>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="bg-footer">
        <div className="bg-container bg-footer-inner">
          <div className="bg-footer-left">
            <span className="bg-footer-brand">SHABBIR MUSTAFA HEERA</span>
            <span className="bg-footer-sub">Official Brand Identity &amp; Stationery Architecture System</span>
          </div>
          <div className="bg-footer-right">
            <button type="button" onClick={onBackToPortfolio} className="bg-footer-link">
              Return to Portfolio &rarr;
            </button>
          </div>
        </div>
      </footer>

      {/* ─── Complete High-Fidelity Stylesheet ─── */}
      <style>{`
        /* Root Design System Variables matching Google Doc */
        .bg-brand-portal {
          --bg-surface-cream: #FAF9F6;
          --bg-surface-white: #FFFFFF;
          --bg-text-primary: #111111;
          --bg-text-secondary: #555555;
          --bg-accent-gold: #A37E2C;
          --bg-border-hairline: #EEEEEE;
          --bg-border-medium: #E2DFD7;
          --bg-status-live: #28A745;
          --bg-status-crimson: #C84B53;
          --bg-font-serif: "Cormorant Garamond", "Cinzel", "Playfair Display", Georgia, serif;
          --bg-font-sans: "Inter", "Plus Jakarta Sans", system-ui, sans-serif;
          
          background-color: var(--bg-surface-cream);
          color: var(--bg-text-primary);
          font-family: var(--bg-font-sans);
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
        }

        .bg-container {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ─── Top Bar ─── */
        .bg-top-bar {
          background: #111111;
          color: #ffffff;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 10px 0;
          font-size: 12px;
        }

        .bg-top-bar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .bg-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 9999px;
          padding: 5px 14px;
          font-size: 11.5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .bg-back-btn:hover {
          background: var(--bg-accent-gold);
          border-color: var(--bg-accent-gold);
          color: #111111;
        }

        .bg-top-meta {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .bg-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--bg-status-live);
          box-shadow: 0 0 8px var(--bg-status-live);
        }

        .bg-top-title {
          font-weight: 500;
          color: #e5e5e5;
        }

        .bg-top-ref {
          color: var(--bg-accent-gold);
          font-weight: 600;
        }

        .bg-print-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--bg-accent-gold);
          color: #ffffff;
          border: none;
          border-radius: 9999px;
          padding: 5px 14px;
          font-size: 11.5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .bg-print-btn:hover {
          background: #8b6b23;
        }

        /* ─── Sticky Anchor Navigation ─── */
        .bg-nav-sticky {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(250, 249, 246, 0.94);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--bg-border-hairline);
          padding: 10px 0;
        }

        .bg-nav-inner {
          display: flex;
          align-items: center;
          gap: 16px;
          overflow-x: auto;
          white-space: nowrap;
          scrollbar-width: none;
        }

        .bg-nav-inner::-webkit-scrollbar {
          display: none;
        }

        .bg-nav-item {
          font-size: 12.5px;
          font-weight: 600;
          color: var(--bg-text-secondary);
          text-decoration: none;
          padding: 4px 8px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .bg-nav-item:hover {
          color: var(--bg-text-primary);
          background: rgba(163, 126, 44, 0.08);
        }

        /* ─── Section Formatting ─── */
        .bg-section {
          padding: 60px 0;
          border-bottom: 1px solid var(--bg-border-hairline);
        }

        .bg-section-light {
          background-color: #f5f4ef;
        }

        .bg-section-heading-box {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          margin-bottom: 36px;
        }

        .bg-section-num {
          font-family: var(--bg-font-serif);
          font-size: 32px;
          font-weight: 700;
          color: var(--bg-accent-gold);
          line-height: 1;
        }

        .bg-section-title {
          font-family: var(--bg-font-serif);
          font-size: 26px;
          font-weight: 700;
          color: var(--bg-text-primary);
          letter-spacing: -0.01em;
          margin-bottom: 6px;
        }

        .bg-section-subtitle {
          font-size: 14px;
          color: var(--bg-text-secondary);
          line-height: 1.5;
        }

        /* ─── Hero Overview ─── */
        .bg-header-hero {
          display: flex;
          align-items: center;
          gap: 36px;
          padding: 30px 0;
        }

        .bg-hero-svg-monogram {
          width: 120px;
          height: 120px;
        }

        .bg-eyebrow-pill {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--bg-accent-gold);
          background: rgba(163, 126, 44, 0.1);
          padding: 4px 12px;
          border-radius: 9999px;
          margin-bottom: 12px;
        }

        .bg-doc-title {
          font-family: var(--bg-font-serif);
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 700;
          letter-spacing: 0.04em;
          color: var(--bg-text-primary);
          margin-bottom: 6px;
          line-height: 1.15;
        }

        .bg-native-subtitle {
          font-family: var(--bg-font-serif);
          font-size: 18px;
          font-style: italic;
          color: var(--bg-accent-gold);
          margin-bottom: 10px;
        }

        .bg-hero-role-desc {
          font-size: 15px;
          font-weight: 600;
          color: var(--bg-text-primary);
          margin-bottom: 4px;
        }

        .bg-hero-inst {
          font-size: 13.5px;
          color: var(--bg-text-secondary);
        }

        .bg-quote-card {
          margin-top: 36px;
          background: #ffffff;
          border: 1px solid var(--bg-border-hairline);
          border-left: 4px solid var(--bg-accent-gold);
          border-radius: 12px;
          padding: 24px 28px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
        }

        .bg-quote-text {
          font-family: var(--bg-font-serif);
          font-size: 22px;
          font-style: italic;
          color: var(--bg-text-primary);
          margin-bottom: 14px;
          line-height: 1.4;
        }

        .bg-philosophy-breakdown {
          font-size: 13.5px;
          color: #4a4a4a;
          line-height: 1.65;
        }

        /* ─── Color Grid ─── */
        .bg-colors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
          gap: 18px;
        }

        .bg-color-card {
          background: #ffffff;
          border: 1px solid var(--bg-border-hairline);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .bg-color-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
        }

        .bg-color-swatch {
          height: 110px;
          display: flex;
          align-items: flex-end;
          padding: 12px;
          position: relative;
        }

        .bg-swatch-hex {
          font-family: monospace;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .bg-color-details {
          padding: 16px;
        }

        .bg-color-name {
          font-size: 14.5px;
          font-weight: 700;
          color: var(--bg-text-primary);
          margin-bottom: 4px;
        }

        .bg-color-role {
          font-size: 11.5px;
          color: var(--bg-text-secondary);
          line-height: 1.4;
          margin-bottom: 14px;
          min-height: 32px;
        }

        .bg-color-values {
          display: flex;
          flex-direction: column;
          gap: 6px;
          border-top: 1px dashed var(--bg-border-hairline);
          padding-top: 10px;
        }

        .bg-val-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 11px;
        }

        .bg-val-label {
          font-weight: 600;
          color: var(--bg-text-secondary);
          width: 38px;
        }

        .bg-val-code {
          flex: 1;
          font-family: monospace;
          color: #222;
        }

        .bg-copy-val-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--bg-text-secondary);
          padding: 2px;
          transition: color 0.15s ease;
        }

        .bg-copy-val-btn:hover {
          color: var(--bg-accent-gold);
        }

        /* ─── Typography Columns ─── */
        .bg-type-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 36px;
        }

        .bg-type-card {
          background: #ffffff;
          border: 1px solid var(--bg-border-hairline);
          border-radius: 14px;
          padding: 28px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.02);
        }

        .bg-type-role-badge {
          display: inline-block;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
          color: var(--bg-accent-gold);
          margin-bottom: 10px;
        }

        .bg-font-title {
          font-size: 28px;
          font-weight: 700;
          color: var(--bg-text-primary);
          margin-bottom: 6px;
        }

        .serif-title {
          font-family: var(--bg-font-serif);
        }

        .sans-title {
          font-family: var(--bg-font-sans);
        }

        .bg-font-meta {
          font-size: 12.5px;
          color: var(--bg-text-secondary);
          margin-bottom: 18px;
        }

        .bg-font-alphabet {
          background: #faf9f6;
          border: 1px solid var(--bg-border-hairline);
          border-radius: 8px;
          padding: 16px;
          font-size: 15px;
          line-height: 1.8;
          color: #333333;
          margin-bottom: 16px;
        }

        .serif-specimen {
          font-family: var(--bg-font-serif);
        }

        .sans-specimen {
          font-family: var(--bg-font-sans);
        }

        .bg-font-use {
          font-size: 13px;
          color: #444;
          line-height: 1.5;
        }

        .bg-type-scale-box {
          background: #ffffff;
          border: 1px solid var(--bg-border-hairline);
          border-radius: 14px;
          padding: 28px;
        }

        .bg-scale-heading {
          font-family: var(--bg-font-serif);
          font-size: 20px;
          font-weight: 700;
          color: var(--bg-text-primary);
          margin-bottom: 24px;
        }

        .bg-scale-item {
          padding: 16px 0;
          border-bottom: 1px solid var(--bg-border-hairline);
        }

        .bg-scale-item:last-child {
          border-bottom: none;
        }

        .bg-scale-meta {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 8px;
        }

        .bg-scale-step {
          font-size: 12px;
          font-weight: 700;
          color: var(--bg-accent-gold);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .bg-scale-meta code {
          font-size: 11px;
          color: var(--bg-text-secondary);
          background: #f5f4ef;
          padding: 2px 8px;
          border-radius: 4px;
        }

        /* ─── 3D Visiting Card ─── */
        .bg-card-showcase-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
        }

        .bg-card-action-bar {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .bg-flip-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--bg-text-primary);
          color: #ffffff;
          border: none;
          border-radius: 9999px;
          padding: 9px 22px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
        }

        .bg-flip-toggle-btn:hover {
          background: var(--bg-accent-gold);
          transform: translateY(-1px);
        }

        .bg-card-flip-hint {
          font-size: 12px;
          color: var(--bg-text-secondary);
        }

        .bg-scene-3d {
          width: 480px;
          height: 275px;
          perspective: 1200px;
          cursor: pointer;
        }

        .bg-card-3d {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .bg-card-3d.is-flipped {
          transform: rotateY(180deg);
        }

        .bg-card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 10px;
          background: #FAF9F6;
          border: 1px solid #dcdad3;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12), inset 0 0 0 2px #A37E2C;
          overflow: hidden;
          padding: 12px;
        }

        .bg-debossed-frame {
          width: 100%;
          height: 100%;
          border: 1px dashed rgba(163, 126, 44, 0.35);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .bg-card-front-content {
          text-align: center;
        }

        .bg-card-gold-monogram {
          margin-bottom: 12px;
        }

        .bg-card-front-name {
          font-family: var(--bg-font-serif);
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #A37E2C;
          text-transform: uppercase;
        }

        .bg-card-front-sub {
          font-family: var(--bg-font-sans);
          font-size: 8px;
          letter-spacing: 0.22em;
          color: #888888;
          text-transform: uppercase;
          margin-top: 4px;
        }

        .bg-card-back {
          transform: rotateY(180deg);
          padding: 18px 24px;
        }

        .bg-card-back-frame {
          border: none;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          text-align: left;
        }

        .bg-card-back-name {
          font-family: var(--bg-font-serif);
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #111111;
        }

        .bg-card-back-native {
          font-family: var(--bg-font-serif);
          font-size: 12px;
          font-style: italic;
          color: #A37E2C;
          margin-top: 2px;
        }

        .bg-card-back-role {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #222222;
          text-transform: uppercase;
          margin-top: 6px;
        }

        .bg-card-back-dept {
          font-size: 9.5px;
          color: #666666;
        }

        .bg-card-back-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, #A37E2C 0%, #eeeeee 100%);
          margin: 10px 0;
        }

        .bg-card-back-coords {
          display: flex;
          flex-direction: column;
          gap: 3.5px;
          font-size: 9.5px;
        }

        .bg-coord-line {
          display: flex;
          gap: 6px;
        }

        .bg-coord-label {
          font-weight: 600;
          color: #A37E2C;
          width: 50px;
        }

        .bg-coord-val {
          color: #333333;
        }

        .bg-card-back-watermark {
          position: absolute;
          bottom: 12px;
          right: 12px;
        }

        .bg-card-specs-table {
          width: 100%;
          max-width: 680px;
          background: #ffffff;
          border: 1px solid var(--bg-border-hairline);
          border-radius: 10px;
          padding: 16px 20px;
        }

        .bg-spec-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 8px 0;
          border-bottom: 1px solid var(--bg-border-hairline);
          font-size: 13px;
        }

        .bg-spec-row:last-child {
          border-bottom: none;
        }

        .bg-spec-key {
          font-weight: 700;
          color: var(--bg-text-primary);
          width: 100px;
          flex-shrink: 0;
        }

        .bg-spec-val {
          color: #4a4a4a;
        }

        /* ─── A4 Executive Letterhead ─── */
        .bg-letterhead-toolbar {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          margin-bottom: 24px;
        }

        .bg-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          color: var(--bg-text-primary);
          border: 1px solid var(--bg-border-medium);
          border-radius: 9999px;
          padding: 8px 18px;
          font-size: 12.5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .bg-btn-outline:hover {
          background: #f7f6f2;
          border-color: var(--bg-accent-gold);
        }

        .bg-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #111111;
          color: #ffffff;
          border: none;
          border-radius: 9999px;
          padding: 8px 18px;
          font-size: 12.5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .bg-btn-primary:hover {
          background: var(--bg-accent-gold);
        }

        .bg-a4-canvas-wrapper {
          display: flex;
          justify-content: center;
        }

        .bg-a4-sheet {
          width: 794px; /* A4 width at 96 DPI */
          min-height: 1123px; /* A4 height at 96 DPI */
          background: #FAF9F6;
          border: 1px solid #d8d6cf;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.08);
          padding: 60px 55px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .bg-a4-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 320px;
          height: 320px;
          opacity: 0.035;
          pointer-events: none;
          z-index: 1;
        }

        .bg-watermark-svg {
          width: 100%;
          height: 100%;
        }

        .bg-lh-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }

        .bg-lh-header-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .bg-lh-name {
          font-family: var(--bg-font-serif);
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #111111;
        }

        .bg-lh-sub {
          font-size: 11px;
          color: var(--bg-text-secondary);
          margin-top: 3px;
        }

        .bg-lh-header-right {
          text-align: right;
          font-size: 11px;
        }

        .bg-lh-meta-item {
          display: flex;
          justify-content: flex-end;
          gap: 6px;
          margin-bottom: 2px;
        }

        .bg-lh-meta-k {
          font-weight: 700;
          color: var(--bg-accent-gold);
        }

        .bg-lh-meta-v {
          color: #333333;
        }

        .bg-lh-dual-divider {
          margin: 18px 0 28px 0;
          position: relative;
          z-index: 2;
        }

        .bg-lh-divider-gold {
          height: 1.5px;
          background: var(--bg-accent-gold);
          width: 100%;
        }

        .bg-lh-divider-gray {
          height: 0.5px;
          background: #eeeeee;
          width: 100%;
        }

        .bg-lh-body {
          flex: 1;
          position: relative;
          z-index: 2;
        }

        .bg-lh-recipient-block {
          font-size: 12px;
          color: #222222;
          line-height: 1.6;
          margin-bottom: 22px;
        }

        .bg-lh-subject-line {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #111111;
          border-bottom: 1px solid var(--bg-border-hairline);
          padding-bottom: 8px;
          margin-bottom: 22px;
        }

        .bg-lh-p {
          font-size: 12px;
          line-height: 1.7;
          color: #2b2b2b;
          margin-bottom: 16px;
          text-align: justify;
        }

        .bg-lh-signoff {
          margin-top: 40px;
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .bg-lh-sig-text {
          display: flex;
          flex-direction: column;
        }

        .bg-lh-sig-name {
          font-family: var(--bg-font-serif);
          font-size: 16px;
          font-weight: 700;
          color: #111111;
        }

        .bg-lh-sig-native {
          font-family: var(--bg-font-serif);
          font-size: 12px;
          font-style: italic;
          color: var(--bg-accent-gold);
        }

        .bg-lh-sig-role {
          font-size: 11px;
          color: var(--bg-text-secondary);
          margin-top: 2px;
        }

        .bg-lh-footer {
          position: relative;
          z-index: 2;
          margin-top: 30px;
        }

        .bg-lh-footer-divider {
          height: 0.5px;
          background: #dddddd;
          margin-bottom: 14px;
        }

        .bg-lh-footer-cols {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 16px;
          font-size: 10px;
          color: #666666;
          line-height: 1.5;
        }

        .bg-lh-f-title {
          display: block;
          font-weight: 700;
          color: var(--bg-accent-gold);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 2px;
        }

        .bg-lh-edit-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .bg-lh-input {
          padding: 8px 12px;
          border: 1px solid #d1cfc7;
          border-radius: 6px;
          font-size: 12px;
          background: #ffffff;
        }

        .bg-lh-input.bold {
          font-weight: 700;
        }

        .bg-lh-input.subject {
          font-weight: 700;
          color: #111111;
        }

        .bg-lh-textarea {
          padding: 8px 12px;
          border: 1px solid #d1cfc7;
          border-radius: 6px;
          font-size: 12px;
          font-family: inherit;
          line-height: 1.6;
          background: #ffffff;
        }

        /* ─── Gifting Bag ─── */
        .bg-bag-showcase-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: center;
        }

        .bg-bag-mockup-card {
          display: flex;
          justify-content: center;
          padding: 24px;
        }

        .bg-bag-canvas {
          width: 280px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .bg-bag-handles {
          width: 140px;
          height: 60px;
          position: relative;
        }

        .bg-bag-ribbon-loop {
          width: 100%;
          height: 100%;
          border: 10px solid #111111;
          border-bottom: none;
          border-radius: 60px 60px 0 0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .bg-bag-surface {
          width: 100%;
          height: 330px;
          background: #FAF9F6;
          border: 1px solid #dcd9d0;
          border-radius: 4px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15), inset 0 0 20px rgba(0, 0, 0, 0.02);
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .bg-bag-eyelets {
          width: 140px;
          display: flex;
          justify-content: space-between;
        }

        .bg-bag-eyelet {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #111111;
          border: 2px solid #555555;
          box-shadow: inset 0 1px 3px rgba(0,0,0,0.8);
        }

        .bg-bag-branding {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .bg-bag-embossed-monogram {
          margin-bottom: 16px;
          filter: drop-shadow(0 2px 4px rgba(163, 126, 44, 0.3));
        }

        .bg-bag-gold-text {
          font-family: var(--bg-font-serif);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: #A37E2C;
          text-transform: uppercase;
        }

        .bg-bag-gold-sub {
          font-size: 7.5px;
          letter-spacing: 0.14em;
          color: #777777;
          margin-top: 4px;
        }

        .bg-bag-base-fold {
          width: 100%;
          height: 1px;
          background: #e2ded5;
        }

        .bg-bag-specs-card {
          background: #ffffff;
          border: 1px solid var(--bg-border-hairline);
          border-radius: 14px;
          padding: 28px;
        }

        .bg-bag-specs-heading {
          font-family: var(--bg-font-serif);
          font-size: 20px;
          font-weight: 700;
          color: var(--bg-text-primary);
          margin-bottom: 20px;
        }

        .bg-spec-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .bg-spec-item {
          font-size: 13px;
          line-height: 1.6;
          color: #444444;
          border-bottom: 1px solid var(--bg-border-hairline);
          padding-bottom: 10px;
        }

        .bg-spec-item:last-child {
          border-bottom: none;
        }

        /* ─── Governance ─── */
        .bg-gov-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .bg-gov-card {
          background: #ffffff;
          border: 1px solid var(--bg-border-hairline);
          border-radius: 14px;
          padding: 24px;
        }

        .bg-gov-card.full-width {
          grid-column: span 2;
        }

        .bg-gov-icon-title {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .bg-gov-icon-title h3 {
          font-family: var(--bg-font-serif);
          font-size: 18px;
          font-weight: 700;
          color: var(--bg-text-primary);
          margin: 0;
        }

        .bg-gov-icon {
          color: var(--bg-accent-gold);
        }

        .bg-gov-icon-crimson {
          color: var(--bg-status-crimson);
        }

        .bg-clear-space-diagram {
          margin-top: 20px;
          display: flex;
          justify-content: center;
        }

        .bg-clear-box-outer {
          border: 1px dashed var(--bg-accent-gold);
          padding: 28px;
          position: relative;
          background: rgba(163, 126, 44, 0.03);
          border-radius: 6px;
        }

        .bg-clear-box-inner {
          border: 1px solid var(--bg-accent-gold);
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
        }

        .bg-clear-monogram-sample {
          font-family: var(--bg-font-serif);
          font-size: 26px;
          font-weight: 700;
          color: var(--bg-accent-gold);
        }

        .bg-clear-label {
          position: absolute;
          font-size: 9px;
          font-weight: 700;
          color: var(--bg-accent-gold);
          letter-spacing: 0.05em;
        }

        .bg-clear-label.top { top: 6px; left: 50%; transform: translateX(-50%); }
        .bg-clear-label.bottom { bottom: 6px; left: 50%; transform: translateX(-50%); }
        .bg-clear-label.left { left: 6px; top: 50%; transform: translateY(-50%); }
        .bg-clear-label.right { right: 6px; top: 50%; transform: translateY(-50%); }

        .bg-gov-rules-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 13px;
          line-height: 1.55;
          color: #444;
        }

        .bg-prohibited-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 10px;
        }

        .bg-prohib-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: #4a4a4a;
          line-height: 1.5;
        }

        .bg-cross-mark {
          font-size: 18px;
          font-weight: 800;
          color: var(--bg-status-crimson);
          line-height: 1;
        }

        /* ─── Code Boxes ─── */
        .bg-code-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .bg-code-box {
          background: #111111;
          color: #f5f5f5;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .bg-code-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 18px;
          background: #1c1c1c;
          border-bottom: 1px solid #2e2e2e;
        }

        .bg-code-title {
          font-size: 12px;
          font-weight: 600;
          color: var(--bg-accent-gold);
        }

        .bg-copy-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border: none;
          border-radius: 6px;
          padding: 4px 10px;
          font-size: 11px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .bg-copy-btn:hover {
          background: var(--bg-accent-gold);
          color: #111111;
        }

        .bg-pre-code {
          padding: 18px;
          margin: 0;
          font-family: monospace;
          font-size: 11.5px;
          line-height: 1.6;
          overflow-x: auto;
          color: #e5e5e5;
        }

        /* ─── Footer ─── */
        .bg-footer {
          background: #111111;
          color: #ffffff;
          padding: 30px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .bg-footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .bg-footer-brand {
          display: block;
          font-family: var(--bg-font-serif);
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #ffffff;
        }

        .bg-footer-sub {
          display: block;
          font-size: 11px;
          color: #888888;
          margin-top: 4px;
        }

        .bg-footer-link {
          background: none;
          border: none;
          color: var(--bg-accent-gold);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .bg-footer-link:hover {
          color: #ffffff;
        }

        /* ─── Responsive Media Queries ─── */
        @media (max-width: 860px) {
          .bg-header-hero {
            flex-direction: column;
            text-align: center;
          }
          .bg-type-columns, .bg-bag-showcase-grid, .bg-gov-grid, .bg-code-cards-grid {
            grid-template-columns: 1fr;
          }
          .bg-gov-card.full-width {
            grid-column: span 1;
          }
          .bg-prohibited-grid {
            grid-template-columns: 1fr;
          }
          .bg-scene-3d {
            width: 100%;
            max-width: 440px;
          }
          .bg-a4-sheet {
            width: 100%;
            min-height: auto;
            padding: 30px 20px;
          }
        }

        /* ─── Print Stylesheet (@media print) ─── */
        @media print {
          body {
            background: #ffffff !important;
            color: #000000 !important;
          }
          .bg-top-bar, .bg-nav-sticky, .bg-letterhead-toolbar, .bg-footer, .bg-card-action-bar, .bg-copy-btn, .bg-copy-val-btn {
            display: none !important;
          }
          .bg-a4-sheet {
            box-shadow: none !important;
            border: none !important;
            width: 100% !important;
            height: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
