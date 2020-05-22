import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  // same with sass variables

  palette: {
    primary: {
      light: "#3f51b5",
      main: "#BADA55",
      dark: "#000",
      contrastText: "#fff",
    },
    secondary: {
      light: "#e7ff8c",
      main: "#b2ff59",
      dark: "#7ecb20",
      contrastText: "#000",
    },
    type: "light",
  },
});

export { theme };
