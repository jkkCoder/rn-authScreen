import {ADD_USER} from './userActions';
import {LOGIN_USER} from './userActions';
import {LOGOUT_USER} from './userActions';

export const userListReducer = (state = {users: []}, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        ...state.users.push(action.payload),
      };
    default:
      return state;
  }
};

export const userReducer = (state = {user: {}}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {user: action.payload};
    case LOGOUT_USER:
      return {user: {}};
    default:
      return state;
  }
};
