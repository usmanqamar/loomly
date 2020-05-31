import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { makeSelectUser } from '../App/selectors';

const PrivateRoute = ({ component: Component, ...passedProps }) => {
  const user = useSelector(makeSelectUser());
  return (
    <Route
      {...passedProps}
      render={props => (user ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
