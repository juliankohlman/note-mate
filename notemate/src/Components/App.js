import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import NoteForm from './NoteForm';
// import NoteDisplay from './NoteDisplay';
import Notes from './Notes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      {/* Notes component here
        < NoteList />
      */}
      <NoteForm />
      <Notes />
      {/*<NoteDisplay />*/}
      </div>
    );
  }
}

export default App;
