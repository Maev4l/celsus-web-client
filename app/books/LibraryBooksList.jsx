import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, Button, Typography } from '@material-ui/core';
import { useParams, useLocation } from 'react-router-dom';

import { NavHeaderActions } from '../shared/layout';
import { Loading } from '../shared/ui';
import { FetchLibraryBooks, DeleteBook } from './queries';
import useGlobalStyles from '../shared/styles';
import { graphql } from '../shared/api-client';
import BookListItem from './BookListItem';

const useStyles = makeStyles((theme) => ({
  container: {
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const LibraryBooksList = () => {
  const { id: libraryId } = useParams();
  const { flex, flexWrap, flexContentAround } = useGlobalStyles();
  const { container, gridList } = useStyles();
  const [state, setState] = useState({
    loading: false,
    books: [],
    total: 0,
    itemsPerPage: 0,
    page: 0,
  });
  const {
    state: { libraryName },
  } = useLocation();

  const handleAddBook = () => {};

  const fetchData = async (page) => {
    setState({ ...state, loading: true });
    graphql(FetchLibraryBooks, { id: libraryId, page }).then(
      ({
        library: {
          content: { books, total, itemsPerPage },
        },
      }) => {
        setState({ ...state, books, total, itemsPerPage, loading: false, page: page + 1 });
      },
    );
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  const { books, loading, page } = state;

  const handleDeleteLibrary = (id) => {
    graphql(DeleteBook, { id }).then(() => {
      fetchData(page);
    });
  };

  return (
    <>
      <div>
        <Typography>
          Books in library <strong>{libraryName}</strong>
        </Typography>
      </div>
      <div className={clsx(flex, flexWrap, flexContentAround, container)}>
        <Loading loading={loading} />
        <NavHeaderActions>
          <Button onClick={handleAddBook} color="primary" variant="outlined">
            Add Book
          </Button>
        </NavHeaderActions>

        <GridList cellHeight="auto" className={gridList}>
          {books.map((book) => {
            const { id } = book;
            return <BookListItem key={id} book={book} onDelete={handleDeleteLibrary} />;
          })}
        </GridList>
      </div>
    </>
  );
};

export default LibraryBooksList;
