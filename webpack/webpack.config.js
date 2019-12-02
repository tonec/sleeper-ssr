const path = require('path')
const config = require('../config')

const ROOT_DIRECTORY = path.resolve(__dirname, '..')
const DIST_DIRECTORY = path.resolve(ROOT_DIRECTORY, 'public/dist')
const PUBLIC_PATH = `http://${config.host}:'${config.port}'/dist/`

module.exports = {
  context: path.resolve(__dirname, '..'),
  mode: 'none',
  entry: {
    main: [
      path.resolve(ROOT_DIRECTORY, 'src/client.js')
    ]
  },
  output: {
    path: DIST_DIRECTORY,
    filename: '[name]-[hash].js',
  },
  resolve: {
    modules: [
      'src',
      'node_modules'
    ],
    extensions: ['.json', '.js']
  },
  devtool: 'inline-source-map',
  stats: {
    warningsFilter: warning => {
      let block = false

      const blockedFiles = [
        'node_modules/express/lib/view.js',
        'node_modules/require_optional/index.js'
      ]

      blockedFiles.forEach(modulePath => {
        if (RegExp(modulePath).test(warning) === true) {
          block = true
        }
      })

      return block
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/react',
            ['@babel/env', { targets: { browsers: ['last 2 versions'] } }]
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties'
          ]
        }
      }
    ]
  }
}
