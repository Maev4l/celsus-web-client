import React from 'react';

import { ImageUploader } from '../shared/ui';

const BookEditor = () => {
  return (
    <div>
      <span>Book Editor</span>
      <ImageUploader shape="rectangular" size="medium" />
    </div>
  );
};

export default BookEditor;
