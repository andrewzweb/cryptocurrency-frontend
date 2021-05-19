import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCurrency } from '../../../redux/currency/actions'


const CurrencyList =  ()  => {
  const [ currency, setCurrency ] = useState([]);
  const currencies = useSelector(({currency}) => currency.currency); 
  const dispatch = useDispatch()
  
  useEffect(() => {
      dispatch(getAllCurrency())
  }, [])
  
  return (
    <div className='currencyList'>
      <h1 className='category-name color-text'>Currencies</h1>
      
      { currencies && currencies.length > 0 && currencies.map(( currency, index ) => {
        return <CurrencyItem item={ currency } key={index.toString()} /> })}
    </div>
  )
}

CurrencyList.propTypes = {
  currencies: PropTypes.array.isRequired,
}


const CurrencyItem = ({item, index}) => {
  return(
    <div className='currencyItem' key={index}>
      <div className='currencyItem-actions'>
        <a className='currencyItem-actions-add'>+</a>
      </div>
      <div className='currencyItem-data'>
        <span>{ item.pk }</span>
        <span>{ item.name }</span>
        <span>{ item.symbol }</span>
        <span>{ item.price }</span>
        <span>{ item.market_cap }</span>
      </div>
      <div className='currencyItem-actions'>
        <a className='currencyItem-actions-edit'>edit</a>
        <a className='currencyItem-actions-del'>del</a>
      </div>
    </div>
  )}

CurrencyItem.propTypes = {
  item: PropTypes.object.isRequired,
  key: PropTypes.string.isRequired,
}

//const mapStateToProps = ( ({ currency }) => ({ currency }) );


//export default connect(mapStateToProps, { getAllCurrency, getAll })(CurrencyList)

export default CurrencyList
