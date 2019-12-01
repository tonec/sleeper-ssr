const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./config.js')

const ROOT_DIRECTORY = path.resolve(__dirname, '..')

module.exports = merge(baseConfig, {
  target: 'node',
  mode: 'none',
  entry: './src/server.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(ROOT_DIRECTORY, 'build')
  },
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: false,
      __SERVER__: true
    })
  ]
})
