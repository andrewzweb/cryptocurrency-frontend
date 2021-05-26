import React from 'react';
import PropTypes from 'prop-types';


class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <form className='LoginForm' onSubmit={e => this.props.handle_login(e, this.state)}>
        <h4>Log In</h4>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handle_change}
          placeholder='Username'
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handle_change}
          placeholder='Password'
        />
        <button className='button-actions' type="submit">Login</button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};

export default LoginForm;


