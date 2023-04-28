import * as React from "react";

import Box from "@mui/material/Box";

import SearchIcon from "@mui/icons-material/Search";

// REDUX Actions
import { getCoordinatesAction } from "../../redux/actions/coordsAndBoundsActions";
// GOOGLE AUTOCOMPLETE
import { Autocomplete } from "@react-google-maps/api";
// HOOKS
import { useState } from "react";
import { useDispatch } from "react-redux";
// STYLING
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoComplete) => {
    setAutocomplete(autoComplete);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null && autocomplete.getPlace() !== null) {
      const lat = autocomplete.getPlace().geometry.location.lat();
      const lng = autocomplete.getPlace().geometry.location.lng();
      dispatch(getCoordinatesAction({ lat: lat, lng: lng }));
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
        </Autocomplete>
      </Search>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );
};
export default SearchBar;
