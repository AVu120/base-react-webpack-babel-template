const webpack = require("webpack");
const path = require("path");
const { DefinePlugin } = require("webpack");

module.exports = {
  mode: "development",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
      },
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    hot: true,
  },
  devtool: "eval-source-map",
};
