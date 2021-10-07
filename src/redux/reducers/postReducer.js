const initState = {
  posts: []
}

function postReducer(state = initState, action) {

  const { data } = action;

  switch (action.type) {
    case 'ADD_POST': {

      const { requestBody } = action.payload;

      const newPostArr = state.posts.slice();
      newPostArr.push(requestBody);
      return {
        ...state,
        posts: newPostArr
      }
    }
    case 'GET_ALL_POSTS': {
      return {
        ...state,
        posts: data
      }
    }
    default: {
      return state
    }
  }
}

export default postReducer;