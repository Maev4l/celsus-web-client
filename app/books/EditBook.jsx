import React from 'react';
import { useParams } from 'react-router-dom';

import { graphql } from '../shared/api-client';
import { FetchBook, UpdateBook } from './queries';
import { useNotification } from '../shared/notifications';
import BookEditor from './BookEditor';

const EditBook = () => {
  const { bookId } = useParams();

  const { notify } = useNotification();

  const fetchData = async () => {
    // Flatten the data structure coming from the graphql response
    const { book } = await graphql(FetchBook, { id: bookId });
    const { library, ...rest } = book;
    const { id: libraryId } = library;
    return { book: { ...rest, libraryId } };
  };

  const saveBook = async (data) => {
    await graphql(UpdateBook, { book: data });
  };

  const onSaveSuccess = (data) => {
    const { title } = data;
    notify('success', `Book ${title} has been updated`);
  };

  return <BookEditor fetchData={fetchData} saveBook={saveBook} onSaveSuccess={onSaveSuccess} />;
};

export default EditBook;
