"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@material-ui/core");
exports.default = core_1.makeStyles(theme => ({
    appbar: {},
    toolbar: {
        minHeight: theme.spacing(8),
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        color: theme.palette.common.white,
        textDecoration: "none",
        fontWeight: 500,
        fontSize: 36,
        "&:hover": {
            textDecoration: "none",
        },
    },
}), { name: "Header" });
//# sourceMappingURL=styles.js.map