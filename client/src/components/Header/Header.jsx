import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";

// GOOGLE AUTOCOMPLETE
import { Autocomplete } from "@react-google-maps/api";

// HOOKS
import { useState } from "react";
import { useDispatch } from "react-redux";

// COMPONENTS
import NavMode from "./NavMode";
import { getCoordinatesAction } from "../../redux/actions/coordsAndBoundsActions";

// import SearchBar from "./SearchBar";

// STYLING
import { SearchIconWrapper, SearchBox } from "./styles.js";
import { Input } from "@mui/material";

const Header = ({ setThemeMode }) => {
  const dispatch = useDispatch();

  // Google Autocomplete
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (autoComplete) => setAutocomplete(autoComplete);

  const onPlaceChanged = () => {
    if (autocomplete !== null && autocomplete.getPlace() !== null) {
      const lat = autocomplete.getPlace().geometry.location.lat();
      const lng = autocomplete.getPlace().geometry.location.lng();
      dispatch(getCoordinatesAction({ lat: lat, lng: lng }));
    }
  };
  return (
    <>
      <AppBar position="static" color="primary" sx={{ py: 1 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="home">
            <HomeIcon />
          </IconButton>

          <NavMode setThemeMode={setThemeMode} />
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <SearchBox>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <Input placeholder="Search…" />
            </SearchBox>
          </Autocomplete>
          {/* <SearchBar /> */}
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
