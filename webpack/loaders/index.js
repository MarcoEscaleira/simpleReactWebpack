const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  if (env === "development") {
    return {
      rules: [
        {
          test: /\.(png|jpg|jpeg)$/,
          use: "file-loader"
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(scss|sass)$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/env", "@babel/preset-react"],
              plugins: ["transform-class-properties"]
            }
          }
        },
        {
          test: /\.hbs$/,
          use: ["handlebars-loader"]
        }
      ]
    };
  }

  // Production loaders config default
  return {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        use: "file-loader"
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/preset-react"],
            plugins: ["transform-class-properties"]
          }
        }
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"]
      }
    ]
  };
};
