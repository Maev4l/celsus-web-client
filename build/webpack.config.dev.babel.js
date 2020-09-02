import webpack from 'webpack';
import path from 'path';
import { merge } from 'webpack-merge';
import WebpackNotifierPlugin from 'webpack-notifier';

import baseConfig from './webpack.config.base.babel';

export default merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 8082,
    disableHostCheck: true,
  },
  plugins: [new WebpackNotifierPlugin()],
});
