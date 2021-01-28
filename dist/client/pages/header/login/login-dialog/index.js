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
exports.LoginDialog = void 0;
const react_1 = __importStar(require("react"));
const core_1 = require("@material-ui/core");
const LoginDialog = props => {
    const { open, onClose, onLogin } = props;
    const [data, setData] = react_1.useState({ name: "" });
    const [helperText, setHelperText] = react_1.useState("");
    const handleClose = () => {
        onClose();
    };
    const handleLogin = () => {
        if (!data.name) {
            setHelperText("This field is required");
            return;
        }
        onLogin(data);
    };
    const handleChange = (event) => {
        setData(Object.assign(Object.assign({}, data), { [event.target.name]: event.target.value }));
    };
    return (react_1.default.createElement(core_1.Dialog, { onClose: handleClose, open: open },
        react_1.default.createElement(core_1.DialogContent, null,
            react_1.default.createElement(core_1.TextField, { name: 'name', label: "Name", placeholder: "TrejGun", onChange: handleChange, value: data.name, required: true, helperText: helperText, error: !!helperText })),
        react_1.default.createElement(core_1.DialogActions, null,
            react_1.default.createElement(core_1.Button, { onClick: handleClose, color: "secondary" }, "Cancel"),
            react_1.default.createElement(core_1.Button, { onClick: handleLogin, color: "primary", autoFocus: true }, "Login"))));
};
exports.LoginDialog = LoginDialog;
//# sourceMappingURL=index.js.map