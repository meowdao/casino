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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceProvider = void 0;
const react_1 = __importStar(require("react"));
const context_1 = require("./context");
const STORAGE_NAME = "casino_balance";
const BalanceProvider = (props) => {
    const { balance: defaultBalance = 0, children } = props;
    const [balance, setBalance] = react_1.useState(defaultBalance);
    react_1.useEffect(() => {
        const auth = localStorage.getItem(STORAGE_NAME);
        setBalance(auth ? JSON.parse(auth) : defaultBalance);
    }, []);
    const save = (key, balance) => {
        const json = JSON.stringify(balance);
        localStorage.setItem(key, json);
    };
    const update = (amount) => {
        setBalance(balance + amount);
        save(STORAGE_NAME, balance);
    };
    return (react_1.default.createElement(context_1.BalanceContext.Provider, { value: {
            balance,
            update,
        } }, children));
};
exports.BalanceProvider = BalanceProvider;
//# sourceMappingURL=provider.js.map