/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const DotEnvPlugin = require("dotenv-webpack");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    main: ["./client"],
  },
  output: {
    path: path.join(__dirname, "..", "..", "dist", "bundle"),
    publicPath: "/",
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    modules: ["node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              sourceType: "unambiguous",
              presets: [
                [
                  "@babel/env",
                  {
                    modules: false,
                    targets: {
                      browsers: ["> 1%"],
                    },
                  },
                ],
                [
                  "@babel/typescript",
                  {
                    isTSX: true,
                    allExtensions: true,
                  },
                ],
                "@babel/react",
              ],
              plugins: ["@babel/transform-runtime", "optimize-clsx"],
            },
          },
        ],
      },
      {
        test: /\.txt$/i,
        use: "raw-loader",
      },
    ],
  },
  plugins: [
    new DotEnvPlugin({
      path: ".env",
      systemvars: true,
    }),
    new CopyPlugin({
      patterns: [{from: "./static", to: "./"}],
    }),
    new ProgressBarPlugin(),
  ],
  performance: {
    hints: false,
  },
  stats: "errors-only",
  optimization: {
    minimize: true,
    noEmitOnErrors: true,
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
