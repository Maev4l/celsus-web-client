import React, { useState } from 'react';
import clsx from 'clsx';
import { FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';

import { ImageUploader } from '../shared/ui';
import useGlobalStyles from '../shared/styles';

const BookEditor = () => {
  const [state, setState] = useState({ loading: false, book: {} });

  const { flex, flexColumn, flexContentEnd, mt2 } = useGlobalStyles();

  const handleChange = (prop) => (e) => {
    const {
      target: { value },
    } = e;
    const { book: changedBook } = state;
    changedBook[prop] = value;
    setState({ ...state, book: changedBook });
  };

  const handleSave = async (data) => {};

  const { book } = state;
  const { title, bookSet, bookSetOrder, authors, description, isbn13, isbn10 } = book;

  return (
    <div className={clsx(flex, flexColumn)}>
      <FormControl>
        <ImageUploader shape="rectangular" size="large" />
      </FormControl>
      {/* TODO: Language */}
      <FormControl className={clsx(mt2)}>
        <InputLabel>Book title</InputLabel>
        <Input value={title} onChange={handleChange('title')} />
      </FormControl>
      <FormControl className={clsx(mt2)}>
        <InputLabel>Bookset name</InputLabel>
        <Input value={bookSet} onChange={handleChange('bookSet')} />
      </FormControl>
      <FormControl className={clsx(mt2)}>
        <InputLabel>Bookset order</InputLabel>
        <Input value={bookSetOrder} onChange={handleChange('bookSetOrder')} disabled={!bookSet} />
      </FormControl>
      <FormControl className={clsx(mt2)}>
        <InputLabel>Authors</InputLabel>
        <Input value={authors} onChange={handleChange('authors')} />
        {/* eslint-disable */}
        <FormHelperText>{`(semi colon ';' separated)`}</FormHelperText>
        {/* eslint-enable */}
      </FormControl>
      <FormControl className={clsx(mt2)}>
        <InputLabel>Description</InputLabel>
        <Input multiline rows={5} value={description} onChange={handleChange('description')} />
      </FormControl>
      <FormControl className={clsx(mt2)}>
        <InputLabel>ISBN13</InputLabel>
        <Input value={isbn13} onChange={handleChange('isbn13')} disabled={!bookSet} />
      </FormControl>
      <FormControl className={clsx(mt2)}>
        <InputLabel>ISBN10</InputLabel>
        <Input value={isbn10} onChange={handleChange('isbn10')} disabled={!bookSet} />
      </FormControl>
      <div className={clsx(flex, flexContentEnd)}>
        <Button color="primary" variant="outlined" onClick={() => handleSave(book)} className={mt2}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default BookEditor;
