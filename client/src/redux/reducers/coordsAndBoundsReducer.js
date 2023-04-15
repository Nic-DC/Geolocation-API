import { GET_COORDINATES, GET_BOUNDS, SET_CHILD_CLICKED } from "../actions/coordsAndBoundsActions.js";

const initialState = {
  coordinates: {
    coords: {},
  },
  bounds: {
    bounds: {},
  },
  childClicked: null,
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

    case SET_CHILD_CLICKED:
      return {
        ...state,
        childClicked: action.payload,
      };
    default:
      return state;
  }
};

export default coordsAndBoundsReducer;
