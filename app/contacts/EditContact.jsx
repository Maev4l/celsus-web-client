import React from 'react';
import { useParams } from 'react-router-dom';

import { graphql } from '../shared/api-client';
import { FetchContact, UpdateContact } from './queries';
import ContactEditor from './ContactEditor';
import { useNotification } from '../shared/notifications';

const EditContact = () => {
  const { contactId } = useParams();
  const { notify } = useNotification();

  const fetchData = async () => {
    const { contact } = await graphql(FetchContact, { id: contactId });
    return contact;
  };

  const saveContact = async (data) => {
    await graphql(UpdateContact, { contact: data });
  };

  const onSaveSuccess = (data) => {
    const { nickname } = data;
    notify('success', `Contact ${nickname} has been updated`);
  };

  return (
    <ContactEditor fetchData={fetchData} onSaveSuccess={onSaveSuccess} saveContact={saveContact} />
  );
};

export default EditContact;
