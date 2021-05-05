import React, { useState, useEffect } from 'react'


function Dashboard() {
  const [dashboard, setDashboard] = useState([]);

  const Socket = new WebSocket(
    'ws://'
      + '127.0.0.1:8000'
      + '/ws/chat/'
      + 'dashboard'
      + '/'
  );
  
  useEffect(() => {
    console.log('soket');
      
    Socket.onmessage = ({data, type}) => {
      const raw_data = JSON.parse(data)
      console.log('data', raw_data)
      const clean_data = raw_data['dashboard']['dashboard']
      console.log('clean data', clean_data)
      
      console.log('data ws:', clean_data)
      setDashboard(clean_data)
      console.log('state change',dashboard)
    };
  }, []);

  const fetchData = () => {
    Socket.send(JSON.stringify({
      'command': 'update_dashboard'
    }))
  };

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
      { dashboard.length ? <h1>Dashboard: count: {dashboard.length}</h1> : <h1>Dashboard: count: {dashboard.length}</h1>}
      <button onClick={fetchData}>Update</button>

      <table class="table-responsive">
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
