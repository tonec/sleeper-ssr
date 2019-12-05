const path = require('path')
const configApp = require('./config.app.js')

require('dotenv').config()

const { env } = process
const ROOT_DIRECTORY = path.resolve(__dirname)
const DIST_DIRECTORY = path.resolve(ROOT_DIRECTORY, 'public/dist')
const PUBLIC_PATH = `http://${env.HOST}:${+env.PORT}/dist/`

module.exports = {
  ...{
    HOST: env.HOST,
    PORT: env.PORT,
    app: configApp,
    paths: {
      ROOT: ROOT_DIRECTORY,
      DIST: DIST_DIRECTORY,
      PUBLIC: PUBLIC_PATH
    }
  }
}
