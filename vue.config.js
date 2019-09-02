module.exports = {
  outputDir: process.env.outputDir,
  assetsDir: 'static',
  publicPath: '',
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8000,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'https://api.coindesk.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
};
