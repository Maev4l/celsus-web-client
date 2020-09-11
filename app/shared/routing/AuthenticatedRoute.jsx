/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthenticatedRoute = (props) => {
  const { authenticated } = useSelector((store) => ({
    authenticated: store.authn.authenticated /* TODO : Check existence of the session as well */,
  }));
  if (!authenticated) {
    return <Redirect to="/sign-in" />;
  }

  return <Route {...props} />;
};

export default AuthenticatedRoute;
