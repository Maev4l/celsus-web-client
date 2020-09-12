import React from 'react';
import { useParams } from 'react-router-dom';
import LibraryEditor from './LibraryEditor';

const UpdateLibrary = () => {
  const { id } = useParams();
  return <LibraryEditor />;
};

export default UpdateLibrary;
