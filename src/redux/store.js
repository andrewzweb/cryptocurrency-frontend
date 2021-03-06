import rootReducer from ".";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const configureStore = () => {
  return createStore(rootReducer,
  composeWithDevTools(applyMiddleware(thunk)));
};
