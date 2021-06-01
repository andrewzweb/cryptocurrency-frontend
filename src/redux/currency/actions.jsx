import * as types from './types';
import api from '../../api';


export const getAllCurrency = () => {
  return async(dispatch, getState) => {
    api.currency.getAllCurrency().then((res) =>
      dispatch({ type: types.GET_ALL_CURRENCY, data: res.data })
    )
  };
}

export const addCurrency = (data) => {
  console.log('action', data)
  return async(dispatch, getState) => {
    api.currency.createCurrency(data).then((res) =>
      dispatch({ type: types.ADD_CURRENCY, data: res })
    )
  };
}

export const deleteCurrency = (id) => {
  return async(dispatch, getState) => {
    api.currency.deleteCurrency(id).then((res) =>
      dispatch({ type: types.DELETE_CURRENCY, data: id })
    )
  };
}
