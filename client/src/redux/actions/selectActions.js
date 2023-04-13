export const SELECT_PLACE_TYPE = `SELECT_PLACE_TYPE`;
export const SELECT_PLACE_RATING = `SELECT_RATING`;

export const selectPlaceTypeAction = (selectedPlace) => {
  return {
    type: SELECT_PLACE_TYPE,
    payload: selectedPlace,
  };
};

export const selectPlaceRatingAction = (selectedRating) => {
  return {
    type: SELECT_PLACE_RATING,
    payload: selectedRating,
  };
};
