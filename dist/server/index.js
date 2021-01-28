"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./configs/env");
const express_1 = __importDefault(require("./configs/express"));
const assets_1 = __importDefault(require("./routes/common/assets"));
const fe_1 = __importDefault(require("./routes/common/fe"));
express_1.default.use(assets_1.default);
express_1.default.use(fe_1.default);
express_1.default.listen(process.env.PORT, process.env.HOST, () => {
    console.info(`Express server listening on port http://${process.env.HOST}:${process.env.PORT}/`);
});
process.on("unhandledRejection", console.error);
process.on("uncaughtException", console.error);
exports.default = express_1.default;
//# sourceMappingURL=index.js.map