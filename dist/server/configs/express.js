"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = express_1.default();
app.disable("x-powered-by");
app.use(morgan_1.default("tiny", {
    immediate: true,
    skip: () => process.env.NODE_ENV === "test",
}));
exports.default = app;
//# sourceMappingURL=express.js.map