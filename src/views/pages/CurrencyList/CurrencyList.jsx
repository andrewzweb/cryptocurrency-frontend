import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCurrency } from '../../../redux/currency/actions'
import '../../../styles/css/table-styles.css'


const CurrencyList = () => {
  const currencies = useSelector(({currency}) => currency.currency); 
  const dispatch = useDispatch()
  
  useEffect(() => {
      dispatch(getAllCurrency())
  }, [dispatch])
  
  return (
    <div className='currencyList'>
      <h1 className='category-name color-text'>Currencies</h1>
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
      { currencies && currencies.length > 0 && currencies.map(( currency, index ) => {
        return <CurrencyItem item={ currency } key={index.toString()} /> })}
      </table>
    </div>
  )
}


const CurrencyItem = ({item, index}) => {
  const [dataItem, setDataItem] = useState([])
  
  useEffect(() => {
    setDataItem(item)
  }, [item])

  const addInDashboard = () => {
    console.log('action add to dashboar item: ', dataItem)
  }

  return(
    <tr className='currencyItem' key={index}>
      <td data-label="add" className='currencyItem-actions'>
        <button onClick={addInDashboard} className='currencyItem-actions-add' href='#'>+</button>
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


//const mapStateToProps = ( ({ currency }) => ({ currency }) );


//export default connect(mapStateToProps, { getAllCurrency, getAll })(CurrencyList)

export default CurrencyList
