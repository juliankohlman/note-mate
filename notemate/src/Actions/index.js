// action types
export const ADD_NOTE = 'ADD_NOTE';
export const GET_NOTES = 'GET_NOTES';
export const DELETE_NOTE = 'DELETE_NOTE';

// action creators
export const addNote = (note) => {
  return {
    type: ADD_NOTE,
    payload: note
  }
}

export const getNotes = (notes) => {
  return {
    type: GET_NOTES,
    payload: notes
  }
}

export const deleteNote = (title) => {
  return {
    type: DELETE_NOTE,
    payload: title
  }
}