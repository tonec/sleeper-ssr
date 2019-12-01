const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./config.js')

const ROOT_DIRECTORY = path.resolve(__dirname, '..')

module.exports = merge(baseConfig, {
  mode: 'none',
  entry: './src/client.js',
  output: {
    filename: 'main.js',
    path: path.resolve(ROOT_DIRECTORY, 'public')
  },
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false
    })
  ]
})
