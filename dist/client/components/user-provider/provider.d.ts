import React, {PropsWithChildren, ReactElement} from "react";
import {IUser} from "./context";
interface IUserProviderProps<T> {
  profile?: T | null;
}
export declare const UserProvider: <T extends IUser>(
  props: React.PropsWithChildren<IUserProviderProps<T>>,
) => ReactElement | null;
export {};
