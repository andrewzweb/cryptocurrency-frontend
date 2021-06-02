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
    api.dashboard.addCurrencyToDashboard(id, newData).then((res) =>
      dispatch({ type: types.ADD_CURRENCY_TO_DASHBOARD, data: res})
    )
  };
}

export const delItemFromDashbord = (id, data) => {
  return async(dispatch, getState) => {
    const state = getState()
    const newCoin = state.dashboard.items.filter(item => item.pk !== data.id)
    const newData = {
      'account': {'name': state.auth.username},
      'currency': newCoin
    }
    console.log('action data: ', newData)
    api.dashboard.delCurrencyFromDashboard(id, newData).then((res) =>
      dispatch({ type: types.DEL_CURRENCY_FROM_DASHBOARD, data: res})
    )
  };
}
