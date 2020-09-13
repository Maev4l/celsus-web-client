import React from 'react';

import { graphql } from '../shared/api-client';
import { AddLibrary } from './queries';
import LibraryEditor from './LibraryEditor';
import { useNotification } from '../shared/notifications';

const NewLibrary = () => {
  const fetchData = async () => ({ library: { name: '', description: '' } });

  const { notify } = useNotification();

  const saveLibrary = async (data) => {
    await graphql(AddLibrary, { library: data });
  };

  const onSaveSuccess = (data) => {
    const { name } = data;
    notify('success', `Library ${name} has been created`);
  };

  return (
    <LibraryEditor saveLibrary={saveLibrary} fetchData={fetchData} onSaveSuccess={onSaveSuccess} />
  );
};

export default NewLibrary;
