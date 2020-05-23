import { Dispatch } from "react";
import { HttpService } from "../providers/http-service.provider";
import { AppActions, AppState, AppThunk } from "../store";
import { setPosts, setPostsLoading } from "../store/actions/post.actions";

export const fetchPosts = (): AppThunk<void> => async (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState
) => {
  dispatch(setPostsLoading(true));
  try {
    // TODO: should be modified
    const posts = (await HttpService({ url: "/posts" })) as any;

    dispatch(setPostsLoading(false));
    dispatch(setPosts(posts.result));
  } catch (error) {}
  dispatch(setPostsLoading(false));
};
