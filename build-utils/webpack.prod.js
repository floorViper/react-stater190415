const commonPaths = require("./common-paths");
//const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = {
  mode: "production",
  entry: {
    app: [`${commonPaths.appEntry}/index.js`]
  },
  output: {
    filename: "static/[name].[hash].js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                // @import(ed) 리소스에 css-loader를 적용하기 전 로더를 구성한다.
                importLoaders: 1,
                camelCase: true,
                sourceMap: true
              }
            },
            {
              // css-loader 전에 PostCSS이 실행되어 압축(minify)하고 CSS 룰을 적용하고
              // 자동 전처리(autoprefixer)를 실행한다(rc파일 설정)
              loader: "postcss-loader"
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "styles/styles.[hash].css",
      allChunks: true
    })
  ]
};
module.exports = config;
