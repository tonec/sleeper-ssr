const appConfig = require('./config.app.js')
const environment = require('./config.env.js')

module.exports = {
  ...{
    app: appConfig
  },
  environment
}
