import {FC, useContext} from "react";
import {Typography} from "@mui/material";

import {BalanceContext} from "../../../components/balance-provider";
import useStyles from "./styles";

export const Balance: FC = () => {
  const classes = useStyles();
  const wallet = useContext(BalanceContext);

  return <Typography className={classes.title}>Balance: ${wallet.balance.toFixed(2)}</Typography>;
};
