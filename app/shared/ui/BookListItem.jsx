import React, { useState } from 'react';
import clsx from 'clsx';
import {
  GridListTile,
  GridListTileBar,
  Typography,
  IconButton,
  CardMedia,
  Tooltip,
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
  const { m1, silentLinkUnderline } = useGlobalStyles();
  const { image, icon, titleBarBottom } = useStyles();

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
        <Tooltip title={title} placement="top-start" arrow>
          <Link to={`/libraries/${libraryId}/books/${id}`}>
            <CardMedia className={clsx(image)} image={source} />
          </Link>
        </Tooltip>
        <GridListTileBar
          className={clsx(titleBarBottom)}
          title={
            <Typography noWrap variant="subtitle2">
              {title}
            </Typography>
          }
          subtitle={
            showLibraryName &&
            libraryName && (
              <Link to={`/libraries/${libraryId}/books`} className={silentLinkUnderline}>
                {libraryName}
              </Link>
            )
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
