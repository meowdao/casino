"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@material-ui/core");
exports.default = core_1.makeStyles(theme => ({
    root: {
        overflowY: "auto",
        overflowX: "hidden",
        display: "flex",
        minHeight: "100vh",
        position: "relative",
        flexDirection: "column",
    },
    container: theme.mixins.gutters({
        paddingTop: theme.spacing(11),
        paddingBottom: theme.spacing(11),
    }),
}), { name: "Layout" });
//# sourceMappingURL=styles.js.map