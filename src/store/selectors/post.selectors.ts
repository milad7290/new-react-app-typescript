import { AppState } from "..";

export const getPosts = (state: AppState) => {
  const result = state.post;
  return result && result.all ? result.all : [];
};

export const getPostsLoading = (state: AppState) => {
  return state.post.loading;
};
