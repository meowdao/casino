import {PropsWithChildren, ReactElement} from "react";
interface IBalanceProviderProps {
  balance?: number;
}
export declare const BalanceProvider: (props: PropsWithChildren<IBalanceProviderProps>) => ReactElement | null;
export {};
