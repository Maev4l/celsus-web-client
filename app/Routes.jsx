import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './home/Home';
import Libraries from './libraries/Libraries';
import SignIn from './authentication/SignIn';
import { AuthenticatedRoute } from './shared/routing';

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
