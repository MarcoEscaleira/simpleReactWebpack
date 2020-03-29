const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DuplicatePackageCheckerWebpackPlugin = require("duplicate-package-checker-webpack-plugin");

// module loaders
const loaders = require("./loaders");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: ""
  },
  mode: "development",
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    index: "index.html",
    port: "8080",
    hot: true,
    stats: "minimal",
    compress: true
  },
  module: loaders("development"),
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.hbs"
    }),
    new DuplicatePackageCheckerWebpackPlugin()
  ]
};
