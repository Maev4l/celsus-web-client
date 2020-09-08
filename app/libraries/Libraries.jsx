import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthenticatedRoute } from '../shared/routing';
import LibrariesList from './LibrariesList';

export default () => (
  <Switch>
    <AuthenticatedRoute exact path="/libraries" component={LibrariesList} />
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
