/// <reference types="react" />
export interface IUser {
  name: string;
}
export interface IUserContext<T extends any> {
  profile: T;
  logIn: (profile: T) => void;
  logOut: () => void;
  isAuthenticated: () => boolean;
}
export declare const UserContext: import("react").Context<IUserContext<any>>;
