import React from 'react';
import PropTypes from 'prop-types';


function CurrencyItem({item, key}){
  return(
    <div className='currencyItem' key={key}>
      <div className='currencyItem-actions'>
        <a className='currencyItem-actions-add' href="">+</a>
      </div>
      <div className='currencyItem-data'>
        <span>{ item.id }</span>
        <span>{ item.name }</span>
        <span>{ item.price }</span>
      </div>
      <div className='currencyItem-actions'>
        <a className='currencyItem-actions-edit' href="">edit</a>
        <a className='currencyItem-actions-del' href="">del</a>
      </div>
    </div>
  )}

CurrencyItem.propTypes = {
  item: PropTypes.object.isRequired,
  key: PropTypes.number.isRequired,
}


function CurrencyList({ currencies }) {
  return (
    <div className='currencyList'>
      <h1 className='color-text'>Currency List</h1>
      { currencies.map(( currency, index ) => {
        return <CurrencyItem
                 item={ currency }
                 key={index + 1}
               />
      })}
      <h2>Footer</h2>
    </div>
  )
}

CurrencyList.propTypes = {
  currencies: PropTypes.array.isRequired,
}


export default CurrencyList
