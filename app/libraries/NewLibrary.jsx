import React from 'react';

import { graphql } from '../shared/api-client';
import { AddLibrary } from './queries';
import LibraryEditor from './LibraryEditor';

const NewLibrary = () => {
  const fetchData = async () => ({ library: { name: '', description: '' } });

  const saveLibrary = async (data) => {
    graphql(AddLibrary, { library: data });
  };

  return <LibraryEditor saveLibrary={saveLibrary} fetchData={fetchData} />;
};

export default NewLibrary;
