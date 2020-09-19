import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { GridList } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

import useGlobalStyles from '../styles';
import Loading from './Loading';
import BookListItem from './BookListItem';

const useStyles = makeStyles({
  container: {
    overflow: 'hidden',
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

const BooksList = ({ fetchData, onDeleteBook, showLibraryName = false, refetch = false }) => {
  const [state, setState] = useState({
    loading: false,
    books: [],
    total: 0,
    itemsPerPage: 0,
    page: 0,
  });
  const { container, gridList } = useStyles();
  const { flex, flexWrap, flexContentAround, mb1, mt1 } = useGlobalStyles();

  const internalFetchData = (page) => {
    setState({ ...state, loading: true });
    fetchData(page).then(({ books, total, itemsPerPage }) => {
      setState({ ...state, loading: false, books, total, itemsPerPage, page });
    });
  };

  useEffect(() => {
    internalFetchData(1);
  }, [refetch]);

  const { books, loading, page, total, itemsPerPage } = state;

  const handlePageChange = (event, selectedPage) => {
    internalFetchData(selectedPage);
  };

  const handleDeleteBook = (id) => {
    onDeleteBook(id).then(internalFetchData(page));
  };

  const showPagination = books.length > 0 && books.length < total;

  return (
    <div className={clsx(flex, flexWrap, flexContentAround, container)}>
      <Loading loading={loading} />
      {showPagination && (
        <Pagination
          showFirstButton
          showLastButton
          page={page}
          size="large"
          count={Math.ceil(total / itemsPerPage)}
          onChange={handlePageChange}
          color="primary"
          className={clsx(mt1, mb1)}
          variant="outlined"
        />
      )}
      <GridList cellHeight="auto" className={gridList}>
        {books.map((book) => {
          const { id } = book;
          return (
            <BookListItem
              key={id}
              book={book}
              onDelete={handleDeleteBook}
              showLibraryName={showLibraryName}
            />
          );
        })}
      </GridList>
      {showPagination && (
        <Pagination
          showFirstButton
          showLastButton
          page={page}
          size="large"
          count={Math.ceil(total / itemsPerPage)}
          onChange={handlePageChange}
          color="primary"
          className={clsx(mt1, mb1)}
          variant="outlined"
        />
      )}
    </div>
  );
};

export default BooksList;
