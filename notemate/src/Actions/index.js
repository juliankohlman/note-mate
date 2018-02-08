// action types
export const ADD_NOTE = 'ADD_NOTE';


// action creators
export const addNote = (note) => {
  return {
    type: ADD_NOTE,
    payload: note
  }
}