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
exports.GameDialog = exports.OPTIONS = void 0;
const react_1 = __importStar(require("react"));
const core_1 = require("@material-ui/core");
const balance_provider_1 = require("../../../components/balance-provider");
const panel_1 = require("./panel");
const styles_1 = __importDefault(require("./styles"));
var OPTIONS;
(function (OPTIONS) {
    OPTIONS["SPADES"] = "\u2660";
    OPTIONS["HEARTS"] = "\u2665";
    OPTIONS["DIAMS"] = "\u2666";
    OPTIONS["CLUBS"] = "\u2663";
})(OPTIONS = exports.OPTIONS || (exports.OPTIONS = {}));
const PLACEHOLDER = "?";
const GameDialog = props => {
    const { open, onClose, onResults } = props;
    const classes = styles_1.default();
    const [isActive, setIsActive] = react_1.useState(false);
    const [results, setResults] = react_1.useState([PLACEHOLDER, PLACEHOLDER, PLACEHOLDER]);
    const wallet = react_1.useContext(balance_provider_1.BalanceContext);
    const handleClose = () => {
        onClose();
    };
    const getRandomOption = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                const options = Object.values(OPTIONS);
                resolve(options[Math.floor(Math.random() * options.length)]);
            }, 1000);
        });
    };
    const calcResult = (results) => {
        if (results[0] === results[1] && results[1] === results[2] && results[2] === OPTIONS.SPADES) {
            return 5;
        }
        if (results[0] === results[1] && results[1] === results[2]) {
            return 2;
        }
        if (results[0] === results[1] || results[0] === results[2] || results[1] === results[2]) {
            return 0.5;
        }
        // results[0] !== results[1]  && results[0] !== results[2] && results[1]  !== results[2]
        return 0;
    };
    const handleSpin = async () => {
        setIsActive(true);
        wallet.update(-1);
        setResults([PLACEHOLDER, PLACEHOLDER, PLACEHOLDER]);
        const slot1 = await getRandomOption();
        setResults([slot1, PLACEHOLDER, PLACEHOLDER]);
        const slot2 = await getRandomOption();
        setResults([slot1, slot2, PLACEHOLDER]);
        const slot3 = await getRandomOption();
        setResults([slot1, slot2, slot3]);
        // adding -1 because context is not updated yet
        wallet.update(calcResult([slot1, slot2, slot3]) - 1);
        onResults([slot1, slot2, slot3]);
        setIsActive(false);
    };
    const handleDebug = () => {
        setIsActive(true);
        wallet.update(-1);
        setResults([OPTIONS.SPADES, OPTIONS.SPADES, OPTIONS.SPADES]);
        // adding -1 because context is not updated yet
        wallet.update(calcResult([OPTIONS.SPADES, OPTIONS.SPADES, OPTIONS.SPADES]) - 1);
        onResults([OPTIONS.SPADES, OPTIONS.SPADES, OPTIONS.SPADES]);
        setIsActive(false);
    };
    return (react_1.default.createElement(core_1.Dialog, { onClose: handleClose, open: open },
        react_1.default.createElement(core_1.DialogContent, null,
            react_1.default.createElement(core_1.Grid, { container: true, spacing: 2 }, results.map((result, i) => react_1.default.createElement(core_1.Grid, { item: true, xs: 4, key: i },
                react_1.default.createElement(panel_1.Panel, null, result))))),
        react_1.default.createElement(core_1.DialogActions, null,
            react_1.default.createElement(core_1.Button, { onClick: handleDebug, variant: "text" }, "@"),
            react_1.default.createElement("div", { className: classes.grow }),
            react_1.default.createElement(core_1.Button, { onClick: handleClose, color: "secondary" }, "Close"),
            react_1.default.createElement(core_1.Button, { onClick: handleSpin, color: "primary", autoFocus: true, disabled: isActive || wallet.balance <= 0.5 }, "Spin"))));
};
exports.GameDialog = GameDialog;
//# sourceMappingURL=index.js.map