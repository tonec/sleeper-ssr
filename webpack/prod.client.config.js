const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./dev.base.config')
const paths = require('./paths')

module.exports = merge(baseConfig, {
  entry: {
    main: [
      path.resolve(paths.ROOT_DIRECTORY, 'src/client.js')
    ]
  },
  output: {
    path: paths.DIST_DIRECTORY,
    filename: '[name]-[hash].js',
    publicPath: paths.PUBLIC_PATH
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
              publicPath: paths.PUBLIC_PATH
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
    })
  ]
})
