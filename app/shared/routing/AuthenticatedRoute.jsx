import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthenticatedRoute = (props) => {
  const { authenticated } = useSelector((store) => ({ authenticated: store.authn.authenticated }));
  if (!authenticated) {
    return <Redirect to="/sign-in" />;
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...props} />;
};

export default AuthenticatedRoute;
