export const SET_POSTS_LIST = "SET_POSTS_LIST";
export const SET_POSTS_LIST_LOADING = "SET_POSTS_LIST_LOADING";

function setPostsLoading(isLoading = false) {
  return {
    type: SET_POSTS_LIST_LOADING,
    isLoading,
  };
}

function setPosts(posts: Post[]) {
  return {
    type: SET_POSTS_LIST,
    posts,
  };
}

export { setPostsLoading, setPosts };
