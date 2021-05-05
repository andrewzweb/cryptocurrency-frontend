import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Footer from './views/components/Footer/Footer'
import HomePage from './views/pages/Home/Home'
import Login from './views/pages/Login/Login'
import CurrencyList from './views/pages/CurrencyList/CurrencyList'
import Dashboard from './views/pages/Dashboard/Dashboard'


function App() {
    
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
            <Link to="/dashboard">Dashboard</Link>
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
            <CurrencyList />
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </ > 
  )
}

export default App;
