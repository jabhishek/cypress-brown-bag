const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (_, argv) => {
  const isDevMode = argv.mode === "development";
  return {
    mode: argv.mode,
    entry: "./src/index.js",
    output: {
      filename: isDevMode ? "[name].js" : "[name].[contenthash:5].js",
      chunkFilename: isDevMode ? "[name].js" : "[name].[contenthash:5].js",
      path: path.resolve(process.cwd(), "dist"),
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: false,
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: "public/index.html",
      }),
    ],
    optimization: {
      runtimeChunk: "single",
      usedExports: true,
      splitChunks: {
        chunks: "all",
      },
    },
  };
};
