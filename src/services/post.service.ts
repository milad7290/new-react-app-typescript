import { Dispatch } from "react";
import { AppActions, AppState, AppThunk } from "../store";
import { setPostsLoading, setPosts } from "../store/actions/post.actions";
import { postsList } from "../apis/post.apis";

export const fetchPosts = (): AppThunk<void> => async (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState
) => {
  dispatch(setPostsLoading(true));
  try {
    // TODO: should be modified
    const posts = (await postsList()) as any;
    dispatch(setPosts(posts.result));
  } catch (error) {}
  dispatch(setPostsLoading(false));
};
