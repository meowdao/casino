import {Theme} from "@mui/material/styles";
import {makeStyles} from "@mui/styles";

export default makeStyles<Theme>(
  () => ({
    grow: {
      flexGrow: 1,
    },
  }),
  {name: "GameDialog"},
);
