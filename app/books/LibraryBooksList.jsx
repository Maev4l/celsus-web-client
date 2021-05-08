import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';

import { NavHeaderActions } from '../shared/layout';
import { BooksList } from '../shared/ui';
import { FetchLibraryBooks } from './queries';
import { DeleteBook } from '../shared/queries/queries';

import { graphql } from '../shared/api-client';

const LibraryBooksList = () => {
  const { libraryId } = useParams();
  const [libraryName, setLibraryName] = useState('');

  const history = useHistory();

  const handleAddBook = () => {
    history.push({ pathname: `/libraries/${libraryId}/books/new`, state: { libraryName } });
  };

  const fetchData = async (page) => {
    const {
      library: { books, name },
    } = await graphql(FetchLibraryBooks, { id: libraryId, page });
    setLibraryName(name);
    return books;
  };

  const handleDeleteBook = async (id) => {
    await graphql(DeleteBook, { id });
  };

  return (
    <>
      <NavHeaderActions>
        <Button onClick={handleAddBook} color="primary" variant="outlined">
          Add Book
        </Button>
      </NavHeaderActions>
      <div>
        <Typography>
          Books in library <strong>{libraryName}</strong>
        </Typography>
      </div>
      <BooksList
        fetchData={(page) => fetchData(page)}
        onDeleteBook={(id) => handleDeleteBook(id)}
      />
    </>
  );
};

export default LibraryBooksList;
