import {Theme} from "@mui/material/styles";
import {makeStyles} from "@mui/styles";

export default makeStyles<Theme>(
  theme => ({
    login: {
      color: theme.palette.common.white,
      borderColor: theme.palette.common.white,
    },
    active: {
      backgroundColor: "#f0f0f0",
    },
  }),
  {name: "Login"},
);
