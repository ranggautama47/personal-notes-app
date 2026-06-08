import React from "react";

function Footer() {
  return (
    <footer className="mindnote-footer">
      <div className="mindnote-footer__inner">
        <div className="mindnote-footer__brand">
          <img
            src="/icons/iconBrand.png"
            alt="MindNote"
            width={24}
            height={24}
            draggable="false"
          />
          <span>MindNote</span>
        </div>
        <p>© 2026 MindNote. Semua catatan aman dan terenkripsi. 🔒</p>
      </div>
    </footer>
  );
}

export default Footer;
