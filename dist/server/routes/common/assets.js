"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = require("express");
const webpack_1 = __importDefault(require("../../configs/webpack"));
const router = express_1.Router();
if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
    router.use("/", express_1.static(path_1.default.join(__dirname, "../../../bundle")));
}
if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
    router.use(webpack_1.default);
}
exports.default = router;
//# sourceMappingURL=assets.js.map