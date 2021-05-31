import * as types from './types';
import api from '../../api';


export const fetchDashboardData = (data) => {
  return async(dispatch, getState) => {
    api.dashboard.getItemsData(data).then((res) =>
      dispatch({ type: types.UPDATE_DASHBOARD, data: res})
    )
  };
}
