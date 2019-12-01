module.exports = {
  development: {
    isProduction: false,
    assetsPath: `http://${process.env.HOST || 'localhost'}:${+process.env.PORT + 1 || 3001}/dist/`,
    host: process.env.HOST || 'localhost',
    port: +process.env.PORT || 3001
  }
}[process.env.NODE_ENV || 'development']
