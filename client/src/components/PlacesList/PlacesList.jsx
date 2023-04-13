import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { InputLabel, MenuItem, Select, Typography } from "@mui/material";

// STYLES
import { PlacesContainer, PlacesFormControl, PlacesDivList, PlacesSelectEmpty, PlacesMarginBottom } from "./styles";
import PlacesSelect from "./PlacesSelect";

const PlacesList = () => {
  return (
    <>
      <PlacesContainer>
        <Typography variant="h6">Choose:</Typography>
        <PlacesSelect />
      </PlacesContainer>
      <></>
    </>
  );
};
export default PlacesList;
