import React from 'react';
import { useParams } from 'react-router-dom';

const LibraryEditor = () => {
  const { id } = useParams();
  return <div>Library editor: ${id}</div>;
};

export default LibraryEditor;
