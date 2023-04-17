import { SELECT_PLACE_TYPE, SELECT_PLACE_RATING } from "../actions/selectActions";

const initialState = {
  select: {
    placeType: "restaurants",
    placeRating: 2,
  },
};

const selectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PLACE_TYPE:
      return {
        ...state,
        select: {
          ...state.select,
          placeType: action.payload,
        },
      };

    case SELECT_PLACE_RATING:
      return {
        ...state,
        select: {
          ...state.select,
          placeRating: action.payload,
        },
      };
    default:
      return state;
  }
};
export default selectReducer;
