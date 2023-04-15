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
import { getCoordinatesAction } from "./redux/actions/coordsAndBoundsActions";

const App = () => {
  const dispatch = useDispatch();

  // DARK/LIGHT theme
  const [themeMode, setThemeMode] = useState("dark");
  const theme = themeMode === "dark" ? darkTheme : lightTheme;

  // The fetched places
  const places = useSelector((state) => state.places.places.placesList);

  // Coordinates & Bounds [used in the Map component]
  const coordinates = useSelector((state) => state.coordsAndBounds.coordinates.coords);
  const bounds = useSelector((state) => state.coordsAndBounds.bounds.bounds);

  // GETTING THE USER'S CURRENT LOCATION ON MOUNT
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      dispatch(getCoordinatesAction({ lat: latitude, lng: longitude }));
    });
  }, []);

  // FETCHING THE PLACES WHEN THE coordinates / bounds change
  useEffect(() => {
    dispatch(getPlacesAction(bounds.sw, bounds.ne));
  }, [coordinates, bounds]);

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
            <Map coordinates={coordinates} bounds={bounds} places={places} />
          </Grid>
        </Grid>
      </Router>
    </ThemeProvider>
  );
};
export default App;
