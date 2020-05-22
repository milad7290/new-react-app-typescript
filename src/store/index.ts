import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "../services/reducers";
// import rootReducer from "../services/reducers/index";

export function configureStore(initialState = {}) {
  const enhancers = [applyMiddleware(thunk, logger)];
  const store = createStore(rootReducer, initialState, compose(...enhancers));

  // if (module.hot) {
  //   module.hot.accept("../services/reducers/index", () => {
  //     const nextReducer = require("../services/reducers/index").default;
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  return store;
}
