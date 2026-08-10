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
import { getStoredPortfolioData } from './data/portfolioData';

export default function App() {
  const [data, setData] = useState(() => getStoredPortfolioData());
  const [activeTab, setActiveTab] = useState('about');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

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

  // Otherwise render Public vCard Portfolio
  return (
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
    </div>
  );
}
