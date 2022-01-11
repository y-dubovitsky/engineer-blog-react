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
      .addCase(getUserInfo.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.status = 'pending';
          state.error = null;
        }
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.userEntity = action.payload
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        if (!action.payload) { //TODO Проверка должна еще быть?
          state.error = action.error;
          state.status = 'idle';
        }
      })
  }
});

export default UserSlice.reducer;

// -------------------------------- Selectors --------------------------------
export const selectUsername = state => state.user.userEntity.username;
export const selectUserEntity = state => state.user.userEntity;
export const selectUser = state => state.user;