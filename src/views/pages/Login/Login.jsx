import React, { Component } from 'react';
import Nav        from '../../components/Nav/Nav';
import LoginForm  from '../../forms/LoginForm/LoginForm';
import SingUpForm from '../../forms/SingUpForm/SingUpForm';
import {connect} from 'react-redux'
import { compose } from "redux";
import { withRouter } from 'react-router';
import { singIn, singUp, logIn, logOut } from '../../../redux/auth/actions'



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: 'login',
      isAuthenticated: this.props.isAuthenticated,
      username: this.props.username
    };
  }

  handle_login = (e, data) => {
    e.preventDefault();
    this.props.logIn(data);
    this.props.history.push("/dashboard")
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    this.props.singUp(data);
    this.props.history.push("/login");
  };

  handle_logout = ( e ) => {
    e.preventDefault();
    this.props.logOut()
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <LoginForm handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <SingUpForm handle_signup={this.handle_signup} />;
        break;
      default:
        form = null;
    }

    return (
      <div className='LoginHolder'>
        <h3 className='login-text'>
          {this.state.isAuthenticated
            ? `Hello ${this.props.username}`
            : 'Please Log In'}
        </h3>
        <Nav className='LoginForm'
          logged_in={this.props.isAuthenticated}
          display_form={this.display_form}
          handle_logout={this.handle_logout}
        />
        {form}
      </div>
    );
  }
}

const mapStateToProps = ({auth}) => ({
  username: auth.username,
  isAuthenticated: auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  logIn: (data) => dispatch(logIn(data)),
  logOut: () => dispatch(logOut()),
  singIn: () => dispatch(singIn()),
  singUp: (data) => dispatch(singUp(data)),
})

const enchance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)

export default enchance(Login);
