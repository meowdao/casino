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
exports.UserProvider = void 0;
const react_1 = __importStar(require("react"));
const context_1 = require("./context");
const STORAGE_NAME = "casino_user";
const UserProvider = (props) => {
    const { profile: defaultProfile = null, children } = props;
    const [profile, setProfile] = react_1.useState(defaultProfile);
    react_1.useEffect(() => {
        const auth = localStorage.getItem(STORAGE_NAME);
        setProfile(auth ? JSON.parse(auth) : defaultProfile);
    }, []);
    const save = (key, profile) => {
        const json = JSON.stringify(profile);
        localStorage.setItem(key, json);
    };
    const logIn = (profile) => {
        setProfile(profile);
        save(STORAGE_NAME, profile);
    };
    const logOut = () => {
        setProfile(null);
        save(STORAGE_NAME, null);
    };
    const isAuthenticated = () => {
        return profile !== null;
    };
    return (react_1.default.createElement(context_1.UserContext.Provider, { value: {
            profile,
            logIn,
            logOut,
            isAuthenticated,
        } }, children));
};
exports.UserProvider = UserProvider;
//# sourceMappingURL=provider.js.map