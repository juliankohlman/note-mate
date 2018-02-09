import { ADD_NOTE, GET_NOTES, DELETE_NOTE  } from '../Actions'

export default (notes = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...notes, action.payload];
    case GET_NOTES:
      return action.payload;
    case DELETE_NOTE:
      return notes.filter(note => note.title !== action.payload);
    default:
      return notes;
  }
}