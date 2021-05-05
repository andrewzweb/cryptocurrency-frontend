import * as types from './types'
import api from '../api'

export const getAllCurrency = () => (dispatch) => {
    api.currency.getAllCUrrency().then((data) => {
        return dispatch({
          type: types.GET_ALL_CURRENCY,
          ...data,
        });
      });

    }
  }