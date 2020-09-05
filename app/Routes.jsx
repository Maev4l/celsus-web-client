import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './home/Home';
import SecondPage from './SecondPage';
import SignIn from './authentication/SignIn';

const AuthenticatedRoute = (props) => {
  const { authenticated } = useSelector((store) => ({ authenticated: store.authn.authenticated }));
  if (!authenticated) {
    return <Redirect to="/sign-in" />;
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...props} />;
};

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthenticatedRoute exact path="/" component={Home} />
        <AuthenticatedRoute exact path="/next" component={SecondPage} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
