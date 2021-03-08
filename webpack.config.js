const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
};
