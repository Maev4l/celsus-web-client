/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Layout } from '../layout';

const AuthenticatedRoute = ({ withLayout, component, ...rest }) => {
  const { authenticated } = useSelector((store) => ({ authenticated: store.authn.authenticated }));
  if (!authenticated) {
    return <Redirect to="/sign-in" />;
  }
  if (!withLayout) {
    return <Route {...rest} />;
  }

  return (
    <Route {...rest}>
      <Layout component={component} />
    </Route>
  );
};

export default AuthenticatedRoute;
