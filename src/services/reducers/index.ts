import { combineReducers } from "redux";
import post from "../../redux/post/post-reducer";

export const rootReducer = combineReducers({
  post,
});
