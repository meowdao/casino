import {memo, ReactNode} from "react";
import {Card, CardContent, Typography} from "@mui/material";

import useStyles from "./styles";

export interface IPanelProps {
  children: ReactNode;
}

export const Panel = memo((props: IPanelProps) => {
  const {children} = props;

  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography className={classes.text}>{children}</Typography>
      </CardContent>
    </Card>
  );
});
