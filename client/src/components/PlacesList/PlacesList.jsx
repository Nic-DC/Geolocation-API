import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";

// STYLES
import { PlacesContainer, PlacesFormControl, PlacesDivList, PlacesSelectEmpty, PlacesMarginBottom } from "./styles";

// COMPONENT
import PlacesSelect from "./PlacesSelect";
import Progress from "./Progress";
import PlacesCard from "../PlacesDetails/PlacesCard";
import PlacesDetails from "../PlacesDetails/PlacesDetails";

// HOOKS
import { useSelector } from "react-redux";
import { createRef, useEffect, useState } from "react";

// MOCK DATA
// import places from "./testPlaces";

const PlacesList = () => {
  const selectedPlace = useSelector((state) => state.select.select.placeType);
  // console.log({ selectedPlace });

  const selectedRating = useSelector((state) => state.select.select.placeRating);
  // console.log({ selectedRating });

  const places = useSelector((state) => state.places.places.placesList);
  // console.log({ places });

  const childClicked = useSelector((state) => state.coordsAndBounds.childClicked);

  // we store the references of each place in the places array
  const [elRefs, setElRefs] = useState([]);

  // we make sure we have the progress while the places are loading
  const isLoading = useSelector((state) => state.places.places.isLoading);

  useEffect(() => {
    const refs = Array(places.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());
    setElRefs(refs);
  }, [places]);

  return (
    <>
      <PlacesContainer>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Search the places you want:
        </Typography>

        {isLoading ? <Progress /> : <PlacesSelect />}
      </PlacesContainer>
      <PlacesContainer spacing={3}>
        {places &&
          places.map((place, i) => {
            return <PlacesDetails place={place} key={i} selected={Number(childClicked) === i} refProp={elRefs[i]} />;
          })}
      </PlacesContainer>
    </>
  );
};
export default PlacesList;
