import webpack from 'webpack';
import { merge } from 'webpack-merge';

import baseConfig from './webpack.config.base.babel';

export default merge(baseConfig, {
  mode: 'production',
  plugins: [],
});
