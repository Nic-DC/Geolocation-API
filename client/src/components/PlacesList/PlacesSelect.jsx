import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";

// ACTIONS
import { selectPlaceRatingAction, selectPlaceTypeAction } from "../../redux/actions/selectActions";
//import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

const PlacesSelect = () => {
  const selectedPlace = useSelector((state) => state.select.select.placeType);
  const selectedRating = useSelector((state) => state.select.select.placeRating);
  const dispatch = useDispatch();

  const handlePlaceChange = (event) => {
    dispatch(selectPlaceTypeAction(event.target.value));
  };

  const handleRatingChange = (event) => {
    dispatch(selectPlaceRatingAction(event.target.value));
  };

  return (
    <div>
      <FormControl variant="filled" sx={{ width: 140, height: 70 }}>
        <InputLabel id="demo-simple-select-filled-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={selectedPlace}
          onChange={handlePlaceChange}
        >
          <MenuItem value="restaurants" sx={{ display: "flex", alignItems: "center" }}>
            <em>Restaurants</em>
          </MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>

          {/* <MenuItem value={10} selected={selectedPlace === 10} sx={{ display: "flex", alignItems: "center" }}>
            <em>{selectedPlace === 10 ? "Restaurants" : "Restaurants (default)"}</em>
          </MenuItem>
          <MenuItem value={20} selected={selectedPlace === 20}>
            Museums
          </MenuItem>
          <MenuItem value={30} selected={selectedPlace === 30}>
            Parks
          </MenuItem>
          <MenuItem value={40} selected={selectedPlace === 40}>
            Landmarks
          </MenuItem> */}
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ marginLeft: 2, minWidth: 140, height: 70 }}>
        <InputLabel id="demo-simple-select-filled-label">Rating</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={selectedRating}
          onChange={handleRatingChange}
        >
          <MenuItem value={2}>
            <em>All</em>
          </MenuItem>
          <MenuItem value={3}>
            <StarIcon sx={{ fontSize: "1.25rem" }} />
            <StarIcon sx={{ fontSize: "1.25rem" }} />
            <StarIcon sx={{ fontSize: "1.25rem" }} />
            <AddIcon sx={{ fontSize: "1.25rem", fontWeight: "bold", color: "darkorange" }} />
          </MenuItem>
          <MenuItem value={4}>
            <StarIcon sx={{ fontSize: "1.25rem" }} />
            <StarIcon sx={{ fontSize: "1.25rem" }} />
            <StarIcon sx={{ fontSize: "1.25rem" }} />
            <StarIcon sx={{ fontSize: "1.25rem" }} />
            <AddIcon sx={{ fontSize: "1.25rem", fontWeight: "bold", color: "darkorange" }} />
          </MenuItem>
          <MenuItem value={5}>
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
