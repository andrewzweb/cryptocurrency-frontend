import { combineReducers } from "redux";
//import { reducer as formReducer } from "redux-form";
import currencyReducer from './Currency/reducer'

// import user from "./auth";

export default combineReducers({
  currency: currencyReducer
});
