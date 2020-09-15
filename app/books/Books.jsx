import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthenticatedRoute } from '../shared/routing';
import LibraryBooksList from './LibraryBooksList';
import EditBook from './EditBook';
import NewBook from './NewBook';

export default () => (
  <Switch>
    <AuthenticatedRoute exact path="/libraries/:libraryId/books">
      <LibraryBooksList />
    </AuthenticatedRoute>
    <AuthenticatedRoute exact path="/libraries/:libraryId/books/new">
      <NewBook />
    </AuthenticatedRoute>
    <AuthenticatedRoute exact path="/libraries/:libraryId/books/:bookId">
      <EditBook />
    </AuthenticatedRoute>
  </Switch>
);
