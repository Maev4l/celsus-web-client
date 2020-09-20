import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { Loading, ImageUploader } from '../shared/ui';
import useGlobalStyles from '../shared/styles';
import { useNotification } from '../shared/notifications';
import { graphql } from '../shared/api-client';
import { ResizeImage } from '../shared/queries/queries';

const ContactEditor = ({ saveContact, fetchData, onSaveSuccess }) => {
  const [state, setState] = useState({ loading: false, contact: {} });
  const { flex, flexColumn, flexContentEnd, mt2 } = useGlobalStyles();
  const history = useHistory();
  useEffect(() => {
    setState({ ...state, loading: true });
    fetchData().then((contact) => {
      setState({ ...state, loading: false, contact });
    });
  }, []);
  const { notify } = useNotification();

  const handleThumbnailChange = (value) => {
    const { contact: changedContact } = state;
    graphql(ResizeImage, { image: { width: 160, height: 160, image: value } }).then(
      ({ resizeImage }) => {
        changedContact.thumbnail = resizeImage;
        setState({ ...state, contact: changedContact });
      },
    );
  };

  const handleChange = (prop) => (e) => {
    const {
      target: { value },
    } = e;
    const { contact: changedContact } = state;
    changedContact[prop] = value;
    setState({ ...state, contact: changedContact });
  };

  const handleSave = async (data) => {
    setState({ ...state, loading: true });
    try {
      await saveContact(data);
      if (onSaveSuccess) {
        onSaveSuccess(data);
      }
      history.push('/contacts');
    } catch (e) {
      setState({ ...state, loading: false });
      notify('error', e.message);
    }
  };

  const { contact, loading } = state;
  const { nickname, thumbnail } = contact;
  return (
    <div className={clsx(flex, flexColumn)}>
      <Loading loading={loading} />
      <FormControl>
        <ImageUploader
          shape="circle"
          size="large"
          onContentChanged={handleThumbnailChange}
          source={thumbnail}
        />
      </FormControl>
      <FormControl className={clsx(mt2)}>
        <InputLabel required shrink>
          Contact nickname
        </InputLabel>
        <Input required value={nickname} onChange={handleChange('nickname')} />
      </FormControl>
      <div className={clsx(flex, flexContentEnd)}>
        <Button
          disabled={!nickname}
          color="primary"
          variant="outlined"
          onClick={() => handleSave(contact)}
          className={mt2}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default ContactEditor;
