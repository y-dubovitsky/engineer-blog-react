import { GET_ALL_POSTS } from "../constants/constants"

export const getAllPosts = () => (
  {
    type: GET_ALL_POSTS,
    payload: {
      url: 'http://localhost:8080/api/post/all'
    }
  }
)