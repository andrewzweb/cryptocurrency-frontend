import * as types from "./types";

const initialState = {
  currency: [
    {id: 1, name: 'bitcoin', price: 54000.00 },
    {id: 2, name: 'altcoin', price: 53454.00 },
    {id: 3, name: 'dogcoin', price: 2393.00 },
    {id: 4, name: 'cowcoin', price: 23449.00 },
    {id: 5, name: 'amycoin', price: 54000.00 }
  ]
}

const currencyReducer = (state = initialState, action) => {
  if (action.type === 'GET_ALL'){
    return state
  }
  
  return state
} 


export default currencyReducer;
