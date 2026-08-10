import React from 'react';

export default function TabNav({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="vcard-navbar" aria-label="Portfolio Sections Navigation">
      <ul className="vcard-nav-list">
        {tabs.map((tab) => (
          <li key={tab.id} className="vcard-nav-item">
            <button
              type="button"
              className={`vcard-nav-link ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
