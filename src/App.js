import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Header from './views/components/Header/Header'
import Login from './views/pages/Login/Login'
import CurrencyList from './views/pages/CurrencyList/CurrencyList'


function App() {
  const state = useSelector(state => state.currency.currency);
  const dispatch = useDispatch()

  return (
    <>
      <Header/>
      <BrowserRouter>
        <nav className='Header'>
          <Link to="/login">Login</Link>
          <Link to="/currency">Currency</Link>
        </nav>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/currency">
            <CurrencyList currencies={ state }/>
          </Route>
        </Switch>
      </BrowserRouter>
    </ > 
  )
}

export default App;
