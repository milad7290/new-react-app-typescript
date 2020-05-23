import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import logger from "redux-logger";
import thunk, { ThunkMiddleware, ThunkAction } from "redux-thunk";
import { allPostsReducer, postsLoadingReducer } from "./reducers/post.reducers";
import { allErrorsReducer } from "./reducers/error.reducers";
import { ErrorActionTypes } from "./types/error.types";
import { PostActionTypes } from "./types/post.types";

const rootReducer = combineReducers({
  post: combineReducers({
    all: allPostsReducer,
    loading: postsLoadingReducer,
  }),
  errors: allErrorsReducer,
});

export type AppActions = ErrorActionTypes | PostActionTypes;

export type AppState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  AppActions
>;

export function configureStore(initialState = {}) {
  const enhancers = [
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger),
  ];
  const store = createStore(rootReducer, initialState, compose(...enhancers));

  return store;
}
