import {createContext} from "react";


export interface IBalanceContext {
  balance: number;
  update: (amount: number) => void;
}

export const BalanceContext = createContext<IBalanceContext>(undefined!);
