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

export const addCurrencyToDashboard = (id, data) => {
  return async(dispatch, getState) => {
    api.currency.addCurrencyToDashboard(id, data).then((res) =>
      dispatch({ type: types.ADD_CURRENCY_TO_DASHBOARD, data: res})
    )
  };
}
