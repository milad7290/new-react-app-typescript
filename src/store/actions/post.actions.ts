import {
  PostActionTypes,
  SET_POSTS_LIST_LOADING,
  SET_POSTS_LIST,
} from "../types/post.types";
import { Post } from "../../models/post.model";

export const setPostsLoading = (
  isLoading: boolean = false
): PostActionTypes => {
  return {
    type: SET_POSTS_LIST_LOADING,
    payload: isLoading,
  };
};

export const setPosts = (posts: Post[]): PostActionTypes => {
  return {
    type: SET_POSTS_LIST,
    payload: posts,
  };
};
