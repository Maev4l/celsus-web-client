import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { Loading } from '../shared/ui';
import useGlobalStyles from '../shared/styles';
import { useNotification } from '../shared/notifications';

const LibraryEditor = ({ saveLibrary, fetchData, onSaveSuccess }) => {
  const [state, setState] = useState({ loading: false, library: { name: '', description: '' } });

  useEffect(() => {
    setState({ ...state, loading: true });
    fetchData().then(({ library }) => {
      setState({ ...state, loading: false, library });
    });
  }, []);

  const history = useHistory();
  const { notify } = useNotification();
  const { flex, flexColumn, flexContentEnd, mt2 } = useGlobalStyles();

  const handleChange = (prop) => (e) => {
    const {
      target: { value },
    } = e;
    const { library: changedLibrary } = state;
    changedLibrary[prop] = value;
    setState({ ...state, library: changedLibrary });
  };

  const handleSave = async (data) => {
    setState({ ...state, loading: true });
    try {
      await saveLibrary(data);
      if (onSaveSuccess) {
        onSaveSuccess(data);
      }
      history.push('/libraries');
    } catch (e) {
      setState({ ...state, loading: false });
      notify('error', e.message);
    }
  };

  const { library, loading } = state;
  const { name, description } = library;

  return (
    <div className={clsx(flex, flexColumn)}>
      <Loading loading={loading} />
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input value={name} onChange={handleChange('name')} />
      </FormControl>
      <FormControl className={clsx(mt2)}>
        <InputLabel>Description</InputLabel>
        <Input multiline rows={5} value={description} onChange={handleChange('description')} />
      </FormControl>
      <div className={clsx(flex, flexContentEnd)}>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => handleSave(library)}
          className={mt2}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default LibraryEditor;
