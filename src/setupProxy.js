const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = app => {
  app.use(
    createProxyMiddleware('/', {
      target: 'https://node-burger.netlify.app/order',
      changeOrigin: true,
    })
  )
}
