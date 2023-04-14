import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";

// STYLES
import { PlacesContainer, PlacesFormControl, PlacesDivList, PlacesSelectEmpty, PlacesMarginBottom } from "./styles";

// COMPONENT
import PlacesSelect from "./PlacesSelect";

// HOOKS
import { useSelector } from "react-redux";

// MOCK DATA
import places from "./testPlaces";
import PlacesCard from "../PlacesDetails/PlacesCard";

const PlacesList = () => {
  const selectedPlace = useSelector((state) => state.select.select.placeType);
  console.log({ selectedPlace });

  const selectedRating = useSelector((state) => state.select.select.placeRating);
  console.log({ selectedRating });

  return (
    <>
      <PlacesContainer>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Search the places you want:
        </Typography>
        <PlacesSelect />
      </PlacesContainer>
      <PlacesContainer spacing={3}>
        {places?.data.length > 0 &&
          places.data.map((place) => {
            return <PlacesCard place={place} />;
          })}
      </PlacesContainer>
    </>
  );
};
export default PlacesList;
