const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = app => {
  app.use(
    createProxyMiddleware('/', {
      target: 'https://mlluizdevcluburger.netlify.app/login',
      changeOrigin: true,
    })
  )
}
