import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote  } from '../Actions';
import { Button } from 'react-bootstrap';

import '../App.css';
// import {Panel} from 'react-bootstrap';


class NoteForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      text: ''
    };
  }

  // componentDidMount() {
  //   // const allNotes = JSON.parse(localStorage.getItem('notes'));
  // }

  // componentWillReceiveProps(nextProps) {
  //   // if (nextProps.notes !== this.props.notes) {
  //   //   localStorage.setItem('notes', JSON.stringify(nextProps.notes));
  //   // }
  // }

  // handleNoteInput
  handleNoteInput = e => {
    this.setState({[e.target.name]: e.target.value })
  };

  // addNoteHandler
  addNoteHandler = e => {
    console.log(this.state);
    // const { note } = this.state
    const newNote = {
      title: this.state.title,
      text: this.state.text,
      id: this.props.notes ? this.props.notes.length : 0
    };
    this.props.addNote(newNote);
    this.setState({
      title: '',
      text: ''
    });
  }

  render() {
    return (
      <div className="Form-container">
        {/*<h1>Note Form Here</h1>*/}
        <form className="App-form">
        <input
          onChange={this.handleNoteInput}
          name="title"
          placeholder="Note Title"
          value={this.state.title}>
        </input>
        <br/>
        <textarea
          rows="10"
          cols="50"
          onChange={this.handleNoteInput}
          name="text"
          placeholder="Note"
          value={this.state.text}>
        </textarea>
        <br/>
        <Button bsStyle="" bsSize="large" type="button" onClick={this.addNoteHandler}>Create Note</Button>

        </form>
          {/*<Panel bsStyle="primary">
            <Panel.Heading>Panel heading without a title</Panel.Heading>
            <Panel.Body>Panel content</Panel.Body>
          </Panel>*/}
      </div>

    );
  }
}

// mapStateToProps
const mapStateToProps = state => {
  return {
    notes: state.notes
  }
};

// export default NoteForm;
export default connect(mapStateToProps, { addNote })(NoteForm);