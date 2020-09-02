import React from 'react';
import { render } from 'react-dom';
import Routes from './Routes';

render(<Routes />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
