import React, { useState } from 'react';


const AddCurrencyForm = (props) => {
  const [isOpen, setToggle] = useState(false)
  const [state, setState] = useState({
    name: '',
    symbol: '',
    price: '',
    market: ''
  })

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  const handlerForm = (evt) => {
    evt.preventDefault()
    props.addCurrency(state)
    setState({name:'', symbol:'', price: '', market:''})
  }
  
  return (
    <div className='add-currency-form'>
      <button onClick={()=>setToggle(true)}>Add Currency</button>
      {isOpen && props.isAuthenticated && (
        <div className='modal'>
          <div className="modal-body">
            <button className='closeButton' onClick={()=>setToggle(false)}>x</button>
            <form onSubmit={handlerForm}>
              <input
                name="name"
                type="text"
                value={state.name}
                placeHolder='name'
                onChange={handleChange}
              />
              <input
                name="symbol"
                type="text"
                value={state.symbol}
                placeHolder='symbol'
                onChange={handleChange}
              />
              <input
                name="market"
                type="number"
                value={state.market}
                placeHolder='marketcap'
                onChange={handleChange}
              />
              <input
                name="price"
                type="number"
                value={state.price}
                placeHolder='price'
                onChange={handleChange}
                step='2'
              />
              <input
                className='modalButton'
                type='submit'
                value='Add Currency'
              />
            </form>
          </div>
        </div>
     )}
    </div>
  )
}

export default AddCurrencyForm
