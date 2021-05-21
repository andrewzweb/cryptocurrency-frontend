import * as types from "./types";

const initialState = {
  dashboard: []
}

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.UPDATE_DASHBOARD :
    return { ...state, dashboard: action.data };
  default:
    return state;
  }
}

export default dashboardReducer;



