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
exports.Results = exports.Direction = void 0;
const react_1 = __importStar(require("react"));
const core_1 = require("@material-ui/core");
const headCells = [
    { id: "id", sortable: true, label: "ID" },
    { id: "slot1", sortable: false, label: "Slot 1" },
    { id: "slot2", sortable: false, label: "Slot 2" },
    { id: "slot3", sortable: false, label: "Slot 3" },
    { id: "timestamp", sortable: true, label: "Date" },
];
var Direction;
(function (Direction) {
    Direction["asc"] = "asc";
    Direction["desc"] = "desc";
})(Direction = exports.Direction || (exports.Direction = {}));
exports.Results = react_1.forwardRef((_props, ref) => {
    const [rows, setRows] = react_1.useState([]);
    const [order, setOrder] = react_1.useState(Direction.asc);
    const [orderBy, setOrderBy] = react_1.useState("id");
    react_1.useImperativeHandle(ref, () => ({
        addRow: ([slot1, slot2, slot3]) => {
            setRows([
                ...rows,
                { id: rows.length, slot1, slot2, slot3, timestamp: Date.now() },
            ]);
        },
    }));
    const createSortHandler = (property) => () => {
        const isAsc = orderBy === property && order === Direction.asc;
        setOrder(isAsc ? Direction.desc : Direction.asc);
        setOrderBy(property);
    };
    return (react_1.default.createElement(core_1.TableContainer, { component: core_1.Paper },
        react_1.default.createElement(core_1.Table, null,
            react_1.default.createElement(core_1.TableHead, null,
                react_1.default.createElement(core_1.TableRow, null, headCells.map((headCell) => (react_1.default.createElement(core_1.TableCell, { key: headCell.id }, headCell.sortable
                    ? (react_1.default.createElement(core_1.TableSortLabel, { active: orderBy === headCell.id, direction: orderBy === headCell.id ? order : Direction.asc, onClick: createSortHandler(headCell.id) }, headCell.label))
                    : headCell.label))))),
            react_1.default.createElement(core_1.TableBody, null, rows.map(row => (react_1.default.createElement(core_1.TableRow, { key: row.id },
                react_1.default.createElement(core_1.TableCell, null, row.id),
                react_1.default.createElement(core_1.TableCell, null, row.slot1),
                react_1.default.createElement(core_1.TableCell, null, row.slot2),
                react_1.default.createElement(core_1.TableCell, null, row.slot3),
                react_1.default.createElement(core_1.TableCell, null, new Date(row.timestamp).toISOString().replace("T", " ").replace(/\.\d{3}Z/, "")))))))));
});
//# sourceMappingURL=index.js.map