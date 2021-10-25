import {ComponentClass, FunctionComponent} from "react";
import {render} from "react-dom";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const theme = createTheme();

export default (App: ComponentClass<any> | FunctionComponent<any>): void => {
  render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>,
    document.getElementById("app"),
  );
};
