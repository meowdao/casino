import React, {ComponentClass, FunctionComponent} from "react";
import {render} from "react-dom";
import {createMuiTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";

const theme = createMuiTheme();

export default (App: ComponentClass<any> | FunctionComponent<any>): void => {
  render(
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>,
    document.getElementById("app"),
  );
};
