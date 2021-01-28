import {FC} from "react";
export declare enum OPTIONS {
  SPADES = "\u2660",
  HEARTS = "\u2665",
  DIAMS = "\u2666",
  CLUBS = "\u2663",
}
export interface IGameDialogProps {
  open: boolean;
  onClose: () => void;
  onResults: (results: Array<string>) => void;
}
export declare const GameDialog: FC<IGameDialogProps>;
