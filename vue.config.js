const path = require('path')

module.exports = {
  publicPath: './',
  lintOnSave: true,
  //outputDir: './',
  outputDir:'dist',
  assetsDir:'',
  indexPath:'index.html',
  //assetsDir:'dist/',
  filenameHashing: false,
  pages:{
    index: {
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },

  // delete HTML related webpack plugins
  chainWebpack: config => {
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },

  configureWebpack: {
    output: {
      filename: 'main.js'
    }
  },

  css: {
    extract: false
  },

  productionSourceMap: false
}