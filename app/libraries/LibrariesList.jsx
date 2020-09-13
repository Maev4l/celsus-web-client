import React, { useEffect, useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { graphql } from '../shared/api-client';
import { ListLibraries, DeleteLibrary } from './queries';

import LibraryListItem from './LibraryListItem';
import useGlobalStyles from '../shared/styles';
import { NavHeaderActions } from '../shared/layout';
import { Loading } from '../shared/ui';

const LibrariesList = () => {
  const { flexGrow } = useGlobalStyles();
  const history = useHistory();
  const [state, setState] = useState({ loading: false, libraries: [] });

  const fetchData = async () => {
    setState({ ...state, loading: true });
    graphql(ListLibraries).then(({ libraries }) => {
      setState({ ...state, libraries, loading: false });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddLibrary = () => {
    history.push('/libraries/new');
  };

  const handleEditLibrary = (id) => {
    history.push(`/libraries/${id}`);
  };

  const handleDeleteLibrary = (id) => {
    graphql(DeleteLibrary, { id }).then(() => {
      fetchData();
    });
  };

  const { loading, libraries } = state;

  return (
    <div className={flexGrow}>
      <Loading loading={loading} />
      <NavHeaderActions>
        <Button onClick={handleAddLibrary} color="primary" variant="outlined">
          Add Library
        </Button>
      </NavHeaderActions>
      <Grid container spacing={3}>
        {libraries.map((library) => {
          const { id } = library;
          return (
            <Grid item key={id}>
              <LibraryListItem
                key={id}
                library={library}
                onDelete={handleDeleteLibrary}
                onClick={() => handleEditLibrary(id)}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default LibrariesList;
