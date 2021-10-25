import {ComponentClass, FunctionComponent} from "react";
import {render} from "react-dom";
import {createTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";

const theme = createTheme();

export default (App: ComponentClass<any> | FunctionComponent<any>): void => {
  render(
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>,
    document.getElementById("app"),
  );
};
