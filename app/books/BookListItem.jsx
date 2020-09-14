import React from 'react';
import clsx from 'clsx';
import { GridListTile, GridListTileBar, Typography, IconButton } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

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

const handleClickDelete = () => {};

const BookListItem = ({ book }) => {
  const { title, thumbnail } = book;
  const { m1 } = useGlobalStyles();
  const { image, icon, titleBar } = useStyles();

  const source = thumbnail ? `data:image/png;base64,${thumbnail}` : BookThumbnailPlaceHolder;

  return (
    <GridListTile className={clsx(m1)}>
      <img className={clsx(image)} src={source} alt="" />
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
  );
};

export default BookListItem;
