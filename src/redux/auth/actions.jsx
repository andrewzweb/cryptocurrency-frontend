import * as types from './types';
import api from '../../api';


export const getAllCurrency = () => {
  return async(dispatch, getState) => {
    api.currency.getAllCurrency().then((res) =>
      dispatch({ type: types.LOGGING, data: res.data })
    )
  };
}
