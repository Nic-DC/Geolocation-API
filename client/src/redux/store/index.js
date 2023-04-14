// COMBINE REDUCERS
import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";

// SELECT [selects the PLACE'S TYPE & RATING]
import selectReducer from "../reducers/selectReducer";

// REDUX-PERSIST
import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: localStorage,
};

const totalReducer = combineReducers({
  select: selectReducer,
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
