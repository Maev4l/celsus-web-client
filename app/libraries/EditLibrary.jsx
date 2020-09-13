import React from 'react';
import { useParams } from 'react-router-dom';

import LibraryEditor from './LibraryEditor';
import { graphql } from '../shared/api-client';
import { FetchLibrary, UpdateLibrary } from './queries';

const EditLibrary = () => {
  const { id } = useParams();

  const fetchData = async () => {
    const data = await graphql(FetchLibrary, { id });
    return data;
  };

  const saveLibrary = async (data) => {
    graphql(UpdateLibrary, { library: data });
  };

  return <LibraryEditor saveLibrary={saveLibrary} fetchData={fetchData} />;
};

export default EditLibrary;
