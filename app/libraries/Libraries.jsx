import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthenticatedRoute } from '../shared/routing';
import LibrariesListContainer from './LibrariesListContainer';

export default () => (
  <Switch>
    <AuthenticatedRoute exact path="/libraries" component={LibrariesListContainer} />
    {/*
    <AuthenticatedRoute
      exact
      path="/libraries/new"
      render={(matchProps) => <LibraryEditor {...matchProps} />}
    />
    <AuthenticatedRoute
      path="/libraries/:id"
      render={(matchProps) => <LibraryEditor {...matchProps} />}
    />
    */}
  </Switch>
);
