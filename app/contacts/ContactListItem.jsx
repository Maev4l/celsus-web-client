import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  Avatar,
  CardActions,
  IconButton,
  CardActionArea,
} from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

import { ContactAvatarPlaceHolder } from '../shared/assets';
import useGlobalStyles from '../shared/styles';
import { SimpleModal } from '../shared/ui';

const useStyles = makeStyles((theme) => ({
  card: {
    // textAlign: 'center',
    color: theme.palette.text.secondary,
    minWidth: 275,
    minHeight: 150,
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

const ContactListItem = ({ contact, onDelete }) => {
  const { card, avatar } = useStyles();
  const { flex, m1, flexContentEnd } = useGlobalStyles();
  const history = useHistory();
  const [showDeletionConfirmation, showDeletionPopup] = useState(false);

  const onClick = () => {
    const { id } = contact;
    history.push(`/contacts/${id}`);
  };

  const handleClickDelete = () => {
    showDeletionPopup(!showDeletionConfirmation);
  };

  const handleCancelDelete = () => {
    showDeletionPopup(false);
  };

  const handleConfirmDelete = () => {
    const { id } = contact;
    onDelete(id);
  };
  const { nickname, thumbnail } = contact;
  const source = thumbnail ? `data:image/png;base64,${thumbnail}` : ContactAvatarPlaceHolder;
  return (
    <>
      <Card className={clsx(card)}>
        <CardActionArea onClick={onClick}>
          <div className={clsx(flex)}>
            <Avatar className={clsx(avatar, m1)} src={source} variant="circle" />
            <CardHeader title={nickname} />
          </div>
        </CardActionArea>
        <CardActions disableSpacing className={(flex, flexContentEnd)}>
          <IconButton onClick={handleClickDelete}>
            <DeleteForever />
          </IconButton>
        </CardActions>
      </Card>
      <SimpleModal
        open={showDeletionConfirmation}
        header="Deletion Confirmation"
        message={`Delete '${nickname}' ?`}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default ContactListItem;
