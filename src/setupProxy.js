/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/mapi/baidu/**',
    createProxyMiddleware({
      target: process.env.REACT_APP_BAIDUMAP_HOST,
      changeOrigin: true,
      pathRewrite: {
        '^/mapi/baidu': '/', // remove base path
      },
    })
  )
}
