import React from 'react';
import { useParams } from 'react-router-dom';

import LibraryEditor from './LibraryEditor';
import { graphql } from '../shared/api-client';
import { FetchLibrary, UpdateLibrary } from './queries';
import { useNotification } from '../shared/notifications';

const EditLibrary = () => {
  const { libraryId } = useParams();
  const { notify } = useNotification();

  const fetchData = async () => {
    const data = await graphql(FetchLibrary, { id: libraryId });
    return data;
  };

  const saveLibrary = async (data) => {
    await graphql(UpdateLibrary, { library: data });
  };

  const onSaveSuccess = (data) => {
    const { name } = data;
    notify('success', `Library ${name} has been updated`);
  };

  return (
    <LibraryEditor saveLibrary={saveLibrary} fetchData={fetchData} onSaveSuccess={onSaveSuccess} />
  );
};

export default EditLibrary;
