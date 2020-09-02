import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FirstPage}></Route>
        <Route exact path="/next" component={SecondPage}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
