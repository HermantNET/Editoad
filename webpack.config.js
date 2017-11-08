const webpack = require("webpack")
const path = require("path")

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "./dist/editoad.js",
    library: "editoad",
    libraryTarget: "umd",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["env", "react", "flow", "stage-0"],
        },
      },
      {
        test: /\.s?css$/,
        loader: "style-loader!css-loader",
      },
    ],
  },
  // externals: {
  //   // Use external version of React
  //   react: "React",
  //   "react-dom": "ReactDOM",
  // },
}
