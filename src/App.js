import React from 'react'
import { Provider } from "react-redux";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute'

import HomePage from './views/pages/Home/Home'
import Login from './views/pages/Login/Login'
import CurrencyList from './views/pages/CurrencyList/CurrencyList'
import Dashboard from './views/pages/Dashboard/Dashboard'

import { configureStore } from "./redux/store";
import {createBrowserHistory} from 'history'
import Header from './views/components/Header/Header'

// create store
export const store = configureStore();

// history
const history = createBrowserHistory()

function App(props) {
  
  return (
  <div className='App'>
    <Provider store={store}>
    <Router history={ history }>
        <Header/>
        <Switch>
          <Route exact path="/login" component={Login}/>  
          <PrivateRoute path='/home' component={HomePage} exact={true}/>  
          <Route exact path="/currency" component={CurrencyList} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="*" component={Login}/> 
        </Switch>

    </Router>
    </Provider>
  </div>
  )
}


export default App;
