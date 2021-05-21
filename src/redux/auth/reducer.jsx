import * as types from "./types";

const initialState = {
  isAuthenticated: true,
  username: 'rob'
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.LOGGING :
    return { ...state, isAnthenticated: action.data };
  default:
    return state;
  }
}

export default authReducer;
