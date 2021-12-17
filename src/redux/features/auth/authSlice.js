import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import callApi from '../../requests/requests';
import { getFromLocalStore, saveToLocalStore, deleteFromLocalStore } from '../../../utils/storeUtil';

// -------------------------------- AsyncThunk --------------------------------

export const login = createAsyncThunk("user/login", async (form) => {
  const payload = {
    path: '/login',
    requestBody: form,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }
  const response = await callApi(payload);
  return response;
});

export const registration = createAsyncThunk("user/registration", async (form) => {
  const payload = {
    path: '/api/auth/register',
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
  authEntity: {
    username: null,
    jwttoken: null
  },
  isUserExists: null,
  status: 'idle',
  error: null
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //TODO Добавить проверку валидности токена!
    loadAuthFromLocalStorage(state) {
      state.authEntity.username = getFromLocalStore('authEntity', 'username');
    },
    logout() {
      deleteFromLocalStore(['authEntity']);
      return initialState;
    },
    nullifyIsUserExists(state) {
      state.isUserExists = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.authEntity.username = action.payload.username;
        state.authEntity.jwttoken = action.payload.jwttoken;

        saveToLocalStore('authEntity', state.authEntity)
      })
      .addCase(registration.fulfilled, (state, action) => {
        if(action.payload) {
          state.isUserExists = false;
        } else{
          state.isUserExists = true;
        }
        console.log(state.isUserExists);
      })
  }
});

export default AuthSlice.reducer;

// -------------------------------- Actions --------------------------------

export const { logout, loadAuthFromLocalStorage, nullifyIsUserExists } = AuthSlice.actions;

// -------------------------------- Selectors --------------------------------

export const selectAuthUsername = state => state.auth.authEntity.username;
export const selectUserIsExist = state => state.auth.isUserExists;
