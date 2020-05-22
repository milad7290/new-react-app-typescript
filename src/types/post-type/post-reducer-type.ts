import { Post } from "./post-type";

export interface PostReducer {
  data: Post[];
  isLoading: boolean;
}
