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
exports.Footer = void 0;
const react_1 = __importStar(require("react"));
const core_1 = require("@material-ui/core");
const icons_1 = require("@material-ui/icons");
const game_dialog_1 = require("./game-dialog");
const styles_1 = __importDefault(require("./styles"));
const Footer = props => {
    const { onResults: handleResults } = props;
    const classes = styles_1.default();
    const [open, setOpen] = react_1.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(core_1.AppBar, { className: classes.appbar, position: "fixed" },
            react_1.default.createElement(core_1.Toolbar, { className: classes.toolbar },
                react_1.default.createElement(core_1.Fab, { color: "secondary", className: classes.fab, onClick: handleOpen },
                    react_1.default.createElement(icons_1.Casino, null)),
                react_1.default.createElement("div", { className: classes.grow }),
                react_1.default.createElement(core_1.Link, { className: classes.title, href: "https://github.com/TrejGun" }, "\u00A9 TrejGun"))),
        react_1.default.createElement(game_dialog_1.GameDialog, { open: open, onClose: handleClose, onResults: handleResults })));
};
exports.Footer = Footer;
//# sourceMappingURL=index.js.map