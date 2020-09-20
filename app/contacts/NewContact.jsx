import React from 'react';

import ContactEditor from './ContactEditor';
import { useNotification } from '../shared/notifications';
import { graphql } from '../shared/api-client';
import { AddContact } from './queries';

const NewContact = () => {
  const { notify } = useNotification();
  const fetchData = async () => ({
    nickname: '',
    thumbnail: '',
  });

  const saveContact = async (data) => {
    await graphql(AddContact, { contact: data });
  };

  const onSaveSuccess = (data) => {
    const { nickname } = data;
    notify('success', `${nickname} has been added as a contact`);
  };

  return (
    <ContactEditor fetchData={fetchData} saveContact={saveContact} onSaveSuccess={onSaveSuccess} />
  );
};

export default NewContact;
