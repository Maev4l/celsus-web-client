import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { useNotification } from '../shared/notifications';
import BookEditor from './BookEditor';
import { graphql } from '../shared/api-client';
import { AddBook } from './queries';

const NewBook = () => {
  const { libraryId } = useParams();
  const {
    state: { libraryName },
  } = useLocation();

  const { notify } = useNotification();

  const fetchData = async () => ({
    title: '',
    description: '',
    authors: [],
    isbn10: '',
    isbn13: '',
    thumbnail: '',
    tags: [],
    bookSet: '',
    bookSetOrder: 0,
    language: 'fr',
    library: {
      id: libraryId,
    },
  });

  const saveBook = async (data) => {
    const { library, ...rest } = data;
    await graphql(AddBook, { book: { ...rest, libraryId } });
  };

  const onSaveSuccess = async (data) => {
    const { title } = data;
    notify('success', `Book ${title} has been added into library ${libraryName}`);
  };

  return <BookEditor saveBook={saveBook} onSaveSuccess={onSaveSuccess} fetchData={fetchData} />;
};

export default NewBook;
