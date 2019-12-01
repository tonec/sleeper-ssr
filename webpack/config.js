
module.exports = {
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
