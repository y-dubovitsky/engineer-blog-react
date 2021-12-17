import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import callApi from '../../requests/requests';

export const getUserInfo = createAsyncThunk("user/get-user-info", async (username) => {
  const payload = {
    path: `/api/user/${username}`,
    method: 'Get',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }

  const data = callApi(payload);
  return data;
});

// -------------------------------- Slice --------------------------------

const initialState = {
  userEntity: {
  },
  status: 'idle',
  error: null
}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserInfo.fulfilled, (state, action) => {
        if (!action.payload) {
          state.error = 'error';
        } else {
          state.error = null;
          state.userEntity = action.payload
        }
      })
  }
});

export default UserSlice.reducer;

// -------------------------------- Selectors --------------------------------
export const selectUsername = state => state.user.userEntity.username;
export const selectUserEntity = state => state.user.userEntity;
export const selectUser = state => state.user;