import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { rootReducer } from "../services/reducers";
import { AppActions } from "../types/app-action-type/app-action-type";
// import rootReducer from "../services/reducers/index";

export type AppState = ReturnType<typeof rootReducer>;

export function configureStore(initialState = {}) {
  const enhancers = [
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger),
  ];
  const store = createStore(rootReducer, initialState, compose(...enhancers));

  // if (module.hot) {
  //   module.hot.accept("../services/reducers/index", () => {
  //     const nextReducer = require("../services/reducers/index").default;
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  return store;
}
