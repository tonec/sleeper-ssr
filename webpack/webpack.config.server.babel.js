const webpack = require('webpack')
const { serverConfiguration } = require('universal-webpack')
const settings = require('./universal-webpack-settings')
const baseConfiguration = require('./webpack.config')

const configuration = serverConfiguration(baseConfiguration, settings)

configuration.mode = 'development'

configuration.plugins.push(
  new webpack.DefinePlugin({
    __CLIENT__: false,
    __SERVER__: true
  })
)

// Create client-side Webpack config.
module.exports = configuration
