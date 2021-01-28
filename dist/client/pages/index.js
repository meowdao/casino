"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const core_1 = require("@material-ui/core");
const root_1 = require("react-hot-loader/root");
const user_provider_1 = require("../components/user-provider");
const balance_provider_1 = require("../components/balance-provider");
const header_1 = require("./header");
const footer_1 = require("./footer");
const content_1 = require("./content");
const styles_1 = __importDefault(require("./styles"));
const App = () => {
    const classes = styles_1.default();
    const ref = react_1.useRef(null);
    const handleResults = react_1.useCallback((results) => { var _a; return (_a = ref.current) === null || _a === void 0 ? void 0 : _a.addRow(results); }, [ref]);
    return (react_1.default.createElement(user_provider_1.UserProvider, null,
        react_1.default.createElement(balance_provider_1.BalanceProvider, { balance: 100 },
            react_1.default.createElement("div", { className: classes.root },
                react_1.default.createElement(header_1.Header, null),
                react_1.default.createElement(core_1.Container, { className: classes.container, maxWidth: "md" },
                    react_1.default.createElement(content_1.Results, { ref: ref })),
                react_1.default.createElement(footer_1.Footer, { onResults: handleResults })))));
};
exports.default = root_1.hot(App);
//# sourceMappingURL=index.js.map