import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthenticatedRoute } from '../shared/routing';
import ContactsList from './ContactsList';

export default () => (
  <Switch>
    <AuthenticatedRoute exact path="/contacts">
      <ContactsList />
    </AuthenticatedRoute>
  </Switch>
);
