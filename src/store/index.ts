import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { rootReducer } from "../services/reducers";
import { AppActions } from "../types/app-action-type/app-action-type";

export type AppState = ReturnType<typeof rootReducer>;

export function configureStore(initialState = {}) {
  const enhancers = [
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger),
  ];
  const store = createStore(rootReducer, initialState, compose(...enhancers));

  return store;
}
