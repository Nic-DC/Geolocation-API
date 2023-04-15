import { GET_COORDINATES, GET_BOUNDS } from "../actions/coordsAndBoundsActions.js";

const initialState = {
  coordinates: {
    coords: {},
  },
  bounds: {
    bounds: {},
  },
};

const coordsAndBoundsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COORDINATES:
      return {
        ...state,
        coordinates: {
          ...state.coordinates,
          coords: action.payload,
        },
      };

    case GET_BOUNDS:
      return {
        ...state,
        bounds: {
          ...state.bounds,
          bounds: action.payload,
        },
      };
    default:
      return state;
  }
};

export default coordsAndBoundsReducer;
