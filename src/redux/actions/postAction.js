export const addPost = (post) => (
  {
    type: 'ADD_POST',
    payload: {
      requestBody: post,
      url: 'http://localhost:8080/api/post/add'
    }
  }
);

export const deletePost = (post) => (
  {
    type: 'DELETE_POST',
    payload: {
      requestBody: post,
      url: 'http://localhost:8080/api/post'
    }
  }
);

export const getAllPosts = () => (
  {
    type: 'GET_ALL_POSTS',
    payload: {
      url: 'http://localhost:8080/api/post/all'
    }
  }
);