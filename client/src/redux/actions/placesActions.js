import axios from "axios";

// importing the actions used to set the coordinates and bounds
import { getCoordinatesAction, getBoundsAction } from "./coordsAndBoundsActions.js";

// exporting the variables used in the placesReducer
export const PLACES_LIST_SAVE = `SAVE_PLACES`;
export const PLACES_IS_LOADING = `PLACES_IS_LOADING`;
export const PLACES_IS_ERROR = `PLACES_IS_ERROR`;

export const placesListSaveAction = (fetchedPlaces) => {
  return {
    type: PLACES_LIST_SAVE,
    payload: fetchedPlaces,
  };
};

export const placesIsLoadingAction = (bool) => {
  return {
    type: PLACES_IS_LOADING,
    payload: bool,
  };
};

export const placesIsErrorAction = (bool) => {
  return {
    type: PLACES_IS_ERROR,
    payload: bool,
  };
};

export const getPlacesAction = (placesFetched) => async (dispatch, getState) => {
  const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
  const options = {
    params: {
      bl_latitude: "11.847676",
      tr_latitude: "12.838442",
      bl_longitude: "109.095887",
      tr_longitude: "109.149359",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_TRAVEL_ADVISOR_API_KEY,
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };
  try {
    console.log(`Fetching the places from the API...`);
    console.log(`Current state is: ${getState()}`);

    dispatch(placesIsLoadingAction(true)); // indicate that data is being loaded

    const {
      data: { data },
    } = await axios.get(URL, options);

    if (data) {
      dispatch(placesListSaveAction(data));
      dispatch(placesIsLoadingAction(false)); // indicate that data has been loaded
    } else {
      console.log(`Error with the response for fetching the places`);
      dispatch(placesIsLoadingAction(false)); // indicate that data failed to load
      dispatch(placesIsErrorAction(true)); // indicate that data failed to load
    }
  } catch (error) {
    console.error(`Error GEtting the places from the API: `, error);
    dispatch(placesIsLoadingAction(false)); // indicate that data failed to load
    dispatch(placesIsErrorAction(true)); // indicate that data failed to load
  }
};
