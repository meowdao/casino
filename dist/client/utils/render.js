"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = require("react-dom");
const core_1 = require("@material-ui/core");
const theme = core_1.createMuiTheme();
exports.default = (App) => {
    react_dom_1.render(react_1.default.createElement(core_1.MuiThemeProvider, { theme: theme },
        react_1.default.createElement(core_1.CssBaseline, null),
        react_1.default.createElement(App, null)), document.getElementById("app"));
};
//# sourceMappingURL=render.js.map