import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import callApi from '../../requests/requests';
import { getFromLocalStore, saveToLocalStore } from '../../../utils/storeUtil';

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
    path: '/register',
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
    user: null,
    jwttoken: null,
    data: {
      error: null
    }
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
      //TODO Вынести логику аутентификации и работу с пользователями в разные слайсы
      .addCase(getUserInfo.fulfilled, (state, action) => {
        if (!action.payload) {
          state.userEntity.data.error = 'error';
        } else {
          state.userEntity.data = action.payload
        }
      })
  }
});


export const { logout, loadUserFromLocalStorage } = UserSlice.actions;

export default UserSlice.reducer;

// -------------------------------- Selectors --------------------------------
export const selectUser = state => state.user.userEntity.user;
export const selectUserData = state => state.user.userEntity.data;