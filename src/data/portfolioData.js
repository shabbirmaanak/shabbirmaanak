import { supabase } from '../lib/supabase.js';

export const defaultPortfolioData = {
  personalInfo: {
    name: "Shabbir Maanak",
    initials: "SM",
    role: "Assistant Administrator",
    positioning: "Research & Development | IT & Multimedia | Operations",
    subPositioning: "Technology + Creativity + Communication + Operations",
    tagline: "Building technology, media and workflows that create lasting impact.",
    bio: "Shabbir works across research, technology, multimedia and operations to develop practical solutions, improve workflows and create meaningful communication. Combining technological innovation with creative storytelling and disciplined operational execution.",
    email: "shabbirmaanak@gmail.com",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra, India",
    linkedin: "https://linkedin.com/in/shabbirmaanak",
    instagram: "https://instagram.com/shabbirmaanak",
    github: "https://github.com/shabbirmaanak",
    organization: "Dawat-e-Hadiyah",
    department: "Department of Well-being of Women and Children",
    experienceSince: "2019",
    resumeUrl: "#resume-preview",
  },

  philosophy: {
    quote: "Great technology is invisible. Great design is understood without explanation.",
    subtext: "Technology should simplify lives. Communication should connect people. Design should have purpose.",
    author: "Shabbir Maanak",
    principles: [
      {
        title: "Technology Simplification",
        description: "Deploying tools and automated systems that remove friction rather than adding complexity."
      },
      {
        title: "Purposeful Communication",
        description: "Crafting narratives and media that resonate with authentic human emotion and clear calls to action."
      },
      {
        title: "Operational Excellence",
        description: "Structuring scalable, reproducible workflows that empower cross-functional teams to thrive."
      }
    ]
  },

  aboutStats: [
    {
      label: "Since",
      value: "2019",
      subtext: "5+ Years of Dedicated Experience",
      icon: "Calendar"
    },
    {
      label: "Organization",
      value: "Dawat-e-Hadiyah",
      subtext: "Dept. of Well-being of Women & Children",
      icon: "Building2"
    },
    {
      label: "Primary Areas",
      value: "R&D / IT / Ops",
      subtext: "Multi-Disciplinary Synergy",
      icon: "Layers"
    },
    {
      label: "Approach",
      value: "Impact Driven",
      subtext: "Problem-Solving & Scalability",
      icon: "Target"
    }
  ],

  experience: {
    organization: "Dawat-e-Hadiyah",
    department: "Department of Well-being of Women and Children",
    role: "Assistant Administrator",
    period: "2019 — Present",
    location: "Mumbai, India",
    description: "Driving digital transformation, multimedia production, and organizational workflow optimization to amplify departmental outreach and community impact.",
    pillars: [
      {
        title: "Research & Development",
        icon: "Search",
        responsibilities: [
          "Investigating emerging AI technologies and productivity tools to identify practical operational applications.",
          "Testing cutting-edge digital platforms and software to streamline institutional initiatives.",
          "Researching tailored methodologies for community welfare communication and engagement.",
          "Developing prototypes and implementing innovative tech solutions for daily administrative challenges.",
          "Iteratively evaluating and enhancing existing organizational workflows."
        ]
      },
      {
        title: "IT & Multimedia",
        icon: "Film",
        responsibilities: [
          "Spearheading end-to-end graphic design and branding assets for multi-channel community campaigns.",
          "Directing video editing, motion graphics, and audio-visual storytelling for high-visibility programs.",
          "Designing high-stakes executive presentations, annual reports, and visual briefs.",
          "Managing digital communication pipelines, web streams, and interactive portals.",
          "Architecting creative asset repositories to maintain institutional visual consistency."
        ]
      },
      {
        title: "Operations",
        icon: "Cpu",
        responsibilities: [
          "Coordinating inter-departmental operations and executing multi-stakeholder project milestones.",
          "Formulating standard operating procedures (SOPs) and comprehensive technical documentation.",
          "Optimizing digital workflows and administrative databases to minimize manual overhead.",
          "Overseeing rollout and staff onboarding for new digital tools and automated systems.",
          "Monitoring project lifecycles from ideation and requirement mapping to successful deployment."
        ]
      }
    ]
  },

  whatIDo: [
    {
      id: "rd",
      title: "Research & Development",
      category: "Innovation & Strategy",
      icon: "Microscope",
      highlight: "Investigate problems & discover technology-driven solutions",
      description: "Bridging the gap between emerging technological capabilities and practical organizational needs through rigorous exploration, prototyping, and continuous improvement.",
      capabilities: [
        "Emerging Tech & AI Tools Research",
        "Workflow Automation Feasibility Studies",
        "Process Friction Analysis & Improvement",
        "Solution Prototyping & Validation",
        "Digital Transformation Strategy",
        "Iterative System Refinement"
      ]
    },
    {
      id: "multimedia",
      title: "IT & Multimedia",
      category: "Creative Production",
      icon: "Video",
      highlight: "Showcase creative and technical production excellence",
      description: "Delivering visually compelling, technically sound multimedia experiences that communicate complex concepts with clarity, elegance, and emotional resonance.",
      capabilities: [
        "Brand Identity & Graphic Design",
        "High-Impact Video Production & Post",
        "Executive Presentation Design",
        "Digital Content & Visual Assets",
        "Multi-Platform Communication",
        "Creative Direction & Storyboarding"
      ]
    },
    {
      id: "operations",
      title: "Operations & Workflows",
      category: "Execution & Systems",
      icon: "Workflow",
      highlight: "Organizational implementation & workflow optimization",
      description: "Designing resilient systems, frictionless operational workflows, and rigorous documentation that turn strategic objectives into repeatable daily successes.",
      capabilities: [
        "End-to-End Project Coordination",
        "Operational Process Optimization",
        "Digital Tool Implementation & Training",
        "SOPs & Technical Documentation",
        "Resource & Timeline Management",
        "Cross-Functional Team Collaboration"
      ]
    }
  ],

  skillCategories: [
    { id: "all", label: "All Capabilities" },
    { id: "design", label: "Design" },
    { id: "video", label: "Video & Motion" },
    { id: "technology", label: "Technology & AI" },
    { id: "communication", label: "Communication & Ops" }
  ],

  skills: [
    {
      name: "Adobe Photoshop",
      category: "design",
      level: 92,
      experience: "5+ Years",
      tags: ["Digital Imaging", "Retouching", "Compositing", "Visual Assets"],
      highlight: "Advanced raster manipulation & campaign asset production"
    },
    {
      name: "Adobe Illustrator",
      category: "design",
      level: 88,
      experience: "4+ Years",
      tags: ["Vector Art", "Brand Identity", "Iconography", "Typography"],
      highlight: "Precision vector illustration and scalable brand assets"
    },
    {
      name: "Canva Pro",
      category: "design",
      level: 95,
      experience: "5+ Years",
      tags: ["Rapid Prototyping", "Social Media", "Deck Layouts", "Templates"],
      highlight: "Rapid high-velocity collateral and collaborative layouts"
    },
    {
      name: "Figma",
      category: "design",
      level: 82,
      experience: "3+ Years",
      tags: ["UI Wireframes", "Prototyping", "Design Systems", "Components"],
      highlight: "User interface architecture and responsive layouts"
    },
    {
      name: "Adobe Premiere Pro",
      category: "video",
      level: 90,
      experience: "5+ Years",
      tags: ["Video Editing", "Color Grading", "Audio Mixing", "Multi-Cam"],
      highlight: "Full-length documentary and promotional video post-production"
    },
    {
      name: "Adobe After Effects",
      category: "video",
      level: 84,
      experience: "4+ Years",
      tags: ["Motion Graphics", "Kinetic Typography", "Visual FX", "Transitions"],
      highlight: "Dynamic motion graphics, titles, and visual accents"
    },
    {
      name: "AI Tools & LLM Workflows",
      category: "technology",
      level: 92,
      experience: "3+ Years",
      tags: ["Prompt Engineering", "GenAI", "Custom GPTs", "Workflow Augmentation"],
      highlight: "Harnessing modern AI models for research, content, and productivity"
    },
    {
      name: "Workflow Automation",
      category: "technology",
      level: 88,
      experience: "4+ Years",
      tags: ["Zapier / Make", "Batch Processing", "Task Pipelines", "API Integrations"],
      highlight: "Designing automated pipelines connecting disparate tools and databases"
    },
    {
      name: "Microsoft Office 365",
      category: "technology",
      level: 94,
      experience: "6+ Years",
      tags: ["Advanced Excel", "PowerPoint Master", "Word Formatting", "Collaboration"],
      highlight: "Executive presentation decks and analytical spreadsheet modeling"
    },
    {
      name: "Google Workspace Ecosystem",
      category: "technology",
      level: 95,
      experience: "6+ Years",
      tags: ["Docs / Sheets", "Google Forms", "Drive Architecture", "AppSheet"],
      highlight: "Cloud collaboration infrastructure and organizational data collection"
    },
    {
      name: "Research & Synthesis",
      category: "communication",
      level: 92,
      experience: "5+ Years",
      tags: ["Qualitative Analysis", "Comparative Feasibility", "Tech Audits", "Briefs"],
      highlight: "Distilling multifaceted technical problems into actionable executive summaries"
    },
    {
      name: "Public & Digital Communication",
      category: "communication",
      level: 90,
      experience: "5+ Years",
      tags: ["Campaign Messaging", "Community Engagement", "Copywriting", "PR Assets"],
      highlight: "Crafting resonant messages for large institutional audiences"
    },
    {
      name: "Project Management",
      category: "communication",
      level: 89,
      experience: "5+ Years",
      tags: ["Milestone Tracking", "Resource Allocation", "Risk Management", "Coordination"],
      highlight: "Orchestrating concurrent initiatives with predictable, on-time delivery"
    },
    {
      name: "Process Documentation & SOPs",
      category: "communication",
      level: 94,
      experience: "5+ Years",
      tags: ["Standard Operating Procedures", "User Manuals", "Workflow Diagrams"],
      highlight: "Authoring comprehensive operational guides that ensure flawless continuity"
    }
  ],

  projectCategories: [
    { id: "all", label: "All Projects" },
    { id: "multimedia", label: "Multimedia Campaigns" },
    { id: "automation", label: "Workflow Automation" },
    { id: "research", label: "Research Projects" },
    { id: "design", label: "Creative Designs" },
    { id: "tech", label: "Technology Solutions" }
  ],

  projects: [
    {
      id: "welfare-multimedia-campaign",
      title: "Community Well-being Awareness & Multimedia Campaign",
      projectUrl: "",
      category: "multimedia",
      categoryLabel: "Multimedia Campaigns",
      featured: true,
      thumbnailGradient: "linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #312e81 100%)",
      accentColor: "#d4af37",
      shortDesc: "A multi-touchpoint multimedia campaign combining video docuseries, infographic guides, and digital broadcasts for maternal and child health awareness.",
      role: "Lead Creative Producer & Multimedia Coordinator",
      tools: ["Premiere Pro", "After Effects", "Photoshop", "Illustrator", "Google Workspace"],
      outcome: "Expanded outreach by 300% across regional centers with zero communication delays.",
      overview: "An extensive visual communication drive designed to educate families on child development, health screenings, and wellness best practices across diverse community centers.",
      problem: "Previous welfare initiatives relied heavily on dense printed circulars and fragmented text messages, resulting in low engagement rates and frequent misunderstandings of essential guidelines.",
      approach: "Conducted audience research to identify key information friction points. Conceptualized and produced a 6-part bite-sized video series paired with illustrated bilingual infographics, standardized executive slide decks, and automated distribution queues.",
      result: "Achieved over 15,000+ direct views across target community hubs, received unanimous positive feedback from field administrators, and established a reusable multimedia template for subsequent seasonal campaigns.",
      impact: "Transformed passive welfare advisories into an engaging, empathetic digital experience that measurably boosted community event participation and guideline adherence."
    },
    {
      id: "institutional-workflow-automation",
      title: "Automated Administrative Workflow & Reporting System",
      projectUrl: "",
      category: "automation",
      categoryLabel: "Workflow Automation",
      featured: true,
      thumbnailGradient: "linear-gradient(135deg, #111827 0%, #1f2937 50%, #1e1b4b 100%)",
      accentColor: "#e5c05b",
      shortDesc: "End-to-end automated data collection, verification, and real-time dashboard pipeline replacing paper-based reporting across departments.",
      role: "Workflow Architect & Operations Lead",
      tools: ["Google Workspace", "Automation Scripts", "AppSheet", "Excel / Sheets", "AI Synthesizers"],
      outcome: "Reduced weekly administrative consolidation time from 18 hours down to under 30 minutes.",
      overview: "A streamlined digital pipeline that captures operational metrics from field coordinators, validates data automatically, and compiles executive summaries without manual intervention.",
      problem: "Field coordinators submitted varying Excel spreadsheets and physical notes, requiring administrative staff to spend dozens of manual hours weekly sanitizing, consolidating, and creating summary reports.",
      approach: "Designed unified, mobile-friendly data intake forms with strict validation rules. Linked responses into automated spreadsheet formulas and triggered automated PDF summary generators with AI-assisted executive commentary.",
      result: "Eliminated 97% of manual data entry errors, provided senior leadership with live visibility into department operations, and freed up coordinator time for direct beneficiary support.",
      impact: "Pioneered a scalable operational blueprint that was subsequently adopted by 3 adjacent administrative divisions."
    },
    {
      id: "ai-productivity-integration-study",
      title: "Generative AI & Productivity Framework for Administrative Teams",
      projectUrl: "",
      category: "research",
      categoryLabel: "Research Projects",
      featured: true,
      thumbnailGradient: "linear-gradient(135deg, #1e1b4b 0%, #172554 50%, #0369a1 100%)",
      accentColor: "#38bdf8",
      shortDesc: "In-depth research and implementation pilot evaluating generative AI tools for document synthesis, translation, and administrative drafting.",
      role: "R&D Lead Researcher",
      tools: ["LLM Prompt Architectures", "Custom GPTs", "Document Synthesizers", "Notion", "Process Auditing"],
      outcome: "Published 40-page practical AI adoption handbook and trained 25+ staff members.",
      overview: "An applied research study identifying safe, high-leverage generative AI use cases to augment daily administrative correspondence, multilingual document synthesis, and meeting documentation.",
      problem: "Staff faced bottlenecks drafting repetitive official correspondence and synthesizing lengthy conference notes, while lacking guidance on data privacy and ethical AI utilization.",
      approach: "Evaluated 12+ AI tools for compliance, accuracy, and workflow fit. Developed a library of vetted, role-specific prompt templates, step-by-step security protocols, and conducted hands-on interactive workshops.",
      result: "Drafting turnaround for standard official releases dropped by 65%, while translation verification across regional languages improved in both speed and consistency.",
      impact: "Demystified AI for non-technical administrative personnel, turning cutting-edge tech into daily time-saving reality with zero security incidents."
    },
    {
      id: "executive-brand-identity-collateral",
      title: "Departmental Visual Identity & Presentation Suite",
      projectUrl: "",
      category: "design",
      categoryLabel: "Creative Designs",
      featured: false,
      thumbnailGradient: "linear-gradient(135deg, #27272a 0%, #18181b 50%, #713f12 100%)",
      accentColor: "#f59e0b",
      shortDesc: "A complete overhaul of institutional presentation templates, event branding, certificates, and publications adhering to modern luxury minimalism.",
      role: "Lead Visual Designer",
      tools: ["Photoshop", "Illustrator", "PowerPoint", "Figma", "Canva"],
      outcome: "Delivered unified design kit used across 50+ institutional summits and annual reviews.",
      overview: "A comprehensive aesthetic modernization of all internal and external facing visual assets, ensuring high prestige, clarity, and brand consistency.",
      problem: "Disjointed presentation formats, outdated typography, and inconsistent color schemes compromised the professional image of high-level stakeholder presentations.",
      approach: "Created a modular design system incorporating bespoke typography pairings, rich dark/gold color tokens, vector iconography, and reusable slide templates with pre-configured layout grids.",
      result: "Received executive commendation for visual clarity at annual trustee meetings; standardized brand guidelines across all departmental sub-units.",
      impact: "Elevated the perceived prestige of department initiatives and reduced presentation preparation time for executives by half."
    },
    {
      id: "interactive-media-portal",
      title: "Centralized Digital Asset & Resource Distribution Portal",
      projectUrl: "",
      category: "tech",
      categoryLabel: "Technology Solutions",
      featured: false,
      thumbnailGradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #064e3b 100%)",
      accentColor: "#10b981",
      shortDesc: "Web-based asset repository allowing field coordinators across multiple regions to access vetted multimedia assets, guides, and forms on demand.",
      role: "System Designer & Content Manager",
      tools: ["Cloud Storage", "Web Portal", "Figma", "Digital Asset Management", "HTML/CSS"],
      outcome: "Centralized 500+ verified media assets with instant keyword search and role-based permissions.",
      overview: "A responsive, intuitive cloud portal designed for seamless distribution of approved brochures, video masters, and official forms to regional coordinators.",
      problem: "Field units struggled with outdated asset versions shared over ad-hoc chat groups, leading to accidental distribution of superseded campaign materials.",
      approach: "Structured a categorized digital repository with intuitive tagging, download tracking, versioning history, and responsive mobile-first previews.",
      result: "100% elimination of outdated material distribution; coordinator search time reduced from 15 minutes to under 10 seconds.",
      impact: "Secured absolute brand compliance across all geographic locations while empowering field teams with instantaneous access to high-res media."
    },
    {
      id: "process-standardization-handbook",
      title: "Comprehensive Administrative Operations & SOP Manual",
      projectUrl: "",
      category: "automation",
      categoryLabel: "Workflow Automation",
      featured: false,
      thumbnailGradient: "linear-gradient(135deg, #1c1917 0%, #292524 50%, #44403c 100%)",
      accentColor: "#a8a29e",
      shortDesc: "A complete codification of standard operating procedures, role handoffs, event logistics checklists, and emergency communication protocols.",
      role: "Lead Documentarian & Process Consultant",
      tools: ["Process Mapping", "Documentation Suites", "Illustrator", "Google Docs / PDF", "Flowcharts"],
      outcome: "Published 120-page operational bible reducing new staff onboarding time by 70%.",
      overview: "Systematic documentation of every recurring departmental process, from event stage management and VIP protocol to digital archiving and equipment maintenance.",
      problem: "Key operational know-how was held informally by senior staff, causing operational vulnerability when key personnel were unavailable.",
      approach: "Conducted structured interviews with every team lead, mapped end-to-end workflows with visual flowcharts, and compiled step-by-step checklist protocols with clickable resources.",
      result: "Successfully tested during major institutional events with zero procedural oversights; slashed onboarding time for new assistants.",
      impact: "Created permanent institutional memory and a reliable framework for operational continuity."
    }
  ],

  education: [
    {
      degree: "FYBAMMC — Bachelor of Arts in Multimedia and Mass Communication",
      institution: "University of Mumbai",
      period: "Currently Pursuing (First Year)",
      location: "Mumbai, India",
      status: "In Progress",
      description: "Comprehensive academic immersion covering digital media production, mass communication theory, journalism, advertising, public relations, visual aesthetics, and media ethics.",
      highlights: [
        "In-depth focus on visual media storytelling and digital journalism",
        "Exploring the socio-technical dimensions of mass media and communication",
        "Applied projects in scriptwriting, video production, and media design"
      ]
    },
    {
      degree: "Higher Secondary & Foundation Studies",
      institution: "State Board of Secondary & Higher Secondary Education",
      period: "Completed",
      location: "Mumbai, India",
      status: "Completed",
      description: "Rigorous foundational academics emphasizing analytical thinking, language proficiency, computing, and organizational discipline.",
      highlights: [
        "Strong academic track record in communications and computing",
        "Active participation in campus media and organizational committees"
      ]
    }
  ],

  contactInfo: {
    heading: "Let's Build Something Meaningful Together",
    subheading: "Whether you have a digital transformation challenge, a multimedia campaign, or wish to explore a collaboration, I'd love to connect.",
    email: "shabbirmaanak@gmail.com",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra, India",
    availability: "Available for select R&D, Multimedia & Workflow consulting",
    socials: [
      { name: "LinkedIn", url: "https://linkedin.com/in/shabbirmaanak", icon: "Linkedin" },
      { name: "Instagram", url: "https://instagram.com/shabbirmaanak", icon: "Instagram" },
      { name: "GitHub", url: "https://github.com/shabbirmaanak", icon: "Github" },
      { name: "Email", url: "mailto:shabbirmaanak@gmail.com", icon: "Mail" }
    ]
  }
};

export const portfolioData = defaultPortfolioData;

// ============================================
// SUPABASE DATA FUNCTIONS
// ============================================

const STORAGE_KEY = 'shabbir_portfolio_cms_data_v1';

/**
 * Fetch portfolio data from Supabase.
 * Falls back to localStorage → defaultPortfolioData.
 */
export async function fetchPortfolioData() {
  // Try Supabase first
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('portfolio_content')
        .select('data')
        .eq('id', 1)
        .single();

      if (!error && data?.data) {
        const merged = { ...defaultPortfolioData, ...data.data };
        // Cache in localStorage for offline fallback
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(merged)); } catch {}
        return merged;
      }
    } catch (e) {
      console.warn('[Supabase] Fetch failed, trying localStorage fallback:', e.message);
    }
  }

  // Fallback: localStorage
  return getStoredPortfolioDataLocal();
}

/**
 * Save portfolio data to Supabase (upsert).
 * Also caches in localStorage as fallback.
 */
export async function savePortfolioData(newData) {
  // Always cache locally
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(newData)); } catch {}

  if (supabase) {
    const { error } = await supabase
      .from('portfolio_content')
      .upsert({
        id: 1,
        data: newData,
        updated_at: new Date().toISOString()
      }, { onConflict: 'id' });

    if (error) {
      console.error('[Supabase] Save error:', error.message);
      throw new Error('Failed to save to database: ' + error.message);
    }
    return { success: true, source: 'supabase' };
  }

  return { success: true, source: 'localStorage' };
}

/**
 * Reset portfolio data back to defaults.
 */
export async function resetPortfolioData() {
  try { localStorage.removeItem(STORAGE_KEY); } catch {}

  if (supabase) {
    const { error } = await supabase
      .from('portfolio_content')
      .upsert({
        id: 1,
        data: defaultPortfolioData,
        updated_at: new Date().toISOString()
      }, { onConflict: 'id' });

    if (error) {
      console.error('[Supabase] Reset error:', error.message);
    }
  }

  return defaultPortfolioData;
}

/**
 * Submit a contact message to Supabase.
 */
export async function submitContactMessage({ fullname, email, subject, message }) {
  if (supabase) {
    const { error } = await supabase
      .from('contact_messages')
      .insert([{ fullname, email, subject, message }]);

    if (error) {
      console.error('[Supabase] Contact submit error:', error.message);
      throw new Error('Failed to send message: ' + error.message);
    }
    return { success: true, source: 'supabase' };
  }

  // No Supabase — just log
  console.log('[Contact] Message submitted (no DB):', { fullname, email, subject, message });
  return { success: true, source: 'local' };
}

/**
 * Fetch contact messages from Supabase (for admin panel).
 */
export async function fetchContactMessages() {
  if (!supabase) return [];

  const { data, error } = await supabase
    .from('contact_messages')
    .select('*')
    .order('sent_at', { ascending: false });

  if (error) {
    console.error('[Supabase] Fetch messages error:', error.message);
    return [];
  }
  return data || [];
}

// ============================================
// LEGACY localStorage helpers (kept as fallback)
// ============================================

function getStoredPortfolioDataLocal() {
  if (typeof window === 'undefined') return defaultPortfolioData;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        ...defaultPortfolioData,
        ...parsed,
        personalInfo: { ...defaultPortfolioData.personalInfo, ...(parsed.personalInfo || {}) }
      };
    }
  } catch (e) {
    console.error('Error loading stored portfolio data', e);
  }
  return defaultPortfolioData;
}

// Synchronous getter for initial render (before async fetch completes)
export function getStoredPortfolioData() {
  return getStoredPortfolioDataLocal();
}

// Legacy aliases (for backward compat during migration)
export function saveStoredPortfolioData(data) {
  // Fire-and-forget async save
  savePortfolioData(data).catch(e => console.error('Save error:', e));
}

export function resetStoredPortfolioData() {
  resetPortfolioData().catch(e => console.error('Reset error:', e));
  return defaultPortfolioData;
}
