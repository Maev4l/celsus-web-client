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
    const { book } = await graphql(FetchBook, { id: bookId });
    return book;
  };

  const saveBook = async (data) => {
    // Flatten the data structure coming from the original graphql fetch-book response
    const { library, ...rest } = data;
    const { id: libraryId } = library;
    await graphql(UpdateBook, { book: { ...rest, libraryId } });
  };

  const onSaveSuccess = (data) => {
    const { title } = data;
    notify('success', `Book ${title} has been updated`);
  };

  return <BookEditor fetchData={fetchData} saveBook={saveBook} onSaveSuccess={onSaveSuccess} />;
};

export default EditBook;
