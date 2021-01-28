"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const webpack_1 = require("webpack");
const dotenv_webpack_1 = __importDefault(require("dotenv-webpack"));
const copy_webpack_plugin_1 = __importDefault(require("copy-webpack-plugin"));
const config = {
    mode: "development",
    devtool: "cheap-module-source-map",
    entry: {
        main: ["webpack-hot-middleware/client", "./client"],
    },
    output: {
        path: path_1.default.join(__dirname, "..", "..", "dist", "bundle"),
        filename: "[name].js",
        sourceMapFilename: "[file].map",
        chunkFilename: "[id].js",
        publicPath: "/",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        modules: ["node_modules"],
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
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
                            plugins: ["optimize-clsx", "react-hot-loader/babel"],
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
        new dotenv_webpack_1.default({
            path: ".env",
            systemvars: true,
        }),
        new copy_webpack_plugin_1.default({
            patterns: [{ from: "./static", to: "./" }],
        }),
        new webpack_1.HotModuleReplacementPlugin(),
    ],
    performance: {
        hints: false,
    },
    optimization: {
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
exports.default = config;
//# sourceMappingURL=webpack.development.js.map