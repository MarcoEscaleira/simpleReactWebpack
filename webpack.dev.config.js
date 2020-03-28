const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "./"
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    index: 'index.html',
    port: '8080'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        use: "file-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [ "@babel/env" ],
            plugins: [ "transform-class-properties" ]
          }
        }
      },
      {
        test: /\.hbs$/,
        use: [ "handlebars-loader" ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.hbs"
    })
  ]
};