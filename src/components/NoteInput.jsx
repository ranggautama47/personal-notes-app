import React, { useState } from "react";
import { Plus } from "lucide-react";
import TipsCard from "./TipsCard";
import { toast } from "sonner";

function NoteInput({ addNote, viewMode, onViewChange }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [showForm, setShowForm] = useState(false);

  const onTitleChangeEventHandler = (event) => {
    const { value } = event.target;
    if (value.length <= 50) {
      setTitle(value);
    }
  };

  const onBodyChangeEventHandler = (event) => {
    setBody(event.target.value);
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();

    if (body.length < 10) {
      return;
    }

    addNote({
      title,
      body,
    });

    toast.success("Catatan berhasil dibuat!", {
      description: `Catatan "${title || "Tanpa Judul"}" telah ditambahkan.`,
    });

    setTitle("");
    setBody("");
    setShowForm(false);
  };

  const remainingChars = 50 - title.length;
  const showError = body.length > 0 && body.length < 10;

  if (!showForm) {
    return (
      <div className="note-input" data-testid="note-input">
        <div className="note-input-hero-wrapper">
          <div className="note-input-hero">
            <img
              src="/icons/matahari.png"
              alt="ilustrasi"
              className="note-input-hero__img note-input-hero__img--left"
              draggable="false"
            />
            <div className="note-input-hero__center">
              <p className="note-input-hero__tagline">
                Tulis catatan Anda di sini
              </p>
              <button
                className="note-input-hero__cta btn-brand"
                onClick={() => setShowForm(true)}
              >
                <Plus size={18} />
                Buat Catatan Pertama
              </button>
            </div>
            <img
              src="/icons/donat.png"
              alt="ilustrasi"
              className="note-input-hero__img note-input-hero__img--right"
              draggable="false"
            />
          </div>
          <TipsCard
            viewMode={viewMode}
            onViewChange={onViewChange}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="note-input" data-testid="note-input">
      <div className="note-input-form-wrapper">
        <div className="note-input-form-header">
          <h2>Buat catatan</h2>
          <button
            className="note-input-close"
            onClick={() => setShowForm(false)}
            aria-label="Tutup form"
          >
            ✕
          </button>
        </div>

        {showError && (
          <p className="note-input__feedback--error">
            Isi catatan minimal harus 10 karakter
          </p>
        )}

        <form
          onSubmit={onSubmitEventHandler}
          data-testid="note-input-form"
        >
          <p
            className="note-input__title__char-limit"
            data-testid="note-input-title-remaining"
          >
            Sisa karakter: {remainingChars}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            value={title}
            onChange={onTitleChangeEventHandler}
            required
            data-testid="note-input-title-field"
          />
          <textarea
            className="note-input__body"
            placeholder="Tuliskan catatanmu di sini ..."
            value={body}
            onChange={onBodyChangeEventHandler}
            required
            data-testid="note-input-body-field"
          />
          <button type="submit" data-testid="note-input-submit-button">
            <Plus size={18} />
            Buat
          </button>
        </form>
      </div>
    </div>
  );
}

export default NoteInput;