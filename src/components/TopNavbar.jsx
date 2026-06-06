import React from 'react';
import { Search, Menu } from 'lucide-react';

function TopNavbar({ activeTab, onTabChange }) {
  return (
    <header className="mindnote-topnav">
      <div className="topnav-logo">
        <div className="topnav-logo__icon">M</div>
        <span>MindNote</span>
      </div>

      <div className="topnav-tabs">
        {['semua', 'aktif', 'arsip'].map((tab) => (
          <button
            key={tab}
            className={`topnav-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => onTabChange(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {activeTab === tab && <span className="topnav-tab__dot" />}
          </button>
        ))}
      </div>

      <div className="topnav-actions">
        <button className="topnav-icon-btn">
          <Search size={20} />
        </button>
        <button className="topnav-icon-btn">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}

export default TopNavbar;
