import React, { useState } from 'react';


const AddCurrencyForm = (props) => {
  const [isOpen, setToggle] = useState(false)
  const [state, setState] = useState({
    name: '',
    symbol: '',
    price: '',
    market_cap: ''
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
    setState({name:'', symbol:'', price: '', market_cap:''})
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
                placeholder='name'
                onChange={handleChange}
              />
              <input
                name="symbol"
                type="text"
                value={state.symbol}
                placeholder='symbol'
                onChange={handleChange}
              />
              <input
                name="market_cap"
                type="number"
                value={state.market_cap}
                placeholder='market_cap'
                onChange={handleChange}
              />
              <input
                name="price"
                type="number"
                value={state.price}
                placeholder='price'
                onChange={handleChange}
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
