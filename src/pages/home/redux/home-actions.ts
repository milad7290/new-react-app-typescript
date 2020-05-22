import { Dispatch } from "redux";
import { AppState } from "../../../store";
import { AppActions } from "../../../types/app-action-type/app-action-type";
import { postsList } from "../api/home-api";
import { setPosts, setPostsLoading } from "./home-action-types";

const fetchPosts = () => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(setPostsLoading(true));

    return postsList().then((res: any) => {
      dispatch(setPosts(res.result));
      dispatch(setPostsLoading(false));
    });
  };
};

export { fetchPosts };
