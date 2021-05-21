import { combineReducers } from "redux";
import currencyReducer from './currency/reducer'
import dashboardReducer from './dashboard/reducer'
import authReducer from './auth/reducer'

export default combineReducers({
  currency: currencyReducer,
  dashboard: dashboardReducer,
  auth: authReducer
});
