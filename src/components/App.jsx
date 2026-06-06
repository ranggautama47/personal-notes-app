import React from 'react';
import { getInitialData } from '../utils';
import NoteInput from './NoteInput';
import NotesList from './NotesList';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';
import HeroBanner from './HeroBanner';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchKeyword: '',
      activeTab: 'semua',
      viewMode: 'grid',
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onTabChangeHandler = this.onTabChangeHandler.bind(this);
    this.onViewModeChangeHandler = this.onViewModeChangeHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    this.setState((prevState) => ({
      notes: [newNote, ...prevState.notes],
    }));
  }

  onDeleteHandler(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => note.id !== id),
    }));
  }

  onArchiveHandler(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      ),
    }));
  }

  onSearchHandler(keyword) {
    this.setState({ searchKeyword: keyword });
  }

  onTabChangeHandler(tab) {
    this.setState({ activeTab: tab });
  }

  onViewModeChangeHandler(mode) {
    this.setState({ viewMode: mode });
  }

  render() {
    const { notes, searchKeyword, activeTab, viewMode } = this.state;

    const keywordFiltered = notes.filter((note) => {
      const keyword = searchKeyword.toLowerCase();
      return (
        note.title.toLowerCase().includes(keyword) ||
        note.body.toLowerCase().includes(keyword)
      );
    });

    const activeNotes = keywordFiltered.filter((n) => !n.archived);
    const archivedNotes = keywordFiltered.filter((n) => n.archived);

    let displayedNotes;
    if (activeTab === 'semua') displayedNotes = keywordFiltered;
    else if (activeTab === 'aktif') displayedNotes = activeNotes;
    else displayedNotes = archivedNotes;

    const dataTestId = activeTab === 'arsip' ? 'archived-notes-list' : 'active-notes-list';

    return (
      <div className="mindnote-app">
        <Sidebar
          activeNav={activeTab}
          onNavChange={this.onTabChangeHandler}
          onSearch={this.onSearchHandler}
        />
        <div className="mindnote-main">
          <TopNavbar
            activeTab={activeTab}
            onTabChange={this.onTabChangeHandler}
            onSearch={this.onSearchHandler}
            searchKeyword={searchKeyword}
          />
          <div className="mindnote-content">
            {notes.length === 0 && (
              <HeroBanner onAddClick={() => {}} />
            )}
            <NoteInput
              addNote={this.onAddNoteHandler}
              viewMode={viewMode}
              onViewChange={this.onViewModeChangeHandler}
            />
            <NotesList
              notes={displayedNotes}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveHandler}
              searchKeyword={searchKeyword}
              dataTestId={dataTestId}
              viewMode={viewMode}
            />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
