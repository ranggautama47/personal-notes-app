import React from 'react';
import { Search, BookOpen, Archive, Settings } from 'lucide-react';

function Sidebar({ activeNav, onNavChange, onSearch }) {
  const [keyword, setKeyword] = React.useState('');

  const onSearchChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
    onSearch(value);
  };

  return (
    <aside className="mindnote-sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo__icon">M</div>
        <span className="sidebar-logo__text">MindNote</span>
      </div>

      <div className="sidebar-search">
        <Search size={16} />
        <input
          type="text"
          placeholder="Cari catatan..."
          value={keyword}
          onChange={onSearchChange}
        />
      </div>

      <nav className="sidebar-nav">
        <button
          className={`sidebar-nav__item ${activeNav === 'aktif' ? 'active' : ''}`}
          onClick={() => onNavChange('aktif')}
        >
          <BookOpen size={18} />
          <span>Catatan Aktif</span>
        </button>
        <button
          className={`sidebar-nav__item ${activeNav === 'arsip' ? 'active' : ''}`}
          onClick={() => onNavChange('arsip')}
        >
          <Archive size={18} />
          <span>Arsip</span>
        </button>
        <button className="sidebar-nav__item">
          <Settings size={18} />
          <span>Pengaturan</span>
        </button>
      </nav>

      <div className="sidebar-user">
        <div className="sidebar-user__avatar">A</div>
        <div className="sidebar-user__info">
          <span className="sidebar-user__name">Rangga</span>
          <span className="sidebar-user__email">rangga@email.com</span>
        </div>
        <Settings size={16} />
      </div>
    </aside>
  );
}

export default Sidebar;
