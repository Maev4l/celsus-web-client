import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Select,
  MenuItem,
} from '@material-ui/core';

import { ImageUploader, Loading, useBookLanguages } from '../shared/ui';
import useGlobalStyles from '../shared/styles';
import { useNotification } from '../shared/notifications';

const BookEditor = ({ saveBook, fetchData, onSaveSuccess }) => {
  const [state, setState] = useState({ loading: false, book: {} });
  const { flex, flexColumn, flexContentEnd, mt2 } = useGlobalStyles();
  const history = useHistory();
  const { notify } = useNotification();

  useEffect(() => {
    setState({ ...state, loading: true });
    fetchData().then((book) => {
      setState({ ...state, loading: false, book });
    });
  }, []);

  const { getBooksLanguages, getLanguageDescription } = useBookLanguages();
  const booksLanguages = getBooksLanguages();

  const handleChange = (prop) => (e) => {
    const {
      target: { value },
    } = e;
    const { book: changedBook } = state;
    changedBook[prop] = value;
    setState({ ...state, book: changedBook });
  };

  const handleAuthorsChange = (e) => {
    const {
      target: { value },
    } = e;

    const { book: changedBook } = state;
    changedBook.authors = value.split(';');
    setState({ ...state, book: changedBook });
  };

  const handleBookSetOnblur = () => {
    const { book: changedBook } = state;
    const { bookSet } = changedBook;
    if (!bookSet) {
      changedBook.bookSetOrder = 0;
      setState({ ...state, book: changedBook });
    } else {
      const { bookSetOrder } = changedBook;
      if (bookSetOrder === 0) {
        changedBook.bookSetOrder = 1;
        setState({ ...state, book: changedBook });
      }
    }
  };

  const handleThumbnailChange = (value) => {
    const { book: changedBook } = state;
    changedBook.thumbnail = value;
    setState({ ...state, book: changedBook });
  };

  const handleLanguageChange = (e) => {
    const {
      target: { value },
    } = e;
    const { book: changedBook } = state;
    changedBook.language = value;
    setState({ ...state, book: changedBook });
  };

  const handleSave = async (data) => {
    setState({ ...state, loading: true });
    try {
      await saveBook(data);
      if (onSaveSuccess) {
        onSaveSuccess(data);
      }
      const {
        book: {
          library: { id: libraryId },
        },
      } = state;

      history.push(`/libraries/${libraryId}/books`);
    } catch (e) {
      setState({ ...state, loading: false });
      notify('error', e.message);
    }
  };

  const { book, loading } = state;
  const {
    title,
    bookSet,
    bookSetOrder,
    authors,
    description,
    isbn13,
    isbn10,
    thumbnail,
    // tags,
    language,
  } = book;

  return (
    <div className={clsx(flex, flexColumn)}>
      <Loading loading={loading} />
      <FormControl>
        <ImageUploader
          shape="rectangular"
          size="large"
          onContentChanged={handleThumbnailChange}
          source={thumbnail}
        />
      </FormControl>
      <FormControl className={clsx(mt2)}>
        <InputLabel required shrink>
          Book title
        </InputLabel>
        <Input required value={title} onChange={handleChange('title')} />
      </FormControl>
      <FormControl className={clsx(mt2)}>
        <InputLabel shrink>Language</InputLabel>
        <Select
          value={language || 'fr'}
          renderValue={(v) => getLanguageDescription(v)}
          onChange={handleLanguageChange}
        >
          {booksLanguages.map((l) => {
            const { id, value } = l;
            return (
              <MenuItem key={id} value={id}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl className={clsx(mt2)}>
        <InputLabel shrink>Bookset name</InputLabel>
        <Input value={bookSet} onChange={handleChange('bookSet')} onBlur={handleBookSetOnblur} />
      </FormControl>
      <FormControl className={clsx(mt2)}>
        <InputLabel shrink>Bookset order</InputLabel>
        <Input value={bookSetOrder} onChange={handleChange('bookSetOrder')} disabled={!bookSet} />
      </FormControl>
      <FormControl className={clsx(mt2)}>
        <InputLabel shrink>Authors</InputLabel>
        <Input value={authors ? authors.join(';') : ''} onChange={handleAuthorsChange} />
        {/* eslint-disable */}
        <FormHelperText>{`(semi colon ';' separated)`}</FormHelperText>
        {/* eslint-enable */}
      </FormControl>
      <FormControl className={clsx(mt2)}>
        <InputLabel shrink>Description</InputLabel>
        <Input multiline rows={5} value={description} onChange={handleChange('description')} />
      </FormControl>
      <FormControl className={clsx(mt2)}>
        <InputLabel shrink>ISBN13</InputLabel>
        <Input value={isbn13} onChange={handleChange('isbn13')} />
      </FormControl>
      <FormControl className={clsx(mt2)}>
        <InputLabel shrink>ISBN10</InputLabel>
        <Input value={isbn10} onChange={handleChange('isbn10')} />
      </FormControl>
      <div className={clsx(flex, flexContentEnd)}>
        <Button
          disabled={!title}
          color="primary"
          variant="outlined"
          onClick={() => handleSave(book)}
          className={mt2}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default BookEditor;
