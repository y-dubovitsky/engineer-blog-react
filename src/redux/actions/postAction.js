import {
  GET_ALL_POSTS,
  ADD_NEW_POST
} from "../constants/constants";

import { getFromLocalStore } from '../../utils/storeUtil';

export const getAllPosts = () => (
  {
    type: GET_ALL_POSTS,
    payload: {
      url: 'http://localhost:8080/api/post/all'
    }
  }
)

export const addNewPost = (post) => (
  {
    type: ADD_NEW_POST,
    payload: {
      url: 'http://localhost:8080/api/post/add',
      requestBody: post,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getFromLocalStore('jwttoken'),
      }
    }
  }
)