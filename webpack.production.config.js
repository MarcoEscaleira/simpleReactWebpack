const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "[name].[contentHash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "./"
  },
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all"
    }
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
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
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
        use: [ 'handlebars-loader' ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contentHash].css"
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.hbs"
    })
  ]
};