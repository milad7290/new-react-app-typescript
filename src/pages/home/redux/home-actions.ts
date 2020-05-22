import { Dispatch } from "redux";
import { postsList } from "../api/home-api";
import { setPosts, setPostsLoading } from "./home-action-types";

function fetchPosts() {
  return (dispatch: Dispatch) => {
    dispatch(setPostsLoading(true));

    return postsList().then((res: any) => {
      dispatch(setPosts(res.result));
      dispatch(setPostsLoading(false));
    });
  };
}

export { fetchPosts };
