/*
 * @Author: your name
 * @Date: 2021-08-05 10:26:41
 * @LastEditTime: 2021-08-17 11:29:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dashboard\vue.config.js
 */
const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  indexPath: "index.html",
  devServer: {
  },
  runtimeCompiler: false,
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  filenameHashing: true, //文件hash
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
 
}