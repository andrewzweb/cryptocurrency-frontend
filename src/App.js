import React, { useState } from 'react'
import CurrencyList from './views/pages/CurrencyList/CurrencyList'
import { useSelector, useDispatch } from 'react-redux'
import { Route } from "react-router-dom"



function App() {
  const state = useSelector(state => state.currency.currency);
  const dispatch = useDispatch()

  
  return (
    <div className="App">
      <CurrencyList currencies={ state }/>
    </div> 
  )
}

export default App
