import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './Note';

class Notes extends Component {
  constructor(props) {
    super(props);
    console.log(props.notes)
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    const notes = this.props.notes;
    console.log('notes', notes)
    this.setState({
      notes
    })
    // console.log('state', this.state)
  }

  render() {
    return (
      <div>
        <h1>Note List</h1>
        {/* show a list empty  h1 message when notes length is 0 otherwise show note list h1 */}
          { this.props.notes.map((note, i) => {
            return <Note title={note.title} text={note.text} key={i} />;
          })}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps)(Notes);
// export default Notes;
