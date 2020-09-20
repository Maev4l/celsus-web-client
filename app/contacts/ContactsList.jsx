import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import { Grid, Button } from '@material-ui/core';

import { graphql } from '../shared/api-client';
import { ListContacts } from './queries';
import useGlobalStyles from '../shared/styles';
import ContactListItem from './ContactListItem';
import { Loading } from '../shared/ui';
import { NavHeaderActions } from '../shared/layout';

const ContactsList = () => {
  const [state, setState] = useState({ loading: false, contacts: [] });

  const { flex, flexGrow } = useGlobalStyles();

  const fetchData = async () => {
    setState({ ...state, loading: true });
    graphql(ListContacts).then(({ contacts }) => {
      setState({ ...state, contacts, loading: false });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddContact = () => {};

  const { contacts, loading } = state;
  return (
    <div className={clsx(flex, flexGrow)}>
      <Loading loading={loading} />
      <NavHeaderActions>
        <Button onClick={handleAddContact} color="primary" variant="outlined">
          Add Contact
        </Button>
      </NavHeaderActions>
      <Grid container spacing={3}>
        {contacts.map((contact) => {
          const { id } = contact;
          return (
            <Grid item key={id}>
              <ContactListItem key={id} contact={contact} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ContactsList;
