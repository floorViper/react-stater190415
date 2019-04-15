const commonPaths = require("./common-paths");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const config = {
  entry: {
    vendor: ["semantic-ui-react", "react", "react-dom"]
  },
  output: {
    path: commonPaths.outputPath,
    publicPath: "/"
  },
  resolve: {
    modules: [path.join(__dirname, "../src"), "node_modules"],
    extensions: [".js", ".json", ".jsx", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: "vendor",
          name: "vendor",
          enforce: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico"
    })
  ]
};
module.exports = config;
