import path from 'path';
import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import fs from 'fs';

const loadConfigFile = () => {
  return fs.readFileSync(path.resolve(__dirname, '..', './infra.json'));
};

const infra = process.env.BUILD_MODE === 'CI' ? {} : loadConfigFile();

export default {
  entry: {
    main: path.join(__dirname, '..', 'app', 'Main.jsx'),
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
      /** ==> For all .css files in node_modules */
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          // { loader: 'css-loader', options: { camelCase: true } },
        ],
      },
      /** <== For all .css files in node_modules */
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, '..', 'dist'),
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx'],
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
