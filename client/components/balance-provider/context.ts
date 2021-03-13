import {createContext} from "react";

export interface IBalanceContext {
  balance: number;
  update: (amount: number) => void;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const BalanceContext = createContext<IBalanceContext>(undefined!);
