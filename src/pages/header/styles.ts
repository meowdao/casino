import {Theme} from "@mui/material/styles";
import {makeStyles} from "@mui/styles";

export default makeStyles<Theme>(
  theme => ({
    appbar: {},
    toolbar: {
      minHeight: theme.spacing(8),
    },
    grow: {
      flexGrow: 1,
    },
    title: {
      color: theme.palette.common.white,
      textDecoration: "none",
      fontWeight: 500,
      fontSize: 36,
      "&:hover": {
        textDecoration: "none",
      },
    },
  }),
  {name: "Header"},
);
