import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthenticatedRoute } from '../shared/routing';
import LibrariesList from './LibrariesList';
import NewLibrary from './NewLibrary';
import EditLibrary from './EditLibrary';

import Books from '../books/Books';

export default () => (
  <Switch>
    <AuthenticatedRoute exact path="/libraries">
      <LibrariesList />
    </AuthenticatedRoute>
    <AuthenticatedRoute exact path="/libraries/new">
      <NewLibrary />
    </AuthenticatedRoute>
    <AuthenticatedRoute exact path="/libraries/:libraryId">
      <EditLibrary />
    </AuthenticatedRoute>
    <AuthenticatedRoute path="/libraries/:libraryId/books">
      <Books />
    </AuthenticatedRoute>
  </Switch>
);
