import React, { useEffect, useState } from "react";

// ROUTING
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// STYLING
import { ThemeProvider, CssBaseline, Grid } from "@mui/material";
import { darkTheme, lightTheme } from "./stylesApp";

// COMPONENTS
import Header from "./components/Header/Header";
import PlacesList from "./components/PlacesList/PlacesList";
import Map from "./components/Map/Map";
import { useDispatch, useSelector } from "react-redux";
import { getPlacesAction } from "./redux/actions/placesActions";

const App = () => {
  // DARK/LIGHT theme
  const [themeMode, setThemeMode] = useState("dark");
  const theme = themeMode === "dark" ? darkTheme : lightTheme;

  // Coordinates & Bounds [used in the Map component]
  const coordinates = useSelector((state) => state.coordsAndBounds.coordinates.coords);
  const bounds = useSelector((state) => state.coordsAndBounds.bounds.bounds);

  const dispatch = useDispatch();
  // FETCHING THE PLACES ON MOUNT
  useEffect(() => {
    dispatch(getPlacesAction());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header setThemeMode={setThemeMode} theme={theme} />
        <Grid container spacing={2} style={{ width: "100%" }}>
          <Grid item xs={12} md={4}>
            <PlacesList />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map coordinates={coordinates} bounds={bounds} />
          </Grid>
        </Grid>
      </Router>
    </ThemeProvider>
  );
};
export default App;
