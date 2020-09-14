import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthenticatedRoute } from '../shared/routing';
import LibrariesList from './LibrariesList';
import NewLibrary from './NewLibrary';
import EditLibrary from './EditLibrary';

import LibraryBooksList from '../books/LibraryBooksList';

export default () => (
  <Switch>
    <AuthenticatedRoute exact path="/libraries">
      <LibrariesList />
    </AuthenticatedRoute>
    <AuthenticatedRoute exact path="/libraries/new">
      <NewLibrary />
    </AuthenticatedRoute>
    <AuthenticatedRoute exact path="/libraries/:id">
      <EditLibrary />
    </AuthenticatedRoute>
    <AuthenticatedRoute exact path="/libraries/:id/books">
      <LibraryBooksList />
    </AuthenticatedRoute>
  </Switch>
);
