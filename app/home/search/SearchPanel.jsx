import React, { useState } from 'react';
import { FormControl, FormHelperText, InputLabel, Input, InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import clsx from 'clsx';

import { BooksList } from '../../shared/ui';
import useGlobalStyles from '../../shared/styles';
import { graphql } from '../../shared/api-client';
import { DeleteBook } from '../../shared/queries/queries';
import { SearchBooks } from './queries';

const SearchPanel = () => {
  const [state, setState] = useState({ query: '', refetch: false });
  const { flex, flexColumn } = useGlobalStyles();

  const { refetch } = state;

  const fetchData = async (page) => {
    const { query } = state;
    if (query) {
      const keywords = query.split(' ');
      const {
        searchBooks: { books, total, itemsPerPage },
      } = await graphql(SearchBooks, { query: { page, keywords } });
      return { books, total, itemsPerPage };
    }
    return { books: [], total: 0, itemsPerPage: 0 };
  };

  const onSubmitQuery = async () => {
    setState({ ...state, refetch: !refetch });
  };

  const handleQueryChange = (e) => {
    const {
      target: { value },
    } = e;

    setState({ ...state, query: value });
  };

  const handleDeleteBook = async (id) => {
    await graphql(DeleteBook, { id });
  };

  const handleKeyPress = async ({ key }) => {
    const { query } = state;
    if (key === 'Enter' && query) {
      onSubmitQuery();
    }
  };

  const { query } = state;

  return (
    <div className={clsx(flex, flexColumn)}>
      <FormControl fullWidth>
        <InputLabel>Search books</InputLabel>
        <Input
          value={query}
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          onChange={handleQueryChange}
          onKeyPress={handleKeyPress}
        />
        <FormHelperText>Search by title or by author</FormHelperText>
      </FormControl>
      <BooksList
        fetchData={fetchData}
        refetch={refetch}
        onDeleteBook={(id) => handleDeleteBook(id)}
        showLibraryName
      />
    </div>
  );
};

export default SearchPanel;
