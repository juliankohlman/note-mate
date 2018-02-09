import { ADD_NOTE, GET_NOTES, DELETE_NOTE, UPDATE_NOTE  } from '../Actions'

export default (notes = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...notes, action.payload];
    case GET_NOTES:
      return action.payload;
    case DELETE_NOTE:
      return notes.filter(note => note.title !== action.payload);
    case UPDATE_NOTE:
      // map over notes if note === e.target then make note === to new text and or
      // title else return the note
      return notes;
    default:
      return notes;
  }
}