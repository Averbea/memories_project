
import { DELETE, UPDATE, LIKE, FETCH_ALL, CREATE } from '../constants/actionTypes';

export default (postsState = [], action) => {
  switch (action.type) {
    case DELETE:
      return postsState.filter((post) => post._id !== action.payload);
    case UPDATE:
    case LIKE:
      return postsState.map((post) => (post._id === action.payload._id ? action.payload : post));
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...postsState, action.payload];
    default:
      return postsState;
  }
};
