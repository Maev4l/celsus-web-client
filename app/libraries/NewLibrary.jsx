import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { graphql } from '../shared/api-client';
import { AddLibrary } from './duck/queries';
import LibraryEditor from './LibraryEditor';

const NewLibrary = () => {
  const [state, setState] = useState({ loading: false });
  const history = useHistory();

  const library = {
    name: '',
    description: '',
  };

  const handleSave = (data) => {
    setState({ ...state, loading: true });
    graphql(AddLibrary, { library: data })
      .then(() => {
        history.push('/libraries');
      })
      .catch((e) => {
        setState({ ...state, loading: false });
        // TODO: Display error
      });
  };

  const { loading } = state;
  return <LibraryEditor library={library} loading={loading} onSave={handleSave} />;
};

export default NewLibrary;
