import React, { useState, useEffect, useMemo} from 'react'


const TestSocket = (props) => {
  const [data, setData] = useState({
    'name': '',
    'symbol': '',
    'price': '',
    'market_cap': ''
  })
  
  const socket = useMemo(() => {
    console.log('Connect socket')
    const socket = new WebSocket(props['path'])
    return socket
  }, [])
  
  useEffect(() => {
    socket.onopen = () => {
      socket.send(JSON.stringify({
        'command': 'fetch_currency',
        'currency': props['path'].split('/').slice(-2)[0]
      }))
    }
    socket.onmessage = ({data, type}) => {
      const newData = JSON.parse(data).data
      setData({
        'id': newData.id,
        'name': newData.name,
        'symbol': newData.symbol,
        'price': newData.price,
        'market_cap': newData.market_cap
      })
    };
    socket.onclose = function () {
      console.info('Socket lost connection!')
    };
  }, [socket])

  return (
     <tr>
       <td data-label="numb">{data.id}</td>
       <td data-label="name">{data.name}</td>
       <td data-label="symbol">{data.symbol}</td>
       <td data-label="market_cap">{data.market_cap}</td>
       <td data-label="price">{data.price}</td>
    </tr>
  )
}

export default TestSocket;
