import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions, IconButton, Chip } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';

import { SimpleModal } from '../shared/ui';

import useGlobalStyles from '../shared/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minWidth: 275,
  },
}));

const LibraryListItem = ({ library }) => {
  const { id, name, description, booksCount } = library;
  const { pt2, pr2, pl2, flexContentBetween } = useGlobalStyles();
  const { card } = useStyles();

  const [showDeletionConfirmation, showDeletionPopup] = useState(false);

  const handleClickBook = () => {};

  const handleClickDelete = () => {
    showDeletionPopup(!showDeletionConfirmation);
  };

  const handleCancelDelete = () => {
    showDeletionPopup(false);
  };

  const handleConfirmDelete = () => {};

  return (
    <div>
      <Card className={clsx(pt2, pr2, pl2, card)} variant="outlined">
        <CardHeader title={name} />
        <CardContent>{description}</CardContent>
        <CardActions disableSpacing className={flexContentBetween}>
          <Chip label={`Books: ${booksCount}`} color="primary" onClick={handleClickBook} />
          {booksCount === 0 && (
            <IconButton onClick={() => handleClickDelete()}>
              <DeleteForever />
            </IconButton>
          )}
        </CardActions>
      </Card>
      <SimpleModal
        open={showDeletionConfirmation}
        header="Deletion Confirmation"
        message={`Delete '${name}' ?`}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default LibraryListItem;
