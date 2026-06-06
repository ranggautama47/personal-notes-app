import React from 'react';

function HeroBanner({ onAddClick }) {
  return (
    <div className="hero-banner">
      <div className="hero-banner__illustration">
        <img src="/icons/matahari.png" alt="" />
        <img src="/icons/catatan.png" alt="" />
        <img src="/icons/donat.png" alt="" />
      </div>
      <h2>Belum ada catatan</h2>
      <p>Mulai catat ide, pelajaran, atau apapun yang ingin kamu ingat.</p>
      <button className="btn-brand" onClick={onAddClick}>
        Buat Catatan Pertama
      </button>
    </div>
  );
}

export default HeroBanner;
