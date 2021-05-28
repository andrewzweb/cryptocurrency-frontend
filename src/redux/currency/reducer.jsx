import * as types from "./types";

const initialState = {
  items: [],
  dashboard: []
}

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.GET_ALL_CURRENCY :
    return { ...state, items: action.data };
  case types.ADD_CURRENCY_TO_DASHBOARD :
    return { ...state, dashboard: action.data['currency']}
  case types.ADD_CURRENCY :
    return { ...state, items: [...state.items, action.data]}
  case types.DELETE_CURRENCY :
    return { ...state, items: state.items.filter(item => item.pk !== action.data)}
  default:
    return state;
  }
}

export default currencyReducer;
