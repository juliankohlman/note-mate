import React, { Component } from 'react';
import logo from '../logo.svg';
import notebook from '../notebook.svg';
import '../App.css';
import NoteForm from './NoteForm';
// import NoteDisplay from './NoteDisplay';
import Notes from './Notes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={notebook} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Notemate</h1>
        </header>
        <p className="App-intro">
          Create a new note below. <br/>Edit or delete notes from your note's list.
        </p>
      {/* Notes component here
        < NoteList />
      */}
      <NoteForm />
      <br/>
      <Notes />
      {/*<NoteDisplay />*/}
      </div>
    );
  }
}

export default App;
