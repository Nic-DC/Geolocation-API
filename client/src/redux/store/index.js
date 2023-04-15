// COMBINE REDUCERS
import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";

// REDUCERS [all the used reducers]
import selectReducer from "../reducers/selectReducer";
import placesReducer from "../reducers/placesReducer";
import coordsAndBoundsReducer from "../reducers/coordsAndBoundsReducer";

// REDUX-PERSIST
import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: localStorage,
};

const totalReducer = combineReducers({
  select: selectReducer,
  places: placesReducer,
  coordsAndBounds: coordsAndBoundsReducer,
});

const peristedReducer = persistReducer(persistConfig, totalReducer);

export const store = configureStore({
  // reducer: totalReducer,
  reducer: peristedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export const persistor = persistStore(store);
