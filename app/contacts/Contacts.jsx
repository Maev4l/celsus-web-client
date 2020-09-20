import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthenticatedRoute } from '../shared/routing';
import ContactsList from './ContactsList';
import NewContact from './NewContact';
import EditContact from './EditContact';

export default () => (
  <Switch>
    <AuthenticatedRoute exact path="/contacts">
      <ContactsList />
    </AuthenticatedRoute>
    <AuthenticatedRoute exact path="/contacts/new">
      <NewContact />
    </AuthenticatedRoute>
    <AuthenticatedRoute exact path="/contacts/:contactId">
      <EditContact />
    </AuthenticatedRoute>
  </Switch>
);
