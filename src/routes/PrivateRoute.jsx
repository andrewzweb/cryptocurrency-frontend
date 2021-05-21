import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({
    component: Component,
    isAuthenticated,
    ...rest
}) => {
    return (
        <Route
        {...rest}
        render={props =>
          isAuthenticated === true ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    )
}   

const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute)