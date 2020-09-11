/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-children-prop */
import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthenticatedRoute } from '../shared/routing';
import LibrariesList from './LibrariesList';
import LibraryEditor from './LibraryEditor';

export default () => (
  <Switch>
    <AuthenticatedRoute exact path="/libraries">
      <LibrariesList />
    </AuthenticatedRoute>
    <AuthenticatedRoute exact path="/libraries/new">
      <LibraryEditor />
    </AuthenticatedRoute>
    <AuthenticatedRoute path="/libraries/:id">
      <LibraryEditor />
    </AuthenticatedRoute>
  </Switch>
);
