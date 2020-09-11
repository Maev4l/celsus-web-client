import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Loop } from '@material-ui/icons';
import { Grid, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { operations } from './duck';
import LibraryListItem from './LibraryListItem';
import useGlobalStyles from '../shared/styles';
import { addHeaderActions } from '../shared/layout';

const LibrariesList = () => {
  const { getLibraries, deleteLibrary } = operations;
  const dispatch = useDispatch();
  const { flexGrow } = useGlobalStyles();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getLibraries());
    };
    fetchData();
  }, []);

  const { isLoading, libraries } = useSelector(
    (store) => ({
      isLoading: store.libraries.isLoading,
      libraries: store.libraries.libraries,
    }),
    shallowEqual,
  );

  const handleAddLibrary = () => {
    history.push('/libraries/new');
  };

  const ExtraActions = () => {
    return (
      <Button onClick={handleAddLibrary} color="primary" variant="outlined">
        Add Library
      </Button>
    );
  };

  const onDeleteLibrary = (id) => {
    dispatch(deleteLibrary(id)).then(() => dispatch(getLibraries()));
  };

  if (isLoading) {
    return <Loop />;
  }

  return (
    <div className={flexGrow}>
      {addHeaderActions(ExtraActions())}
      <Grid container spacing={3}>
        {libraries.map((library) => {
          const { id } = library;
          return (
            <Grid item key={id}>
              <LibraryListItem key={id} library={library} onDelete={onDeleteLibrary} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default LibrariesList;
