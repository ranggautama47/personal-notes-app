import React from 'react';
import { Trash2, Archive, ArchiveRestore } from 'lucide-react';

function NoteActionButton({ variant, onClick, isArchived }) {
  if (variant === 'delete') {
    return (
      <button
        className="note-item__delete-button"
        type="button"
        onClick={onClick}
        data-testid="note-item-delete-button"
      >
        <Trash2 size={16} />
        <span>Hapus</span>
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
        {isArchived ? <ArchiveRestore size={16} /> : <Archive size={16} />}
        <span>{isArchived ? 'Aktifkan' : 'Arsipkan'}</span>
      </button>
    );
  }

  return null;
}

export default NoteActionButton;
