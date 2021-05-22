import React from 'react'
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import LogoImage from '../../../styles/images/logo-bitcoin.png'

const Header = (props) => {
  const current_page = props.location.pathname

  return (
  <header className='Header'>
    <div className='logo'>
        <Link to="/home">
          <img src={LogoImage} alt='Logo'/>
        </Link>
      </div>

      <div className='nav'>
        <Link className={(current_page === '/home') ? 'active' : ''} to='/home'>Home</Link>
        <Link className={(current_page === '/login') ? 'active' : ''} to="/login">Login</Link>
        <Link className={(current_page === '/currency') ? 'active' : ''} to="/currency">Currency</Link>
        <Link className={(current_page === '/dashboard') ? 'active' : ''} to="/dashboard">Dashboard</Link>
        <a href="">User: { props.username }</a>
    </div>
  </header>
  )
}

const mapStateToProps = ({ auth }) => ({
  username: auth.username,
})

const enchance = compose(
  withRouter,
  connect(mapStateToProps)
)


export default enchance(Header)

