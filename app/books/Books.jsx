import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthenticatedRoute } from '../shared/routing';
import LibraryBooksList from './LibraryBooksList';

export default () => (
  <Switch>
    <AuthenticatedRoute exact path="/libraries/:id/books">
      <LibraryBooksList />
    </AuthenticatedRoute>
  </Switch>
);
