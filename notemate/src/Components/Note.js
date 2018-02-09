import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import { deleteNote, updateNote } from '../Actions';
// import Notes from './Notes';


class Note extends Component {
// const Note = (props) => {
  constructor(props, context) {
    super(props, context);
    this.state = {
      notes: this.props.notes,
      open: true
    };
  }

  componentWillMount() {
    // this.props.getNotes();
  }

  // handle delete
deleteNoteHandler = e => {
  const deleteNoteTitle = e.target.value;
  this.props.deleteNote(deleteNoteTitle);
  console.log(this.props.notes);
}
  // handle edit/update
updateNoteHandler = e => {
  console.log(e.target.value);
}

  render() {
    return (
      <div className="Note-container">
        {/*{console.log(this.props.notes)}*/}
        <Panel>
          <Panel.Heading>
            <Panel.Title>{this.props.title}</Panel.Title>
          </Panel.Heading>
              <Panel.Body>{this.props.text}</Panel.Body>
            {/*<button type="button" value={this.props.text} onClick={this.updateNoteHandler}>Edit Note</button>*/}
              <button type="button" value={this.props.title} onClick={this.deleteNoteHandler}>Delete Note</button>
          </Panel>
        {/*<p>{props.title}</p>
        <p>{props.text}</p>*/}
        <hr/>
      </div>
    )
  }
  // }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}


export default connect(mapStateToProps, { deleteNote, updateNote })(Note);
// export default Note;