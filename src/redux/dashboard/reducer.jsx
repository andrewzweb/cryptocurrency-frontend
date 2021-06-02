import * as types from "./types";

const initialState = {
  items: []
}

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.UPDATE_DASHBOARD :
    return { ...state, items: action.data['currency'] };
  case types.ADD_CURRENCY_TO_DASHBOARD :
    return { ...state, items: action.data['currency']}
  case types.DEL_CURRENCY_FROM_DASHBOARD :
    return { ...state, items: action.data['currency']}
  default:
    return state;
  }
}

export default dashboardReducer;
