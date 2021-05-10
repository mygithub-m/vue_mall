module.exports = {


  devServer: {
    port: 8000
  },

  configureWebpack: {
    resolve: {
      alias: {
        "assets": "@/assets",
        'common': "@/common",
        "components": "@/components",
        'views': "@/views",
        'network': "@/network"
      }
    }
  }
}
