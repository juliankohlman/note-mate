import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import '../App.css';
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
      <div className="Note-list-outter">
      {/* show a list empty  h1 message when notes length is 0 otherwise show note list h1 */}
      {(this.props.notes.length === 0) ? <h1>Note List Empty</h1> : <h1>Note List</h1>}

      {/*<span contentEditable></span>*/}
        {console.log(this.props.notes.length)}
          <span contentEditable="true">{ this.props.notes.map((note, i) => {
            return <Note title={note.title} text={note.text} key={i} />;
          })}
          </span>
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
