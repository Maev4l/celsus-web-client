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
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  plugins: [],
});
