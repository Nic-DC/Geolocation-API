export const GET_COORDINATES = `GET_COORDINATES`;
export const GET_BOUNDS = `GET_BOUNDS`;

/* ------------------------------------------------------------------------ 
these actions will be used in the placesActions.js file [getPlacesAction()]
------------------------------------------------------------------------ */

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
