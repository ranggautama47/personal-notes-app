import React from 'react';

function NoteActionButton({ variant, onClick, isArchived }) {
  if (variant === 'delete') {
    return (
      <button
        className="note-item__delete-button"
        type="button"
        onClick={onClick}
        data-testid="note-item-delete-button"
      >
        Delete
      </button>
    );
  }

  if (variant === 'archive') {
    return (
      <button
        className="note-item__archive-button"
        type="button"
        onClick={onClick}
        data-testid="note-item-archive-button"
      >
        {isArchived ? 'Aktifkan' : 'Arsipkan'}
      </button>
    );
  }

  return null;
}

export default NoteActionButton;
