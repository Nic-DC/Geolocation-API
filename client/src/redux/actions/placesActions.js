import axios from "axios";

export const PLACES_LIST_SAVE = `SAVE_PLACES`;
export const PLACES_IS_LOADING = `PLACES_IS_LOADING`;
export const PLACES_IS_ERROR = `PLACES_IS_ERROR`;

export const placesListSaveAction = (fetchedPlaces) => {
  return {
    type: PLACES_LIST_SAVE,
    payload: fetchedPlaces,
  };
};

export const placesIsLoadingAction = () => {
  return {
    type: PLACES_IS_LOADING,
    //payload: bool,
    //payload: true,
  };
};

export const placesIsErrorAction = () => {
  return {
    type: PLACES_IS_ERROR,
    //payload: bool,
    //payload: false,
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

    const {
      data: { data },
    } = await axios.get(URL, options);

    if (data) {
      dispatch(placesListSaveAction(data));

      setTimeout(() => {
        dispatch(placesIsLoadingAction());
      }, 100);

      // setTimeout(() => {
      //   dispatch(placesIsErrorAction());
      // }, 100);
    }
    // return data;
  } catch (error) {
    console.error("Error GEtting the places from the API: ", error);
    dispatch(placesIsLoadingAction());
    dispatch(placesIsErrorAction());
  }
};
