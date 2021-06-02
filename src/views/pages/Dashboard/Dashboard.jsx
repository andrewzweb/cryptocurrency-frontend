import React, { useState, useEffect, useMemo } from 'react'
import {connect} from 'react-redux'
import MySocket from './socket'
import { fetchDashboardData, delItemFromDashbord } from '../../../redux/dashboard/actions'
import { socketCurrencyPath } from '../../../api'
import Loader from '../../components/Loader/Loader' 


const Dashboard = ({
  dashboardItems,
  dashboard_id,
  username,
  fetchDashboardData,
  delItemFromDashbord
}) => {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setCoins(dashboardItems.map((item) => item.name))
    setLoading(false)
  }, [dashboardItems])

  const sockets = coins && coins.map((coin) =>
    <MySocket dashboard_id={dashboard_id} delHandler={delItemFromDashbord} path={socketCurrencyPath+coin+'/'}/>
  );
  
  return (
    <>
      <h1 className="category-name color-text" >Dashboard: { username }</h1>
      { loading && <Loader/>}
      <table className="table-responsive">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Market Cap</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { sockets }
        </tbody>
      </table>
    </ > 
  )
}

const mapStateToProps = ({auth, dashboard}) => ({
     username: auth.username,
     dashboardItems: dashboard.items,
     dashboard_id: auth.dashboard_id
});

const mapDispatchToProps = (dispatch) => ({
  fetchDashboardData: (data) => dispatch(fetchDashboardData(data)),
  delItemFromDashbord: (id, data) => dispatch(delItemFromDashbord(id, data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
