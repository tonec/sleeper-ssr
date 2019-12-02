const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./dev.base.config')
const config = require('../config')

const ROOT_DIRECTORY = path.resolve(__dirname, '..')
const DIST_DIRECTORY = path.resolve(ROOT_DIRECTORY, 'public/dist')
const PUBLIC_PATH = `http://${config.host}:'${config.port}'/dist/`

module.exports = merge(baseConfig, {
  mode: 'none',
  entry: {
    main: [
      path.resolve(ROOT_DIRECTORY, 'src/client.js')
    ]
  },
  output: {
    path: DIST_DIRECTORY,
    filename: '[name]-[hash].js',
    publicPath: PUBLIC_PATH
  },
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false
    })
  ]
})
