import * as types from './types';
import api from '../../api';


export const fetchDashboardData = (data) => {
  return async(dispatch, getState) => {
    api.dashboard.getItemsData(data).then((res) =>
      dispatch({ type: types.UPDATE_DASHBOARD, data: res})
    )
  };
}

export const addCurrencyToDashboard = (id, data) => {
  return async(dispatch, getState) => {
    const state = getState()
    const new_coin = state.dashboard.items.concat(data)
    const newData = {
      'account': {'name': state.auth.username},
      'currency': new_coin
    }
    api.currency.addCurrencyToDashboard(id, newData).then((res) =>
      dispatch({ type: types.ADD_CURRENCY_TO_DASHBOARD, data: res})
    )
  };
}
