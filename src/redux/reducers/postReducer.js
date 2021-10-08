import {
  GET_ALL_POSTS,
  ADD_NEW_POST
} from "../constants/constants"

const initState = {
  posts: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS: {

      const posts = action.data;

      return {
        ...state,
        posts: [
          ...posts
        ]
      }
    }
    case ADD_NEW_POST: {

      const data = action.data;

      return {
        ...state,
        posts: [
          ...state.posts,
          data
        ]
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;