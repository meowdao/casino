import {Theme} from "@mui/material/styles";
import {makeStyles} from "@mui/styles";

export default makeStyles<Theme>(
  () => ({
    text: {
      width: 65,
      fontSize: 48,
      textAlign: "center",
    },
  }),
  {name: "Panel"},
);
