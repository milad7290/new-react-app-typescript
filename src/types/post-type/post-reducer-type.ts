import { Post } from "./post-type";

export interface PostReducerType {
  data: Post[];
  isLoading: boolean;
}
