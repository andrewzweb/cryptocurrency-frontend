import React, { useState, useEffect, useMemo } from 'react'


function Dashboard() {
  const [dashboard, setDashboard] = useState([]);
  const [socketConnect, setSocketConnect] = useState(false);
  const [socket, setSocket] = useState({});

  useMemo( () => {
    const Socket = new WebSocket(
      'ws://'
        + '127.0.0.1:8000'
        + '/ws/chat/'
        + 'dashboard'
        + '/'
    );
    console.log('Socket connected!');

    setSocket(Socket)
    return setSocket(Socket)
  }, [])

  
  useEffect(() => {
    socket.onmessage = ({data, type}) => {
      const raw_data = JSON.parse(data)
      const clean_data = raw_data['dashboard']['dashboard']
      setDashboard(clean_data)
    };
    socket.onclose = function () {
      console.log('Socket lost connection!')
    };
  }, [socket]);

  const fetchData = () => {
    socket.send(JSON.stringify({
      'command': 'update_dashboard',
      'username': 'atom'
    }))
  };

  useEffect(() => {
    setTimeout(() => {
    fetchData()
    }, 300)
  }, [socketConnect]);

  
  const dashboardList = dashboard.map((currency, idx) =>
    <tr key={idx + 1}>
      <td data-label="numb">{ idx }</td>
      <td data-label="name">{ currency.name }</td>
      <td data-label="symbol">{ currency.symbol }</td>
      <td data-label="market_cap">{ currency.market }</td>
      <td data-label="price">{ currency.price }</td>
    </tr>
  )

  return (
    <>
      { dashboard.length ? <h1>Dashboard count: {dashboard.length}</h1> : <h1>Dashboard count: {dashboard.length}</h1>}
      <button onClick={fetchData}>Update</button>

      <table className="table-responsive">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Market Cap</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          { dashboardList }
        </tbody>
      </table>
    </ > 
  )
}

export default Dashboard;
