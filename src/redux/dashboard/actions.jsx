import * as types from './types';
import api from '../../api';


export const fetchDashboardData = () => {
  return async(dispatch, getState) => {
    api.dashboard.updateData().then((res) =>
      dispatch({ type: types.UPDATE_DASHBOARD, data: res.data })
    )
  };
}


