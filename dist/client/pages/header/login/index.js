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
exports.Login = void 0;
const react_1 = __importStar(require("react"));
const core_1 = require("@material-ui/core");
const icons_1 = require("@material-ui/icons");
const user_provider_1 = require("../../../components/user-provider");
const login_dialog_1 = require("./login-dialog");
const styles_1 = __importDefault(require("./styles"));
const Login = () => {
    const classes = styles_1.default();
    const [anchor, setAnchor] = react_1.useState(null);
    const [open, setOpen] = react_1.useState(false);
    const user = react_1.useContext(user_provider_1.UserContext);
    const handleMenuOpen = (event) => {
        setAnchor(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchor(null);
    };
    const handleLoginClick = (e) => {
        e.preventDefault();
        setOpen(true);
    };
    const handleLogoutClick = (e) => {
        e.preventDefault();
        user.logOut();
        handleMenuClose();
    };
    const handleLogin = (profile) => {
        user.logIn(profile);
        setOpen(false);
    };
    const handleClose = () => {
        setOpen(false);
    };
    if (!user.isAuthenticated()) {
        return (react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement(core_1.Button, { className: classes.login, variant: "outlined", size: "large", onClick: handleLoginClick }, "Login"),
            react_1.default.createElement(login_dialog_1.LoginDialog, { open: open, onClose: handleClose, onLogin: handleLogin })));
    }
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(core_1.IconButton, { onClick: handleMenuOpen, color: "inherit" },
            react_1.default.createElement(core_1.Tooltip, { title: user.profile.name },
                react_1.default.createElement(icons_1.AccountCircle, null))),
        react_1.default.createElement(core_1.Menu, { id: "material-appbar", anchorEl: anchor, open: !!anchor, onClose: handleMenuClose },
            react_1.default.createElement(core_1.MenuItem, { onClick: handleLogoutClick }, "Logout"))));
};
exports.Login = Login;
//# sourceMappingURL=index.js.map