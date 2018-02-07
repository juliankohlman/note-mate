import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../Actions';

class NoteList extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      text: ''
    }
  }

  // handleNoteInput

  // addNoteHandler

  render() {
    return (
      <div>
        <h1>Note Form Here</h1>
        <form>


        </form>
      <h2>Note List Here</h2></div>
    );
  }
}

// mapStateToProps

export default NoteList;
// export default connect(mapStateToProps, { addNote })(NoteList);