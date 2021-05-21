import * as types from "./types";

const initialState = {
  currency: []
}

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.GET_ALL_CURRENCY :
    return { ...state, currency: action.data };
  default:
    return state;
  }
}

export default currencyReducer;
