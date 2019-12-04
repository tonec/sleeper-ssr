const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./dev.base.config.js')
const paths = require('./paths')

module.exports = merge(baseConfig, {
  target: 'node',

  node: {
    __dirname: false,
  },

  entry: './src/server.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(paths.ROOT_DIRECTORY, 'build')
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
              publicPath: paths.PUBLIC_PATH,
              emitFile: false
            },
          },
        ],
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: false,
      __SERVER__: true
    })
  ]
})
