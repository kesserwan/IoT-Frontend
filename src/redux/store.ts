import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";

const middlewares = getDefaultMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

export type AppDispatch = typeof store.dispatch;

export default store;
