import { MuiThemeProvider } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "../router";
import { theme } from "../shared/material-ui-theme/material-theme";

const App = (props: any) => (
  <Provider store={props.store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <MainRouter />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
App.propTypes = {
  store: PropTypes.object.isRequired,
};
