import React, { useState } from "react";

// STYLING
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "./stylesApp";

// COMPONENTS
import Header from "./components/Header/Header";

const App = () => {
  const [themeMode, setThemeMode] = useState("dark");
  const theme = themeMode === "dark" ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header setThemeMode={setThemeMode} theme={theme} />
    </ThemeProvider>
  );
};
export default App;
