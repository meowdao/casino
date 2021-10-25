import {ComponentClass, FunctionComponent} from "react";
import {render} from "react-dom";
import {createTheme, CssBaseline, StyledEngineProvider, ThemeProvider} from "@mui/material";

const theme = createTheme();

export default (App: ComponentClass<any> | FunctionComponent<any>): void => {
  render(
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <App />
      </StyledEngineProvider>
    </ThemeProvider>,
    document.getElementById("app"),
  );
};
