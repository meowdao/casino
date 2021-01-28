import React from "react";
export interface IResultsSelectorProps {}
export interface IResultsSelectorRef {
  addRow: (row: Array<string>) => void;
}
export declare enum Direction {
  asc = "asc",
  desc = "desc",
}
export declare const Results: React.ForwardRefExoticComponent<
  IResultsSelectorProps & React.RefAttributes<IResultsSelectorRef>
>;
