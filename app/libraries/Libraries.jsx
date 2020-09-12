/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-children-prop */
import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthenticatedRoute } from '../shared/routing';
import LibrariesList from './LibrariesList';
import NewLibrary from './NewLibrary';
import UpdateLibrary from './UpdateLibrary';

export default () => (
  <Switch>
    <AuthenticatedRoute exact path="/libraries">
      <LibrariesList />
    </AuthenticatedRoute>
    <AuthenticatedRoute exact path="/libraries/new">
      <NewLibrary />
    </AuthenticatedRoute>
    <AuthenticatedRoute path="/libraries/:id">
      <UpdateLibrary />
    </AuthenticatedRoute>
  </Switch>
);
