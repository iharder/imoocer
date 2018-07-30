module.exports = {
  devServer: {
    proxy: {
      '/manage': {
        target: 'http://admintest.happymmall.com',
        changeOrigin: true
      }
    }
  }
}