import { GET_ALL_POSTS } from "../constants/constants"

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
    default: {
      return state;
    }
  }
}

export default reducer;