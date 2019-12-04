module.exports = {
  development: {
    host: process.env.HOST || 'testapp.local',
    port: +process.env.PORT || 3000
  }
}[process.env.NODE_ENV || 'development']
