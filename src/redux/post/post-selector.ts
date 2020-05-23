const getPosts = (state: any) => {
  const result = state.post;
  return result && result.data ? result.data : [];
};

const getPostsLoading = (state: any) => {
  return state.post.isLoading;
};

export { getPosts, getPostsLoading };

