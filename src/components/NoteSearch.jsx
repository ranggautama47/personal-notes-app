import React from 'react';

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
    };

    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
    const { value } = event.target;
    this.setState({ keyword: value });
    this.props.onSearch(value);
  }

  render() {
    return (
      <div className="note-search" data-testid="note-search">
        <input
          type="text"
          placeholder="Cari catatan..."
          value={this.state.keyword}
          onChange={this.onSearchChangeEventHandler}
          data-testid="note-search-input"
        />
      </div>
    );
  }
}

export default NoteSearch;
