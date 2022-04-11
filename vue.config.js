

module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    proxy: {
      "/api": {
        changeOrigin: true,
        target:"http://localhost:3000",
        pathRewrite: {
          '^/api': ''//请求的时候使用这个api就可以
        }
        },
    },
    // proxy
  },
};

