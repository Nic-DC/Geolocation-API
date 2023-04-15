export const GET_COORDINATES = `GET_COORDINATES`;
export const GET_BOUNDS = `GET_BOUNDS`;
export const SET_CHILD_CLICKED = `SET_CHILD_CLICKED`;

export const getCoordinatesAction = (coordinates) => {
  return {
    type: GET_COORDINATES,
    payload: coordinates,
  };
};

export const getBoundsAction = (bounds) => {
  return {
    type: GET_BOUNDS,
    payload: bounds,
  };
};

/* ------------------------------------------------------------------------ 
these actions will be used in GoogleMapReact element [Map.jsx component]
------------------------------------------------------------------------ */
export const setChildClickedAction = (clickedPlace) => {
  return {
    type: SET_CHILD_CLICKED,
    payload: clickedPlace,
  };
};
