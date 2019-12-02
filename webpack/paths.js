const path = require('path')
const { environment } = require('../config')

const ROOT_DIRECTORY = path.resolve(__dirname, '..')
const DIST_DIRECTORY = path.resolve(ROOT_DIRECTORY, 'public/dist')
const PUBLIC_PATH = `http://${environment.host}:${+environment.port}/dist/`

module.exports = { ROOT_DIRECTORY, DIST_DIRECTORY, PUBLIC_PATH }
