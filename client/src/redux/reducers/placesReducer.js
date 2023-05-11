import {
  PLACES_LIST_SAVE,
  PLACES_FILTERED_LIST_SAVE,
  PLACES_IS_LOADING,
  PLACES_IS_ERROR,
  FAVORITE_PLACES_COUNT,
  FAVORITE_PLACES_LIST,
} from "../actions/placesActions";

const initialState = {
  places: {
    placesList: [],
    filteredPlacesList: [],
    isLoading: true,
    isError: false,
  },
  favorites: {
    favoritePlacesCount: 0,
    favoritePlacesList: [],
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

    case PLACES_FILTERED_LIST_SAVE:
      return {
        ...state,
        places: {
          ...state.places,
          filteredPlacesList: action.payload,
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

    // case FAVORITE_PLACES_COUNT:
    //   return {
    //     ...state,
    //     favorites: {
    //       ...state.favorites,
    //       favoritePlacesCount: favoritePlacesCount
    //     }
    //   }

    default:
      return state;
  }
};
export default placesReducer;
