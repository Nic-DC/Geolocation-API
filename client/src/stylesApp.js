import { createTheme } from "@mui/material";
import { red, orange } from "@mui/material/colors";

export const darkTheme = createTheme({
  spacing: 10,
  palette: {
    mode: "dark",
    // primary: {
    //   // main: orange[500]
    // }
    customRibRed: {
      main: red[400],
      superDark: red[800],
      superLight: red[100],
    },
  },
  typography: {
    myVariant: {
      fontSize: "2rem",
    },
  },
});
export const lightTheme = createTheme({
  spacing: 10,
  palette: {
    mode: "light",
    primary: {
      main: orange[500],
    },
    customRibRed: {
      main: orange[400],
      superDark: orange[800],
      superLight: orange[100],
    },
  },
  typography: {
    myVariant: {
      fontSize: "2rem",
    },
  },
});
