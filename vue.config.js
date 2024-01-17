const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/gh-pages',
  transpileDependencies: [
    'vuetify'
  ]
})
