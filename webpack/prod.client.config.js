const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const LoadablePlugin = require('@loadable/webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const baseConfig = require('./dev.base.config')
const config = require('../config')

const { paths } = config

module.exports = merge(baseConfig, {
  entry: {
    main: [
      path.resolve(paths.ROOT, 'src/client.js')
    ]
  },
  output: {
    path: paths.DIST,
    filename: '[name]-[hash].js',
    publicPath: paths.PUBLIC
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name]-[hash].[ext]',
              useRelativePath: false,
              publicPath: paths.PUBLIC
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false
    }),

    new LoadablePlugin(),

    new WorkboxPlugin.GenerateSW()
  ]
})
