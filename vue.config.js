

module.exports = {
  devServer: {
    host:'0.0.0.0',
    port:'8080',
    open:true,
    proxy: {
      "/api": {
        changeOrigin: true,
        target:"http://localhost:3000",
        pathRewrite:{
          '^/api':''
        }
        },
    },
    // proxy
  },
};

