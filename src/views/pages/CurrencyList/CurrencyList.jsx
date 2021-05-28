import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'
import { getAllCurrency, addCurrencyToDashboard, addCurrency }  from '../../../redux/currency/actions'
import '../../../styles/css/table-styles.css'
import AddCurrencyForm  from '../../forms/Currency/AddCurrencyForm'

const CurrencyList = ({
  username,
  currencies,
  isAuthenticated,
  addCurrency,
  getAllCurrency,
  addCurrencyToDashboard
}) => {
  useEffect(() => {
      getAllCurrency()
  }, [getAllCurrency])


  return (
    <div className='currencyList'>
      <h1 className='category-name color-text'>Currencies</h1>
      <div>
        <AddCurrencyForm isAuthenticated={isAuthenticated} addCurrency={addCurrency}/>
      </div>
      <table className="table-responsive">
      <thead>
          <tr>
            <th>add</th>
            <th>#</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Market Cap</th>
            <th>Price</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
      { currencies && currencies.length > 0 && currencies.map(( currency, index ) => {
        return <CurrencyItem username={username} handlerAdd={addCurrencyToDashboard} item={ currency } key={index.toString()} /> })}
        </tbody>
      </table>
    </div>
  )
}


const CurrencyItem = ({item, index, handlerAdd, username}) => {
  const [dataItem, setDataItem] = useState([])
  const id = 1
  useEffect(() => {
    setDataItem(item)
  }, [item])
  
  const handlerAddToDashboard = () => {
    const cur_obj = {
      "account":
        {"name": username },
      "currency": [dataItem], 
    }

    handlerAdd(id, JSON.stringify(cur_obj))
  }
  
  return(
    <tr className='currencyItem' key={index}>
      <td data-label="add" className='currencyItem-actions'>
        <button onClick={handlerAddToDashboard} className='currencyItem-actions-add' href='#'>+</button>
      </td>
      <td data-label="id">{ item.pk }</td>  
      <td data-label="nname">{ item.name }</td>
      <td data-label="symbol">{ item.symbol }</td>
      <td data-label="price">{ item.price }</td>
      <td data-label="market cap">{ item.market_cap }</td>
      <td data-label="actions" className='currencyItem-actions'>
        <button href='#' className='currencyItem-actions-edit' >edit</button>
        <button className='currencyItem-actions-del' href=''>del</button>
      </td>
    </tr>
  )}


const mapStateToProps = (state) => ({
  currencies: state.currency.items,
  username: state.auth.username,
  isAuthenticated: state.auth.isAuthenticated
});


export default connect(
  mapStateToProps,
  { getAllCurrency, addCurrencyToDashboard, addCurrency })
  (CurrencyList)
