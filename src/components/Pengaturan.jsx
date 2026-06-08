import React, { useState, useEffect } from 'react';
import { User, Moon, Sun, Info, ChevronLeft } from 'lucide-react';

function Pengaturan({ darkMode, onDarkModeToggle, onNavChange, fontSize, onFontSizeChange }) {

  const [nama, setNama] = useState(() => {
    return localStorage.getItem('mindnote_nama') || 'Rangga';
  });
  const [email, setEmail] = useState(() => {
    return localStorage.getItem('mindnote_email') || 'rangga@email.com';
  });
  const [savedMessage, setSavedMessage] = useState('');

  const handleSimpan = () => {
    localStorage.setItem('mindnote_nama', nama);
    localStorage.setItem('mindnote_email', email);
    window.dispatchEvent(new Event('storage'));
    setSavedMessage('Profil berhasil disimpan!');
    setTimeout(() => setSavedMessage(''), 2500);
  };

  return (
    <div className="pengaturan-page">

      <div className="pengaturan-header">
        <button
          className="pengaturan-back"
          onClick={() => onNavChange('aktif')}
          aria-label="Kembali"
        >
          <ChevronLeft size={20} />
          <span>Kembali</span>
        </button>
        <div className="pengaturan-breadcrumb">
          <span className="pengaturan-breadcrumb__home">MindNote</span>
          <span className="pengaturan-breadcrumb__sep">/</span>
          <span className="pengaturan-breadcrumb__current">Pengaturan</span>
        </div>
      </div>

      <h1 className="pengaturan-title">Pengaturan</h1>

      <div className="pengaturan-cards">

        <section className="pengaturan-card">
          <div className="pengaturan-card__header">
            <User size={20} />
            <h2>Profil Saya</h2>
          </div>

          <div className="pengaturan-field">
            <label className="pengaturan-field__label">Nama</label>
            <input
              className="pengaturan-field__input"
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Nama lengkap"
            />
          </div>

          <div className="pengaturan-field">
            <label className="pengaturan-field__label">Email</label>
            <input
              className="pengaturan-field__input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Alamat email"
            />
          </div>

          {savedMessage && (
            <p className="pengaturan-success">{savedMessage}</p>
          )}

          <button
            className="pengaturan-save-btn btn-brand"
            onClick={handleSimpan}
          >
            Simpan Profil
          </button>
        </section>

        <section className="pengaturan-card">
          <div className="pengaturan-card__header">
            {darkMode ? <Moon size={20} /> : <Sun size={20} />}
            <h2>Tampilan</h2>
          </div>

          <div className="pengaturan-toggle-row">
            <span className="pengaturan-toggle-row__label">Mode Gelap</span>
            <button
              className={`pengaturan-toggle ${darkMode ? 'active' : ''}`}
              onClick={onDarkModeToggle}
              aria-label="Toggle dark mode"
            >
              <span className="pengaturan-toggle__thumb" />
            </button>
          </div>

          <div className="pengaturan-fontsize">
            <label className="pengaturan-field__label">Ukuran Huruf</label>
            <div className="pengaturan-fontsize__options">
              {[
                { value: 'kecil', label: 'Kecil', px: '13px', preview: 'Aa' },
                { value: 'sedang', label: 'Sedang', px: '15px', preview: 'Aa' },
                { value: 'besar', label: 'Besar', px: '18px', preview: 'Aa' },
              ].map((option) => (
                <button
                  key={option.value}
                  className={`pengaturan-fontsize__card ${fontSize === option.value ? 'active' : ''}`}
                  onClick={() => onFontSizeChange(option.value)}
                  aria-label={`Ukuran huruf ${option.label}`}
                >
                  <span
                    className="pengaturan-fontsize__preview"
                    style={{ fontSize: option.px }}
                  >
                    {option.preview}
                  </span>
                  <span className="pengaturan-fontsize__label">{option.label}</span>
                  <span className="pengaturan-fontsize__px">{option.px}</span>
                </button>
              ))}
            </div>
          </div>

          <p className="pengaturan-hint">
            {darkMode
              ? 'Mode gelap aktif — Sidebar, catatan, dan footer menggunakan tema gelap.'
              : 'Mode terang aktif — tampilan default earthy warm.'}
          </p>
        </section>

        <section className="pengaturan-card">
          <div className="pengaturan-card__header">
            <Info size={20} />
            <h2>Tentang MindNote</h2>
          </div>
          <div className="pengaturan-about">
            <p className="pengaturan-about__version">Versi 2.1.0</p>
            <p className="pengaturan-about__desc">
              Aplikasi catatan pribadi berbasis React. Dibuat sebagai submission
              Dicoding Advanced dan redesign portofolio.
            </p>
            <div className="pengaturan-about__links">
              <a href="#" className="pengaturan-about__link">Kebijakan Privasi</a>
              <a href="#" className="pengaturan-about__link">Dukungan</a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Pengaturan;