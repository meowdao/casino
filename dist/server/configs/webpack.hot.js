"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_development_1 = __importDefault(require("./webpack.development"));
const options = {
    publicPath: webpack_development_1.default.output.publicPath,
    stats: {
        assets: true,
        colors: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false,
        children: false,
        version: true,
    },
    watchOptions: {
        aggregateTimeout: 0,
    },
};
exports.default = options;
//# sourceMappingURL=webpack.hot.js.map