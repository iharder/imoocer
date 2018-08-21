const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  baseUrl: './',
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('~', resolve('src'))
  }
}