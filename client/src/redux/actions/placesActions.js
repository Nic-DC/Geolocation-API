import axios from "axios";
import { selectPlaceRatingAction } from "./selectActions";

// exporting the variables used in the placesReducer
export const PLACES_LIST_SAVE = `SAVE_PLACES`;
export const PLACES_FILTERED_LIST_SAVE = `PLACES_FILTERED_LIST_SAVE`;
export const PLACES_IS_LOADING = `PLACES_IS_LOADING`;
export const PLACES_IS_ERROR = `PLACES_IS_ERROR`;
export const FAVORITE_PLACES_COUNT = `FAVORITE_PLACES_COUNT`;
export const FAVORITE_PLACES_LIST = `FAVORITE_PLACES_LIST`;

export const placesListSaveAction = (fetchedPlaces) => {
  return {
    type: PLACES_LIST_SAVE,
    payload: fetchedPlaces,
  };
};

export const placesFilteredListSaveAction = (filteredPlaces) => {
  return {
    type: PLACES_FILTERED_LIST_SAVE,
    payload: filteredPlaces,
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

export const getPlacesAction = (selectedPlace, sw, ne) => async (dispatch, getState) => {
  const URL = `https://travel-advisor.p.rapidapi.com/${selectedPlace}/list-in-boundary`;
  const options = {
    params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_TRAVEL_ADVISOR_API_KEY,
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };
  try {
    dispatch(placesIsLoadingAction(true)); // indicate that data is being loaded

    const {
      data: { data },
    } = await axios.get(URL, options);

    if (data) {
      dispatch(placesFilteredListSaveAction([]));
      dispatch(selectPlaceRatingAction(2));

      const filteredData = data.filter((place) => place.name && place.num_reviews > 0);

      dispatch(placesListSaveAction(filteredData));
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
