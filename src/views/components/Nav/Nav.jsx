import React from 'react';
import PropTypes from 'prop-types';

function Nav(props) {
  const logged_out_nav = (
    <ul>
      <li onClick={() => props.display_form('login')}>LogIn</li>
      <li onClick={() => props.display_form('signup')}>SignUp</li>
    </ul>
  );

  const logged_in_nav = (
    <button className='button-actions' onClick={props.handle_logout}>LogOut</button>
  );
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};
