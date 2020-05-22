import { AppActions } from "../../../types/app-action-type/app-action-type";
import { Post } from "../../../types/post-type/post-type";

export const SET_POSTS_LIST = "SET_POSTS_LIST";
export const SET_POSTS_LIST_LOADING = "SET_POSTS_LIST_LOADING";

export interface SetPostsList {
  type: typeof SET_POSTS_LIST;
  posts: Post[];
}

export interface SetPostsListLoading {
  type: typeof SET_POSTS_LIST_LOADING;
  isLoading: boolean;
}

export type PostActionTypes = SetPostsList | SetPostsListLoading;

const setPostsLoading = (isLoading: boolean = false): AppActions => {
  return {
    type: SET_POSTS_LIST_LOADING,
    isLoading,
  };
};

const setPosts = (posts: Post[]): AppActions => {
  return {
    type: SET_POSTS_LIST,
    posts,
  };
};

export { setPostsLoading, setPosts };
