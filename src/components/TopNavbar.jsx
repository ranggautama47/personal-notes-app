import React from 'react';
import { Search, Menu } from 'lucide-react';

function TopNavbar({ activeTab, onTabChange, onSearch, searchKeyword }) {
  const [showSearch, setShowSearch] = React.useState(false);

  return (
    <header className="mindnote-topnav">
      <div className="topnav-main-row">
        <div className="topnav-logo">
          <img src="/icons/iconBrand.png" alt="MindNote" width={28} height={28} className="topnav-logo__img" />
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
          <button
            className={`topnav-icon-btn ${showSearch ? 'active' : ''}`}
            onClick={() => setShowSearch(!showSearch)}
            aria-label="Toggle search"
          >
            <Search size={20} />
          </button>
          <button className="topnav-icon-btn" aria-label="Menu">
            <Menu size={20} />
          </button>
        </div>
      </div>

      {showSearch && (
        <div className="topnav-search-row">
          <Search size={16} className="topnav-search-icon" />
          <input
            className="topnav-search-input"
            type="text"
            placeholder="Cari catatan..."
            value={searchKeyword}
            onChange={(e) => onSearch(e.target.value)}
            autoFocus
          />
          {searchKeyword && (
            <button
              className="topnav-search-clear"
              onClick={() => onSearch('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      )}
    </header>
  );
}

export default TopNavbar;
