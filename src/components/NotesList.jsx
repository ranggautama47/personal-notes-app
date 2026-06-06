import React from 'react';
import NoteItem from './NoteItem';

const monthNames = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

function NotesList({ notes, onDelete, onArchive, dataTestId = 'notes-list', searchKeyword = '' }) {
  if (!notes || notes.length === 0) {
    return (
      <div className="notes-list" data-testid={dataTestId}>
        <div
          className="notes-list__empty-message"
          data-testid={`${dataTestId}-empty`}
        >
          <img
            src="/icons/donat.png"
            alt="kosong"
            className="notes-list__empty-img"
          />
          <p>Tidak ada catatan</p>
        </div>
      </div>
    );
  }

  const groups = {};

  notes.forEach((note) => {
    const date = new Date(note.createdAt);
    const year = date.getFullYear();
    const month = date.getMonth();
    const groupKey = `${year}-${String(month + 1).padStart(2, '0')}`;

    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }

    groups[groupKey].push(note);
  });

  const sortedGroupKeys = Object.keys(groups).sort((a, b) => b.localeCompare(a));

  return (
    <div className="notes-list notes-list--grouped" data-testid={dataTestId}>
      {sortedGroupKeys.map((groupKey) => {
        const [year, month] = groupKey.split('-');
        const monthIndex = parseInt(month, 10) - 1;
        const headerText = `${monthNames[monthIndex]} ${year}`;

        return (
          <section
            key={groupKey}
            data-testid={`${groupKey}-group`}
            className="notes-group"
          >
            <div className="notes-group__header">
              <h3 className="notes-group__title">{headerText}</h3>
              <span
                data-testid={`${groupKey}-group-count`}
                className="notes-group__count"
              >
                {groups[groupKey].length} catatan
              </span>
            </div>
            <div className="notes-group__items">
              {groups[groupKey].map((note) => (
                <NoteItem
                  key={note.id}
                  note={note}
                  onDelete={onDelete}
                  onArchive={onArchive}
                  searchKeyword={searchKeyword}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default NotesList;
