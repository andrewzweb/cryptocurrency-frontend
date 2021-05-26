import * as types from './types';
import api from '../../api';


export const singIn = () => {
  return async(dispatch, getState) => {
    localStorage.removeItem('token');
    api.auth.singin().then((res) =>
      dispatch({ type: types.SINGIN, data: res })
    )
  };
};

export const singUp = (data) => {
  return async(dispatch, getState) => {
    api.auth.singup(data).then((res) =>
      dispatch({ type: types.SINGUP, data: res })
    )
  };
};

export const logIn = (data) => {
  return async(dispatch, getState) => {
    api.auth.login(data).then((res) =>
      dispatch({ type: types.LOGIN, data: res})
    )
  };
}

export const logOut = () => {
  localStorage.removeItem('token')
  return async(dispatch, getState) => {
    dispatch({ type: types.LOGOUT })
  };
};
