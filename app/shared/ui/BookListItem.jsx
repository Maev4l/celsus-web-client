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

import SimpleModal from './SimpleModal';
import useGlobalStyles from '../styles';
import { BookThumbnailPlaceHolder } from '../assets';

const useStyles = makeStyles({
  image: {
    width: 80 * 2.5,
    height: 115 * 2.5,
  },
  icon: {
    color: 'white',
  },
  titleBarBottom: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  titleBarTop: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

const BookListItem = ({ book, onDelete, showLibraryName = false }) => {
  const {
    id,
    title,
    thumbnail,
    library: { id: libraryId, name: libraryName },
  } = book;
  const { m1 } = useGlobalStyles();
  const { image, icon, titleBarBottom, titleBarTop } = useStyles();
  const [showDeletionConfirmation, showDeletionPopup] = useState(false);

  const handleClickDelete = () => {
    showDeletionPopup(true);
  };

  const handleCancelDelete = () => {
    showDeletionPopup(false);
  };

  const handleConfirmDelete = () => {
    showDeletionPopup(false);
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
          className={clsx(titleBarBottom)}
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
        {showLibraryName && libraryName && (
          <GridListTileBar
            className={clsx(titleBarTop)}
            titlePosition="top"
            title={
              <Typography noWrap variant="subtitle2">
                {libraryName}
              </Typography>
            }
          />
        )}
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
