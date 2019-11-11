const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "assets",
  indexPath: "index.html",
  filenameHashing: true,
  // 修改 src 为 examples
  pages: {
    index: {
      entry: "src/main.ts",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  lintOnSave: true,
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: false,
  crossorigin: undefined,
  integrity: false,
  chainWebpack: config => {
    "use strict";

    config.resolve.alias
      .set("@", resolve("src"))
      .set("packages", resolve("packages"));
    config.module
      .rule("tsx")
      .test(/\.tsx$/)
      .use("vue-jsx-hot-loader")
      .before("babel-loader")
      .loader("vue-jsx-hot-loader");
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {}
      }
    }
  }
};
