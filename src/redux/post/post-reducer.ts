
import { PostReducerType } from "../../types/post-type/post-reducer-type";
import { PostActionTypes, SET_POSTS_LIST, SET_POSTS_LIST_LOADING } from "./post-action-types";

const initialState: PostReducerType = {
  data: [],
  isLoading: false,
};

const PostReducer = (
  state = initialState,
  action: PostActionTypes
): PostReducerType => {
  switch (action.type) {
    case SET_POSTS_LIST_LOADING:
      return { ...state, isLoading: action.isLoading };
    case SET_POSTS_LIST:
      return { ...state, data: action.posts ? [...action.posts] : [] };
    default:
      return state;
  }
};

export default PostReducer;
