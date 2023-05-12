import {
  PLACES_LIST_SAVE,
  PLACES_FILTERED_LIST_SAVE,
  PLACES_IS_LOADING,
  PLACES_IS_ERROR,
  FAVORITE_PLACES_COUNT,
  FAVORITE_PLACES_LIST,
  TOGGLE_FAVORITE_PLACE,
} from "../actions/placesActions";

const initialState = {
  places: {
    placesList: [],
    filteredPlacesList: [],
    isLoading: true,
    isError: false,
  },
  favorites: {
    favoritePlacesList: [],
    favoritePlacesCount: 0,
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

    case TOGGLE_FAVORITE_PLACE:
      const place = action.payload;
      const isFavorite = state.favorites.favoritePlacesList.some(
        (favPlace) => favPlace.location_id === place.location_id
      );

      if (isFavorite) {
        const updatedFavoritePlacesList = state.favorites.favoritePlacesList.filter(
          (favPlace) => favPlace.location_id !== place.location_id
        );

        console.log("isFavorite does EXIST - updatedFavoritePlacesList:", updatedFavoritePlacesList);
        console.log("isFavorite does EXIST - updatedFavoritePlacesCount:", updatedFavoritePlacesList.length);
        return {
          ...state,
          favorites: {
            ...state.favorites,
            favoritePlacesList: updatedFavoritePlacesList,
            favoritePlacesCount: updatedFavoritePlacesList.length,
          },
        };
      } else {
        const updatedFavoritePlacesList = [...state.favorites.favoritePlacesList, place];

        console.log("isFavorite does NOT EXIST - updatedFavoritePlacesList:", updatedFavoritePlacesList);
        console.log("isFavorite does NOT EXIST - updatedFavoritePlacesCount:", updatedFavoritePlacesList.length);

        return {
          ...state,
          favorites: {
            ...state.favorites,
            favoritePlacesList: updatedFavoritePlacesList,
            favoritePlacesCount: updatedFavoritePlacesList.length,
          },
        };
      }

    default:
      return state;
  }
};
export default placesReducer;
