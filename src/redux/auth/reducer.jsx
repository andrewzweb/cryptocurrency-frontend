import * as types from "./types";

const initialState = {
  isAuthenticated: false,
  username: '',
  token: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN :
      localStorage.setItem('token', action.data['token'])
      return { ...state, 
        isAuthenticated: true,
        token: action.data['token'], 
        username: action.data['user']['username']
      };
    case types.LOGOUT :
      localStorage.removeItem('token');
      return { ...state, username: '', token: '', isAuthenticated: false};

    case types.SINGIN :
      return { ...state, username: action.data['username'], isAuthenticated: true };
    
    case types.SINGUP :
        return { ...state, token: action.data['token']};
    
    default:
      return state;
  }
}

export default authReducer;
