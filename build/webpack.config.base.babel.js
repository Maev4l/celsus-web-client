import path from 'path';
import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { dependencies as externals } from '../package.json';

/* eslint-disable */
const infra = process.env.BUILD_MODE === 'CI' ? {} : require('../infra.json');
/* eslint-enable */

export default {
  entry: {
    main: path.join(__dirname, '..', 'app', 'main.js'),
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, '..', 'dist'),
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [path.join(__dirname, '..', 'app'), 'node_modules'],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        USER_POOL_ID: JSON.stringify(infra.userPoolId),
        IDENTITY_POOL_ID: JSON.stringify(infra.userIdentityPool),
        REGION: JSON.stringify(infra.region),
        USER_POOL_CLIENT_ID: JSON.stringify(infra.userPoolClient),
      },
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'app', 'index.html'),
      filename: 'index.html',
      inject: 'body',
      hash: true,
    }),
  ],
};
