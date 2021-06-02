import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'
import { getAllCurrency, addCurrency, deleteCurrency }  from '../../../redux/currency/actions'
import { fetchDashboardData, addCurrencyToDashboard }  from '../../../redux/dashboard/actions'
import '../../../styles/css/table-styles.css'
import AddCurrencyForm  from '../../forms/Currency/AddCurrencyForm'
import Loader from '../../components/Loader/Loader' 


const CurrencyList = ({
  username,
  currencies,
  dashboard_id,
  fetchDashboardData,
  isAuthenticated,
  addCurrency,
  deleteCurrency,
  getAllCurrency,
  addCurrencyToDashboard
}) => {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      getAllCurrency()
      fetchDashboardData(dashboard_id)
      setLoading(false)
    }, 1000)
  }, [getAllCurrency, fetchDashboardData, dashboard_id])

  return (
    <div className='currencyList'>
      <h1 className='category-name color-text'>Currencies</h1>
      <div>
        <AddCurrencyForm isAuthenticated={isAuthenticated} addCurrency={addCurrency}/>
      </div>
      { loading  && <Loader/>}
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
            return <CurrencyItem
                     key={index.toString()}
                     dashboard_id = {dashboard_id}
                     username={username}
                     handlerDel={deleteCurrency}
                     handlerAdd={addCurrencyToDashboard}
                     item={ currency }
                   /> })}
        </tbody>
      </table>
    </div>
  )
}


const CurrencyItem = ({item, index, handlerAdd, handlerDel, dashboard_id}) => {
  
  return(
    <tr className='currencyItem' key={index}>
      <td data-label="add" className='currencyItem-actions'>
        <button onClick={() => handlerAdd(dashboard_id, item)} className='currencyItem-actions-add' href='#'>+</button>
      </td>
      <td data-label="id">{ item.pk }</td>  
      <td data-label="nname">{ item.name }</td>
      <td data-label="symbol">{ item.symbol }</td>
      <td data-label="price">{ item.price }</td>
      <td data-label="market cap">{ item.market_cap }</td>
      <td data-label="actions" className='currencyItem-actions'>
        <button href='#' className='currencyItem-actions-edit' >edit</button>
        <button
          className='currencyItem-actions-del'
          onClick={() => handlerDel(item.pk)}
          href=''>del</button>
      </td>
    </tr>
  )}


const mapStateToProps = (state) => ({
  currencies: state.currency.items,
  username: state.auth.username,
  dashboard_id: state.auth.dashboard_id,
  isAuthenticated: state.auth.isAuthenticated
});


const mapDispatchToProps = (dispatch) => ({
  getAllCurrency: () => dispatch(getAllCurrency()),
  addCurrencyToDashboard: (id, data) => dispatch(addCurrencyToDashboard(id, data)),
  addCurrency: (id) => dispatch(addCurrency(id)),
  deleteCurrency: (id) => dispatch(deleteCurrency(id)),
  fetchDashboardData: (id) => dispatch(fetchDashboardData(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(CurrencyList)
