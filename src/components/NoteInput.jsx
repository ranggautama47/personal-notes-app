import React from "react";
import { Plus } from "lucide-react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // TODO [Basic] kelola nilai title sebagai controlled input.
      title: "",
      // TODO [Basic] kelola nilai body sebagai controlled textarea.
      body: "",
      showForm: false,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const { value } = event.target;
    if (value.length <= 50) {
      this.setState({ title: value });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState({ body: event.target.value });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    if (this.state.body.length < 10) {
      return;
    }

    this.props.addNote({
      title: this.state.title,
      body: this.state.body,
    });

    this.setState({
      title: "",
      body: "",
      showForm: false,
    });
  }

  render() {
    const remainingChars = 50 - this.state.title.length;
    const showError = this.state.body.length > 0 && this.state.body.length < 10;

    if (!this.state.showForm) {
      return (
        <div className="note-input" data-testid="note-input">
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
                onClick={() => this.setState({ showForm: true })}
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
              onClick={() => this.setState({ showForm: false })}
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
            onSubmit={this.onSubmitEventHandler}
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
              value={this.state.title}
              onChange={this.onTitleChangeEventHandler}
              required
              data-testid="note-input-title-field"
            />
            <textarea
              className="note-input__body"
              placeholder="Tuliskan catatanmu di sini ..."
              value={this.state.body}
              onChange={this.onBodyChangeEventHandler}
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
}

export default NoteInput;
