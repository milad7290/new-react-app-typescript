const getPosts = (state: any) => {
  const result = state.home;
  return result && result.data ? result.data : [];
};

const getPostsLoading = (state: any) => {
  return state.home.isLoading;
};

export { getPosts, getPostsLoading };
