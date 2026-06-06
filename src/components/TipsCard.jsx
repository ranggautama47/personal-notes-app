import React from 'react';
import { LayoutGrid, List } from 'lucide-react';

function TipsCard({ viewMode, onViewChange }) {
  return (
    <div className="tips-card">
      <div className="tips-card__toggle">
        <button
          className={`tips-card__toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
          onClick={() => onViewChange('grid')}
          aria-label="Tampilan grid"
          title="Grid view"
        >
          <LayoutGrid size={18} />
        </button>
        <button
          className={`tips-card__toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
          onClick={() => onViewChange('list')}
          aria-label="Tampilan list"
          title="List view"
        >
          <List size={18} />
        </button>
      </div>

      <div className="tips-card__illustration">
        <img
          src="/icons/catatan.png"
          alt="Catatan"
          className="tips-card__img"
          draggable="false"
        />
        <p className="tips-card__label">Catatan tersimpan aman</p>
      </div>
    </div>
  );
}

export default TipsCard;
