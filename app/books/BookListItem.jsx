import React, { useState } from 'react';
import clsx from 'clsx';
import {
  GridListTile,
  GridListTileBar,
  Typography,
  IconButton,
  CardMedia,
} from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import { SimpleModal } from '../shared/ui';
import useGlobalStyles from '../shared/styles';
import { BookThumbnailPlaceHolder } from '../shared/assets';

const useStyles = makeStyles({
  image: {
    width: 80 * 2.5,
    height: 115 * 2.5,
  },
  icon: {
    color: 'white',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

const BookListItem = ({ libraryId, book, onDelete }) => {
  const { id, title, thumbnail } = book;
  const { m1 } = useGlobalStyles();
  const { image, icon, titleBar } = useStyles();
  const [showDeletionConfirmation, showDeletionPopup] = useState(false);

  const handleClickDelete = () => {
    showDeletionPopup(!showDeletionConfirmation);
  };

  const handleCancelDelete = () => {
    showDeletionPopup(false);
  };

  const handleConfirmDelete = () => {
    onDelete(id);
  };

  const source = thumbnail ? `data:image/png;base64,${thumbnail}` : BookThumbnailPlaceHolder;

  return (
    <>
      <GridListTile className={clsx(m1)}>
        <Link to={`/libraries/${libraryId}/books/${id}`}>
          <CardMedia className={clsx(image)} image={source} />
        </Link>
        <GridListTileBar
          className={clsx(titleBar)}
          title={
            <Typography noWrap variant="subtitle2">
              {title}
            </Typography>
          }
          actionIcon={
            <IconButton className={icon} onClick={handleClickDelete}>
              <DeleteForever />
            </IconButton>
          }
        />
      </GridListTile>
      <SimpleModal
        open={showDeletionConfirmation}
        header="Deletion Confirmation"
        message={`Delete '${title}' ?`}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default BookListItem;
