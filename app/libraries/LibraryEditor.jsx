import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  CircularProgress,
  Backdrop,
} from '@material-ui/core';

import useGlobalStyles from '../shared/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const LibraryEditor = ({ library: initialLibrary, loading, onSave }) => {
  const [library, setLibrary] = useState(initialLibrary);

  const { backdrop } = useStyles();
  const { flex, flexColumn, flexContentEnd, mt2 } = useGlobalStyles();
  const { name, description } = library;

  const handleChange = (prop) => (e) => {
    const {
      target: { value },
    } = e;
    setLibrary({ ...library, [prop]: value });
  };

  return (
    <div className={clsx(flex, flexColumn)}>
      <Backdrop open={loading} className={backdrop}>
        <CircularProgress color="primary" />
      </Backdrop>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input ivalue={name} onChange={handleChange('name')} />
      </FormControl>
      <FormControl className={clsx(mt2)}>
        <InputLabel>Description</InputLabel>
        <Input multiline rows={5} value={description} onChange={handleChange('description')} />
      </FormControl>
      <div className={clsx(flex, flexContentEnd)}>
        <Button color="primary" variant="outlined" onClick={() => onSave(library)} className={mt2}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default LibraryEditor;
