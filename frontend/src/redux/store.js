import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer , persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { createLogger } from "redux-logger";
import authSlice from "./reducerSlice/authSlice";

const logger = createLogger();

const reducer = combineReducers({
  auth: authSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [logger],
});

export const persistor = persistStore(store);