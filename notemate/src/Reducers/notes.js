import { ADD_NOTE } from '../Actions'

export default (notes = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...notes, action.payload];
    default:
      return notes;
  }
}