import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import { deleteNote } from '../Actions';
import Notes from './Notes';


class Note extends Component {
// const Note = (props) => {
  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.notes
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

  render() {
    return (
      <div>
        {/*{console.log(this.props.notes)}*/}
        <Panel bsStyle="primary">
            <Panel.Heading>{this.props.title}</Panel.Heading>
            <Panel.Body>{this.props.text}</Panel.Body>
            <button>Edit Note</button>
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


export default connect(mapStateToProps, { deleteNote })(Note);
// export default Note;