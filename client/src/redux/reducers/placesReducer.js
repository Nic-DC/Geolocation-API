import { PLACES_LIST_SAVE, PLACES_IS_LOADING, PLACES_IS_ERROR } from "../actions/placesActions";

const initialState = {
  places: {
    placesList: [],
    isLoading: true,
    isError: false,
  },
};

const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACES_LIST_SAVE:
      return {
        ...state,
        places: {
          ...state.places,
          placesList: action.payload,
        },
      };

    case PLACES_IS_LOADING:
      return {
        ...state,
        places: {
          ...state.places,
          isLoading: action.payload,
          // isLoading: !state.places.isLoading,
        },
      };

    case PLACES_IS_ERROR:
      return {
        ...state,
        places: {
          ...state.places,
          isError: action.payload,
          // isError: !state.places.isError,
        },
      };

    default:
      return state;
  }
};
export default placesReducer;
