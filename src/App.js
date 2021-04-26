import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Header from './views/components/Header/Header'
import Footer from './views/components/Footer/Footer'
import Login from './views/pages/Login/Login'
import HomePage from './views/pages/Home/Home'
import CurrencyList from './views/pages/CurrencyList/CurrencyList'


function App() {
  const state = useSelector(state => state.currency.currency);
  const dispatch = useDispatch()

  return (
    <>
      <BrowserRouter>
        <header className='Header'>
          <logo className='Logo'>
            <Link to="/home">CurrencyPulse</Link>
          </logo>

          <nav>
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/currency">Currency</Link>
          </nav>
        </header>
        <Switch>
          <Route path="/home">
            <HomePage/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/currency">
            <CurrencyList currencies={ state }/>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </ > 
  )
}

export default App;
