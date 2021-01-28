import {FC} from "react";
import {IUser} from "../../../../components/user-provider";
export interface ILoginDialogProps {
  open: boolean;
  onClose: () => void;
  onLogin: (profile: IUser) => void;
}
export declare const LoginDialog: FC<ILoginDialogProps>;
