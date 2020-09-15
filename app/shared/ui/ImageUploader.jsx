import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardActionArea, Tooltip } from '@material-ui/core';
import { AddAPhoto } from '@material-ui/icons';

import useGlobalStyles from '../styles';

const shapes = {
  'rectangular-large': {
    width: 160,
    height: 240,
  },
  'rectangular-medium': {
    width: 80,
    height: 120,
  },
  'rectangular-small': {
    width: 40,
    height: 60,
  },

  'square-large': {
    width: 132,
    height: 132,
  },
  'square-medium': {
    width: 64,
    height: 64,
  },
  'square-small': {
    width: 32,
    height: 32,
  },
};

const ImageUploader = ({ shape, size, border, onContentChanged }) => {
  const useStyles = makeStyles({
    root: { margin: 0, ...shapes[`${shape}-${size}`] },
    input: {
      opacity: '0 !important',
      width: '0 !important',
      height: '0 !important',
      padding: '0 !important',
      margin: '0 !important',
      border: '0 !important',
    },
    img: {
      ...shapes[`${shape}-${size}`],
    },
  });
  const { root, input, img } = useStyles({ border });
  const inputRef = useRef(null);
  const [image, setImage] = useState();
  const { flex, flexContentCenter, flexCenter, flexColumn, mb1 } = useGlobalStyles();

  const handleFileChange = (e) => {
    const {
      target: { files },
    } = e;
    const [file] = files;

    if (file) {
      const reader = new FileReader();
      reader.onload = (evn) => {
        const encodedImage = Buffer.from(evn.target.result).toString('base64');
        setImage(`data:image/png;base64,${encodedImage}`);

        if (onContentChanged) {
          onContentChanged(encodedImage);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  return (
    <Card className={clsx(root)}>
      <input className={clsx(input)} ref={inputRef} type="file" onChange={handleFileChange} />
      {/* eslint-disable */}
      <CardActionArea onClick={handleImageClick}>
        {image ? (
          <CardMedia className={clsx(img)} image={image} />
        ) : (
          <Tooltip title="Add thumbnail">
            <div className={clsx(flex, flexContentCenter, flexCenter, flexColumn, img)}>
              <div className={clsx(mb1)}>Thumbnail</div>
              <AddAPhoto fontSize="large" color="primary" />
            </div>
          </Tooltip>
        )}
      </CardActionArea>
      {/* eslint-enable */}
    </Card>
  );
};

export default ImageUploader;
