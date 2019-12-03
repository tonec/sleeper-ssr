module.exports = {
  development: {
    isProduction: false,
    host: process.env.HOST || 'localhost',
    port: +process.env.PORT || 3000
  }
}[process.env.NODE_ENV || 'development']
