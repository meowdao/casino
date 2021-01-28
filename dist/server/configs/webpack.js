"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_1 = __importDefault(require("webpack"));
const express_1 = require("express");
const webpack_dev_middleware_1 = __importDefault(require("webpack-dev-middleware"));
const webpack_hot_middleware_1 = __importDefault(require("webpack-hot-middleware"));
const webpack_development_1 = __importDefault(require("./webpack.development"));
const webpack_hot_1 = __importDefault(require("./webpack.hot"));
const router = express_1.Router();
// Run Webpack dev server in only development mode
if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
    const compiler = webpack_1.default(webpack_development_1.default);
    router.use(webpack_dev_middleware_1.default(compiler, webpack_hot_1.default));
    router.use(webpack_hot_middleware_1.default(compiler));
}
exports.default = router;
//# sourceMappingURL=webpack.js.map