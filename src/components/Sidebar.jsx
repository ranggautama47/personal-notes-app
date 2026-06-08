import React from "react";
import { Search, BookOpen, Archive, Settings, User } from "lucide-react";

function Sidebar({ activeNav, onNavChange, onSearch, darkMode, onDarkModeToggle }) {
  const [keyword, setKeyword] = React.useState("");
  const [userName, setUserName] = React.useState(
    () => localStorage.getItem('mindnote_nama') || 'Rangga'
  );
  const [userEmail, setUserEmail] = React.useState(
    () => localStorage.getItem('mindnote_email') || 'rangga@email.com'
  );

  React.useEffect(() => {
    const syncUser = () => {
      setUserName(localStorage.getItem('mindnote_nama') || 'Rangga');
      setUserEmail(localStorage.getItem('mindnote_email') || 'rangga@email.com');
    };
    window.addEventListener('storage', syncUser);
    return () => window.removeEventListener('storage', syncUser);
  }, []);

  const onSearchChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
    onSearch(value);
  };

  return (
    <aside className="mindnote-sidebar">
      <div className="sidebar-logo">
        <img
          src="/icons/iconBrand.png"
          alt="MindNote"
          width={46}
          height={46}
          className="sidebar-logo__img"
          draggable="false"
        />
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
          className={`sidebar-nav__item ${activeNav === "aktif" ? "active" : ""}`}
          onClick={() => onNavChange("aktif")}
        >
          <BookOpen size={18} />
          <span>Catatan Aktif</span>
        </button>
        <button
          className={`sidebar-nav__item ${activeNav === "arsip" ? "active" : ""}`}
          onClick={() => onNavChange("arsip")}
        >
          <Archive size={18} />
          <span>Arsip</span>
        </button>
        <button
          className={`sidebar-nav__item ${activeNav === "pengaturan" ? "active" : ""}`}
          onClick={() => onNavChange("pengaturan")}
        >
          <Settings size={18} />
          <span>Pengaturan</span>
        </button>
      </nav>

      <div className="sidebar-darkmode">
        <span className="sidebar-darkmode__label">Mode Gelap</span>
        <button
          className={`sidebar-darkmode__toggle ${darkMode ? 'active' : ''}`}
          onClick={onDarkModeToggle}
          aria-label="Toggle dark mode"
        >
          <span className="sidebar-darkmode__thumb" />
        </button>
      </div>

      <div className="sidebar-user" onClick={() => onNavChange('pengaturan')} style={{cursor: 'pointer'}}>
        <div className="sidebar-user__avatar">
          <User size={18} />
        </div>
        <div className="sidebar-user__info">
          <span className="sidebar-user__name">{userName}</span>
          <span className="sidebar-user__email">{userEmail}</span>
        </div>
        <Settings size={16} />
      </div>
    </aside>
  );
}

export default Sidebar;
