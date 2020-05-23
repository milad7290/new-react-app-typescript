import {
  PostActionTypes,
  SET_POSTS_LIST,
  SET_POSTS_LIST_LOADING,
} from "../types/post.types";
import { Post } from "../../models/post.model";

export const allPostsReducer = (
  state = [],
  action: PostActionTypes
): Post[] => {
  switch (action.type) {
    case SET_POSTS_LIST:
      return action.payload;
    default:
      return state;
  }
};

export const postsLoadingReducer = (
  state = false,
  action: PostActionTypes
): boolean => {
  switch (action.type) {
    case SET_POSTS_LIST_LOADING:
      return action.payload;
    default:
      return state;
  }
};
