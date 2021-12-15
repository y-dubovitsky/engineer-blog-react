import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import callApi from '../../requests/requests';
import { getFromLocalStore, saveToLocalStore } from '../../../utils/storeUtil';

// -------------------------------- AsyncThunk --------------------------------

export const login = createAsyncThunk("user/login", async (form) => {
  const payload = {
    url: 'http://localhost:8080/login',
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
  userEntity: {
    user: null,
    jwttoken: null,
  },
  status: 'idle',
  error: null
}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //TODO Добавить проверку валидности токена!
    loadUserFromLocalStorage(state) {
      state.userEntity.user = getFromLocalStore('userEntity', 'user');
    },
    logout() {
      return initialState;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.userEntity.user = action.payload.user;
        state.userEntity.jwttoken = action.payload.jwttoken;

        saveToLocalStore('userEntity', state.userEntity)
      })
      .addCase(registration.fulfilled, (state, action) => {
        //FIXME state.postEntities.add(action.payload);
      })
  }
});


export const { logout, loadUserFromLocalStorage } = UserSlice.actions;

export default UserSlice.reducer;

// -------------------------------- Selectors --------------------------------
export const selectUser = state => state.user.userEntity.user;