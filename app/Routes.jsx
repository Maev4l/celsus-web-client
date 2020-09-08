import React, { lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { AuthenticatedRoute } from './shared/routing';
import SignIn from './authentication/SignIn';

const Home = lazy(() => import('./home/Home'));
const Libraries = lazy(() => import('./libraries/Libraries'));

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthenticatedRoute exact path="/" withLayout component={Home} />
        <AuthenticatedRoute exact path="/libraries" withLayout component={Libraries} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
