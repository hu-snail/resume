const path = require("path");
module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/assets/less/index.less")]
    }
  }
};
