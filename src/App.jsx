import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TabNav from './components/TabNav';
import TabAbout from './components/TabAbout';
import TabResume from './components/TabResume';
import TabPortfolio from './components/TabPortfolio';
import TabSkills from './components/TabSkills';
import TabContact from './components/TabContact';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import AdminDashboard from './components/admin/AdminDashboard';
import EditorialPortfolio from './components/EditorialPortfolio';
import { getStoredPortfolioData, fetchPortfolioData } from './data/portfolioData';

export default function App() {
  // Initialize with localStorage (instant), then hydrate from Supabase
  const [data, setData] = useState(() => getStoredPortfolioData());
  const [activeTab, setActiveTab] = useState('about');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [layoutMode, setLayoutMode] = useState('editorial'); // 'editorial' | 'classic'

  // Fetch data from Supabase on mount
  useEffect(() => {
    let cancelled = false;
    fetchPortfolioData()
      .then((supabaseData) => {
        if (!cancelled) {
          setData(supabaseData);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.warn('[App] Supabase fetch failed, using local data:', err);
        if (!cancelled) setIsLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  // Check URL hash/query on load and when URL changes
  useEffect(() => {
    const checkAdminRoute = () => {
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      const pathname = window.location.pathname.toLowerCase();

      if (hash.includes('admin') || search.includes('admin') || pathname.includes('admin')) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    };

    checkAdminRoute();
    window.addEventListener('hashchange', checkAdminRoute);
    window.addEventListener('popstate', checkAdminRoute);

    return () => {
      window.removeEventListener('hashchange', checkAdminRoute);
      window.removeEventListener('popstate', checkAdminRoute);
    };
  }, []);

  const handleExitAdmin = () => {
    window.location.hash = '';
    if (window.history && window.history.pushState && window.location.pathname.toLowerCase().includes('admin')) {
      window.history.pushState('', document.title, '/');
    }
    setIsAdmin(false);
  };

  // If in Admin Mode (triggered ONLY by URL #admin), render the CMS Dashboard
  if (isAdmin) {
    return (
      <AdminDashboard 
        data={data}
        onUpdateData={(newData) => setData(newData)}
        onExitAdmin={handleExitAdmin}
      />
    );
  }

  // Loading screen while Supabase hydrates
  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
        <p className="loading-text">Loading portfolio…</p>
        <style>{`
          .loading-screen {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: hsl(330, 22%, 7%);
            gap: 18px;
          }
          .loading-spinner {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 3px solid hsla(348, 50%, 35%, 0.3);
            border-top-color: hsl(43, 96%, 64%);
            animation: spin 0.8s linear infinite;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          .loading-text {
            color: hsla(330, 15%, 70%, 0.7);
            font-family: 'Outfit', sans-serif;
            font-size: 14px;
            font-weight: 400;
          }
        `}</style>
      </div>
    );
  }

  // Render Public Portfolio (Editorial by default, with Classic toggle)
  return (
    <>
      {layoutMode === 'editorial' ? (
        <EditorialPortfolio
          data={data}
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      ) : (
        <div className="vcard-app-container">
          <main className="vcard-main-layout">
            {/* Left Sticky Sidebar Profile Card */}
            <Sidebar 
              data={data}
              onOpenResume={() => setIsResumeOpen(true)} 
            />

            {/* Right Main Content Card with Floating Top-Right Tabs */}
            <div className="vcard-right-content">
              <TabNav activeTab={activeTab} onTabChange={setActiveTab} />

              {activeTab === 'about' && <TabAbout data={data} />}
              {activeTab === 'resume' && (
                <TabResume 
                  data={data}
                  onOpenResume={() => setIsResumeOpen(true)} 
                />
              )}
              {activeTab === 'portfolio' && (
                <TabPortfolio 
                  data={data}
                  onSelectProject={(project) => setSelectedProject(project)} 
                />
              )}
              {activeTab === 'skills' && <TabSkills data={data} />}
              {activeTab === 'contact' && <TabContact data={data} />}
            </div>
          </main>
        </div>
      )}

      {/* Floating Theme / Layout Switcher */}
      <aside className="layout-mode-switcher" aria-label="Layout Theme Switcher">
        <button
          type="button"
          onClick={() => setLayoutMode(layoutMode === 'editorial' ? 'classic' : 'editorial')}
          className="switcher-toggle-pill"
          title="Switch between the new Editorial theme and Classic vCard theme"
        >
          <span className="switcher-icon">{layoutMode === 'editorial' ? '✨' : '🌙'}</span>
          <span className="switcher-label">
            Theme: <strong>{layoutMode === 'editorial' ? 'Editorial Luxury' : 'Classic Dark'}</strong>
          </span>
          <span className="switcher-hint">(Click to compare)</span>
        </button>

        <style>{`
          .layout-mode-switcher {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
          }
          .switcher-toggle-pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            background: #11141a;
            color: #ffffff;
            border: 1px solid rgba(212, 175, 55, 0.4);
            border-radius: 9999px;
            font-size: 12px;
            cursor: pointer;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
            transition: all 0.2s ease;
          }
          .switcher-toggle-pill:hover {
            transform: translateY(-2px);
            border-color: #d4af37;
            box-shadow: 0 10px 28px rgba(212, 175, 55, 0.3);
          }
          .switcher-label strong {
            color: #fcd34d;
          }
          .switcher-hint {
            font-size: 10px;
            color: #94a3b8;
          }
          @media (max-width: 640px) {
            .layout-mode-switcher {
              bottom: 15px;
              right: 15px;
            }
            .switcher-hint {
              display: none;
            }
          }
        `}</style>
      </aside>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Printable / Downloadable Resume Modal */}
      {isResumeOpen && (
        <ResumeModal 
          data={data}
          isOpen={isResumeOpen} 
          onClose={() => setIsResumeOpen(false)} 
        />
      )}
    </>
  );
}
