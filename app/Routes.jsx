import React, { lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { AuthenticatedRoute } from './shared/routing';
import SignIn from './authentication/SignIn';
import { Layout } from './shared/layout';

const Home = lazy(() => import('./home/Home'));
const Libraries = lazy(() => import('./libraries/Libraries'));

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthenticatedRoute exact path="/">
          <Layout>
            <Home />
          </Layout>
        </AuthenticatedRoute>
        <AuthenticatedRoute path="/libraries">
          <Layout>
            <Libraries />
          </Layout>
        </AuthenticatedRoute>
        <Route path="/sign-in">
          <SignIn />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
