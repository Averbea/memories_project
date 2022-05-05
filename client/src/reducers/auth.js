
import { AUTH, LOGOUT } from '../constants/actionTypes';

export default (authState = [], action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...authState, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...authState, authData: null };
    default:
      return authState;
  }
};
