import {Theme} from "@mui/material/styles";
import {makeStyles} from "@mui/styles";

export default makeStyles<Theme>(
  theme => ({
    title: {
      fontSize: 24,
      fontWeight: 500,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }),
  {name: "Balance"},
);
