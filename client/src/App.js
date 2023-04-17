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
import { getPlacesAction, placesFilteredListSaveAction } from "./redux/actions/placesActions";
import { getCoordinatesAction } from "./redux/actions/coordsAndBoundsActions";

const App = () => {
  const dispatch = useDispatch();

  // DARK/LIGHT theme
  const [themeMode, setThemeMode] = useState("dark");
  const theme = themeMode === "dark" ? darkTheme : lightTheme;

  // The fetched places
  const places = useSelector((state) => state.places.places.placesList);

  // Filtered places
  const filteredPlaces = useSelector((state) => state.places.places.filteredPlacesList);

  // Coordinates & Bounds [used in the Map component]
  const coordinates = useSelector((state) => state.coordsAndBounds.coordinates.coords);
  const bounds = useSelector((state) => state.coordsAndBounds.bounds.bounds);

  // Filter the places based on "type" and "rating"
  const selectedPlace = useSelector((state) => state.select.select.placeType);
  const selectedRating = useSelector((state) => state.select.select.placeRating);

  // GETTING THE USER'S CURRENT LOCATION ON MOUNT
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      dispatch(getCoordinatesAction({ lat: latitude, lng: longitude }));
    });
  }, []);

  // FETCHING THE PLACES WHEN THE coordinates / bounds change
  useEffect(() => {
    if (bounds) {
      dispatch(getPlacesAction(selectedPlace, bounds.sw, bounds.ne));
    }
  }, [coordinates, bounds, selectedPlace]);

  // FILTERS THE PLACES based on rating
  useEffect(() => {
    const filteredPlaces = places.filter((place) => Number(place.rating) >= selectedRating);
    console.log({ filteredPlaces });
    dispatch(placesFilteredListSaveAction(filteredPlaces));
  }, [selectedRating]);
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
            <Map coordinates={coordinates} bounds={bounds} places={filteredPlaces.length ? filteredPlaces : places} />
          </Grid>
        </Grid>
      </Router>
    </ThemeProvider>
  );
};
export default App;
