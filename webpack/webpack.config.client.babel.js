const webpack = require('webpack')
const { clientConfiguration } = require('universal-webpack')
const settings = require('./universal-webpack-settings')
const baseConfiguration = require('./webpack.config')

const configuration = clientConfiguration(baseConfiguration, settings)

configuration.mode = 'development'

configuration.plugins.push(
  new webpack.DefinePlugin({
    __CLIENT__: true,
    __SERVER__: false
  })
)

// Create client-side Webpack config.
module.exports = configuration
