import { Post } from "../../models/post.model";

export const SET_POSTS_LIST = "SET_POSTS_LIST";
export const SET_POSTS_LIST_LOADING = "SET_POSTS_LIST_LOADING";

export interface SetPostsList {
  type: typeof SET_POSTS_LIST;
  payload: Post[];
}

export interface SetPostsListLoading {
  type: typeof SET_POSTS_LIST_LOADING;
  payload: boolean;
}

export type PostActionTypes = SetPostsList | SetPostsListLoading;
