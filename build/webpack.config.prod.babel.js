import webpack from 'webpack';
import { merge } from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';

import baseConfig from './webpack.config.base.babel';

export default merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ parallel: true, sourceMap: true, cache: true, extractComments: false }),
    ],
  },
  plugins: [],
});
