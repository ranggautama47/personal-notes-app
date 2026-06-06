import React from 'react';
import { Search, Menu, BookOpen, FileText, Archive } from 'lucide-react';

function TopNavbar({ activeTab, onTabChange, onSearch, searchKeyword }) {
  const [showSearch, setShowSearch] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);
  const menuRef = React.useRef(null);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }
    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMenu]);

  return (
    <header className="mindnote-topnav">
      <div className="topnav-main-row">

        <div className="topnav-logo">
          <img src="/icons/iconBrand.png" alt="MindNote" width={32} height={32} className="topnav-logo__img" />
          <span className="topnav-logo__text">MindNote</span>
        </div>

        <div className="topnav-center">
          {!showSearch ? (
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
          ) : (
            <div className="topnav-search-inline">
              <Search size={15} className="topnav-search-icon" />
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
                  aria-label="Hapus pencarian"
                >
                  ✕
                </button>
              )}
            </div>
          )}
        </div>

        <div className="topnav-actions">
          <button
            className={`topnav-icon-btn ${showSearch ? 'active' : ''}`}
            onClick={() => {
              setShowSearch(!showSearch);
              if (showSearch) onSearch('');
            }}
            aria-label="Toggle search"
          >
            <Search size={18} />
          </button>
          <button
            className={`topnav-icon-btn ${showMenu ? 'active' : ''}`}
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Menu"
          >
            <Menu size={18} />
          </button>
        </div>

      </div>

      {showMenu && (
        <div className="topnav-dropdown" ref={menuRef}>
          <button className="topnav-dropdown__item" onClick={() => { onTabChange('semua'); setShowMenu(false); }}>
            <BookOpen size={16} />
            <span>Semua Catatan</span>
          </button>
          <button className="topnav-dropdown__item" onClick={() => { onTabChange('aktif'); setShowMenu(false); }}>
            <FileText size={16} />
            <span>Catatan Aktif</span>
          </button>
          <button className="topnav-dropdown__item" onClick={() => { onTabChange('arsip'); setShowMenu(false); }}>
            <Archive size={16} />
            <span>Arsip</span>
          </button>
          <div className="topnav-dropdown__divider" />
          <div className="topnav-dropdown__user">
            <div className="topnav-dropdown__avatar">R</div>
            <div>
              <p className="topnav-dropdown__name">Rangga</p>
              <p className="topnav-dropdown__email">rangga@email.com</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default TopNavbar;
