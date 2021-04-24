import React, { useState } from 'react';
import CurrencyList from './views/pages/CurrencyList/CurrencyList'


function App() {
  const [currencies, setCurrencies] = useState([
    {id: 1, name: 'bitcoin', price: 54000.00 },
    {id: 2, name: 'altcoin', price: 53454.00 },
    {id: 3, name: 'dogcoin', price: 2393.00 },
    {id: 4, name: 'cowcoin', price: 23449.00 },
    {id: 5, name: 'amycoin', price: 54000.00 }
])
  return (
    <div className="App">
      <header className="header">
      </header>
      <CurrencyList currencies={currencies}/>
    </div>
  );
}

export default App;
