import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import callApi from '../../requests/requests';
import { getFromLocalStore, saveToLocalStore } from '../../../utils/storeUtil';

// -------------------------------- AsyncThunk --------------------------------

export const login = createAsyncThunk("user/login", async (form) => {
  const payload = {
    url: 'http://localhost:8080/authenticate',
    requestBody: form,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }

  const data = callApi(payload);
  return data;
});

export const registration = createAsyncThunk("user/registration", async (form) => {
  const payload = {
    url: 'http://localhost:8080/register',
    requestBody: form,
    method: 'POST',
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
  user: null,
  jwttoken: null,
  status: 'idle',
  error: null
}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    IS_USER_AUTH_CHECK(state, action) {
      const savedUser = getFromLocalStore('user');
      if (savedUser) {
        state.user = savedUser;
      }
    },
    logout(state, action) {
      return initialState;
    }
  },
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      saveToLocalStore('jwttoken', JSON.stringify(action.payload.jwttoken));
      saveToLocalStore('user', JSON.stringify(action.payload.user));
      return action.payload //!
    })
      .addCase(registration.fulfilled, (state, action) => {
        // state.postEntities.add(action.payload);
      })
  }
});


export const { logout, IS_USER_AUTH_CHECK } = UserSlice.actions;

export default UserSlice.reducer;

// -------------------------------- Selectors --------------------------------
export const selectUser = state => state.user.user;