const GenerateAssetPlugin = require('generate-asset-webpack-plugin');
const serverConfig = require('./serverConfig.json');//引入根目录下的配置文件
const CopyrightWebpackPlugin = require('./plugins/copyright-webpack-plugin'); // 自定义组件

const createJson = function () {
  return JSON.stringify(serverConfig);
};

module.exports = {
  publicPath: './',
  outputDir: '../my-koa2/dist',//打包输出目录
  assetsDir: 'static',//静态资源目录
  devServer: {
    hot: true,
    open: true,
    port: 8080,
    host: '127.0.0.1',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  configureWebpack: config => {
    return {
      plugins: [
        //打包时生成一个配置文件
        new GenerateAssetPlugin({
          filename: 'serverConfig.json',
          fn: (compilation, cb) => {
            cb(null, createJson());
          }
        }),
        // 生成一个版本文件
        new CopyrightWebpackPlugin({
          versions: new Date()
        })
      ]
    }

  }
}