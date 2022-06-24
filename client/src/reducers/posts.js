
import { DELETE, UPDATE, LIKE, FETCH_ALL, FETCH_POST, CREATE, FETCH_BY_SEARCH, START_LOADING, END_LOADING, COMMENT } from '../constants/actionTypes';

export default (postsState = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...postsState, isLoading: true };
    case END_LOADING:
      return { ...postsState, isLoading: false };
    case DELETE:
      return { ...postsState, posts: postsState.posts.filter((post) => post._id !== action.payload) };
    case UPDATE:
    case LIKE:
      return { ...postsState, posts: postsState.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case COMMENT:
      return { ...postsState, posts: postsState.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case FETCH_ALL:
      return {
        ...postsState,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      return {
        ...postsState,
        posts: action.payload,
      };
    case FETCH_POST:
      return {
        ...postsState,
        post: action.payload,
      };
    case CREATE:
      return { ...postsState, posts: [...postsState.posts, action.payload] };
    default:
      return postsState;
  }
};
