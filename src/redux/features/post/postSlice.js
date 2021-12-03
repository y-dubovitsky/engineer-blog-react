import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import callApi from '../../requests/requests';
import { getFromLocalStore } from '../../../utils/storeUtil';


// -------------------------------- AsyncThunk --------------------------------

export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {

  const payload = {
    payload: {
      url: 'http://localhost:8080/api/post/all'
    }
  }

  const data = await callApi(payload);
  return data;
});

export const addNewPost = createAsyncThunk('post/addNewPost', async(post) => {
    const payload = {
      url: 'http://localhost:8080/api/post/add',
      requestBody: post,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getFromLocalStore('user', 'jwttoken')
      }
    }

    const response = await callApi(payload);
    return response;
  }
)

// -------------------------------- Slice --------------------------------

const initialState = {
  postEntities: [],
  status: 'idle',
  error: null
}

const PostSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchPosts.fulfilled, (state, action) => {
      return action.payload
    })
    .addCase(addNewPost.fulfilled, (state, action) => {
      console.log(action.payload);
      state.postEntities.add(action.payload);
    })
  }
});

export default PostSlice.reducer;