import React, { useState, useEffect, useMemo } from 'react'
import {connect} from 'react-redux'


const Dashboard = ({ username }) => {
  const [dashboard, setDashboard] = useState([]);
  const [socketConnect, setSocketConnect] = useState(false);
  const [socket, setSocket] = useState({});

  useMemo(() => {
    const Socket = new WebSocket(
      'ws://'
        + '127.0.0.1:8000'
        + '/ws/chat/'
        + 'dashboard'
        + '/'
    );
    console.info('Socket connected!');
    setSocketConnect(true)
    return setSocket(Socket)
  }, [])

  const fetchData = () => {
    socket.send(JSON.stringify({
      'command': 'update_dashboard',
      'username': username
    }))
  };
 
  useEffect(() => {
    socket.onopen = () => {
      fetchData()
    }
    console.log('username', username)
    socket.onmessage = ({data, type}) => {
      const raw_data = JSON.parse(data)
      const clean_data = raw_data['dashboard']['dashboard']
      setDashboard(clean_data)
    };
    socket.onclose = function () {
      console.info('Socket lost connection!')
    };
  }, [socket, socketConnect, username]);

  
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
      <div>Dashboard: { username }</div>
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

const mapStateToProps = ({auth}) => ({
     username: auth.username
});

export default connect(mapStateToProps)(Dashboard);
