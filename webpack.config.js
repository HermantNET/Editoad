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
  externals: {
    react: "react",
    "react-dom": "react-dom",
    "react-dnd": "react-dnd",
    jest: "jest",
    "material-ui": "material-ui",
    "react-redux": "react-redux",
    redux: "redux",
    "redux-thunk": "redux-thunk",
    "react-tap-event-plugin": "react-tap-event-plugin",
    "react-dnd-html5-backend": "react-dnd-html5-backend",
  }
}
