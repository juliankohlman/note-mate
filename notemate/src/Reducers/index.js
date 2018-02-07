import { combineReducers } from 'redux';
import notesReducer from './notes.js';

const rootReducer = combineReducers({
  notes: notesReducer,
});

export default rootReducer;