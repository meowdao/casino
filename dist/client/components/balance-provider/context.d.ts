/// <reference types="react" />
export interface IBalanceContext {
  balance: number;
  update: (amount: number) => void;
}
export declare const BalanceContext: import("react").Context<IBalanceContext>;
