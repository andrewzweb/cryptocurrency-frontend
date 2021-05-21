import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCurrency } from '../../../redux/currency/actions'


const CurrencyList = () => {
  const currencies = useSelector(({currency}) => currency.currency); 
  const dispatch = useDispatch()
  
  useEffect(() => {
      dispatch(getAllCurrency())
  }, [dispatch])
  
  return (
    <div className='currencyList'>
      <h1 className='category-name color-text'>Currencies</h1>
      
      { currencies && currencies.length > 0 && currencies.map(( currency, index ) => {
        return <CurrencyItem item={ currency } key={index.toString()} /> })}
    </div>
  )
}


const CurrencyItem = ({item, index}) => {
  return(
    <div className='currencyItem' key={index}>
      <div className='currencyItem-actions'>
        <button className='currencyItem-actions-add' href='#'>+</button>
      </div>
      <div className='currencyItem-data'>
        <span>{ item.pk }</span>
        <span>{ item.name }</span>
        <span>{ item.symbol }</span>
        <span>{ item.price }</span>
        <span>{ item.market_cap }</span>
      </div>
      <div className='currencyItem-actions'>
        <button href='#' className='currencyItem-actions-edit' >edit</button>
        <button className='currencyItem-actions-del' href=''>del</button>
      </div>
    </div>
  )}


//const mapStateToProps = ( ({ currency }) => ({ currency }) );


//export default connect(mapStateToProps, { getAllCurrency, getAll })(CurrencyList)

export default CurrencyList
