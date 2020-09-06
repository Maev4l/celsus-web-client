import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Layout } from './shared/layout';
import Home from './home/Home';
import Libraries from './libraries/Libraries';
import SignIn from './authentication/SignIn';
import { AuthenticatedRoute } from './shared/routing';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthenticatedRoute exact path="/">
          <Layout component={Home} />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/libraries">
          <Layout component={Libraries} />
        </AuthenticatedRoute>
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
