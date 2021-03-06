import React from 'react';
import PropTypes from 'prop-types';

class SingUpForm extends React.Component {
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
      <form onSubmit={e => this.props.handle_signup(e, this.state)}>
        <h4>Sign Up</h4>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handle_change}
          placeHolder='Username'
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handle_change}
          placeHolder='Password'
        />
        <button className='button-actions' type="submit">SignUp</button>
      </form>
    );
  }
}

SingUpForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};

export default SingUpForm;

