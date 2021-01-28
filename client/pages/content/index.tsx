import React, {forwardRef, useImperativeHandle, useState} from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableSortLabel,
  TableRow,
} from "@material-ui/core";


export interface IResultsSelectorProps {}

export interface IResultsSelectorRef {
  addRow: (row: Array<string>) => void;
}

const headCells = [
  {id: "id", sortable: true, label: "ID"},
  {id: "slot1", sortable: false, label: "Slot 1"},
  {id: "slot2", sortable: false, label: "Slot 2"},
  {id: "slot3", sortable: false, label: "Slot 3"},
  {id: "timestamp", sortable: true, label: "Date"},
];

export enum Direction {
  asc = "asc",
  desc = "desc",
}

export const Results = forwardRef<IResultsSelectorRef, IResultsSelectorProps>((_props, ref) => {
  const [rows, setRows] = useState<Array<any>>([]);
  const [order, setOrder] = useState<Direction>(Direction.asc);
  const [orderBy, setOrderBy] = useState("id");

  useImperativeHandle(ref, () => ({
    addRow: ([slot1, slot2, slot3]: Array<string>): void => {
      setRows([...rows, {id: rows.length, slot1, slot2, slot3, timestamp: Date.now()}]);
    },
  }));

  const createSortHandler = (property: string) => () => {
    const isAsc = orderBy === property && order === Direction.asc;
    setOrder(isAsc ? Direction.desc : Direction.asc);
    setOrderBy(property);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headCells.map(headCell => (
              <TableCell key={headCell.id}>
                {headCell.sortable ? (
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : Direction.asc}
                    onClick={createSortHandler(headCell.id)}
                  >
                    {headCell.label}
                  </TableSortLabel>
                ) : (
                  headCell.label
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.slot1}</TableCell>
              <TableCell>{row.slot2}</TableCell>
              <TableCell>{row.slot3}</TableCell>
              <TableCell>
                {new Date(row.timestamp)
                  .toISOString()
                  .replace("T", " ")
                  .replace(/\.\d{3}Z/, "")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
