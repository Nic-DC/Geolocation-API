import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";

// ACTIONS
import { selectPlaceRatingAction, selectPlaceTypeAction } from "../../redux/actions/selectActions";
//import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

const PlacesSelect = () => {
  const [place, setPlace] = useState(10);
  const [rating, setRating] = useState(10);
  console.log("PLACE: ", place);
  console.log("RATING: ", rating);

  const selectedPlace = useSelector((state) => state.select.placeType);
  console.log({ selectedPlace });

  const dispatch = useDispatch();

  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
    dispatch(selectPlaceTypeAction(event.target.value));
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
    dispatch(selectPlaceRatingAction(event.target.value));
  };

  return (
    <div>
      <FormControl variant="filled" sx={{ width: 140, height: 70 }}>
        <InputLabel id="demo-simple-select-filled-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={place}
          onChange={handlePlaceChange}
        >
          <MenuItem value={10} sx={{ display: "flex", alignItems: "center" }}>
            <em>Restaurants</em>
          </MenuItem>
          <MenuItem value={20}>Museums</MenuItem>
          <MenuItem value={30}>Parks</MenuItem>
          <MenuItem value={40}>Landmarks</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ marginLeft: 2, minWidth: 140, height: 70 }}>
        <InputLabel id="demo-simple-select-filled-label">Rating</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={rating}
          onChange={handleRatingChange}
        >
          <MenuItem value={10}>
            <em>All</em>
          </MenuItem>
          <MenuItem value={20}>
            <StarIcon sx={{ fontSize: "1.25rem" }} />
            <StarIcon sx={{ fontSize: "1.25rem" }} />
            <StarIcon sx={{ fontSize: "1.25rem" }} />
            <AddIcon sx={{ fontSize: "1.25rem", fontWeight: "bold", color: "darkorange" }} />
          </MenuItem>
          <MenuItem value={30}>
            <StarIcon sx={{ fontSize: "1.25rem" }} />
            <StarIcon sx={{ fontSize: "1.25rem" }} />
            <StarIcon sx={{ fontSize: "1.25rem" }} />
            <StarIcon sx={{ fontSize: "1.25rem" }} />
            <AddIcon sx={{ fontSize: "1.25rem", fontWeight: "bold", color: "darkorange" }} />
          </MenuItem>
          <MenuItem value={40}>
            <StarIcon sx={{ fontSize: "1.25rem" }} />
            <StarIcon sx={{ fontSize: "1.25rem" }} />
            <StarIcon sx={{ fontSize: "1.25rem" }} />
            <StarIcon sx={{ fontSize: "1.25rem" }} />
            <StarIcon sx={{ fontSize: "1.25rem" }} />
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export default PlacesSelect;
