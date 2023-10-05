const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        // Add these lines to alias 'tls' to an empty implementation
        tls: false,
        url: false,
        util: false,
        fs: false,
        path: false
      }
    }
  }
})
