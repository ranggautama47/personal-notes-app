import React from 'react';
import { showFormattedDate } from '../utils';
import NoteActionButton from './NoteActionButton';

function highlightText(text, keyword) {
  if (!keyword) {
    return text;
  }

  const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedKeyword})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (part.toLowerCase() === keyword.toLowerCase()) {
      return <mark key={index}>{part}</mark>;
    }
    return part;
  });
}

function NoteItem({ note, onDelete, onArchive, searchKeyword = '' }) {
  return (
    <div
      className="note-item"
      data-testid="note-item"
      data-note-id={note?.id}
    >
      <div className="note-item__content" data-testid="note-item-content">
        <div className="note-item__header">
          <h3 className="note-item__title" data-testid="note-item-title">
            {highlightText(note.title, searchKeyword)}
          </h3>
          <span className="note-item__date" data-testid="note-item-date">
            {showFormattedDate(note.createdAt)}
          </span>
        </div>
        <div className="note-item__divider" />
        <p className="note-item__body" data-testid="note-item-body">
          {highlightText(note.body, searchKeyword)}
        </p>
      </div>
      <div className="note-item__action" data-testid="note-item-action">
        <NoteActionButton
          variant="delete"
          onClick={() => onDelete(note.id)}
        />
        <NoteActionButton
          variant="archive"
          isArchived={note.archived}
          onClick={() => onArchive(note.id)}
        />
      </div>
    </div>
  );
}

export default NoteItem;
