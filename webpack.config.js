const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    // site: "./wwwroot/js/site.js",
    // bootstrap_js: "./wwwroot/js/bootstrap_js.js",
    // validation: "./wwwroot/js/validation.js",
    index: "./wwwroot/js/index.js",
  },
  output: {
    filename: "[name].entry.js",
    path: path.resolve(__dirname, "wwwroot", "dist"),
  },
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"],
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: ["file-loader"] },
      {
        test: /\.(woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 5000,
            },
          },
        ],
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              mimetype: "application/octet-stream",
            },
          },
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              mimetype: "image/svg+xml",
            },
          },
        ],
      },
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};
