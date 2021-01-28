"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const login_1 = require("./login");
const balance_1 = require("./balance");
const styles_1 = __importDefault(require("./styles"));
const Header = () => {
    const classes = styles_1.default();
    return (react_1.default.createElement(core_1.AppBar, { className: classes.appbar, position: "fixed" },
        react_1.default.createElement(core_1.Toolbar, { className: classes.toolbar },
            react_1.default.createElement(core_1.Link, { className: classes.title, href: "/" },
                react_1.default.createElement(core_1.Hidden, { smDown: true }, "Casino Royal")),
            react_1.default.createElement("div", { className: classes.grow }),
            react_1.default.createElement(balance_1.Balance, null),
            react_1.default.createElement(login_1.Login, null))));
};
exports.Header = Header;
//# sourceMappingURL=index.js.map