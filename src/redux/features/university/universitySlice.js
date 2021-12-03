import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import callApi from '../../requests/requests';
import { getFromLocalStore } from '../../../utils/storeUtil';

// -------------------------------- AsyncThunk --------------------------------

export const fetchUserUniversityList = createAsyncThunk(
  "university/fetchUserUniversityList",
  async () => {
    const payload = {
      url: 'http://localhost:8080/api/university',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getFromLocalStore('user', 'jwttoken')
      }
    }

    const data = callApi(payload);
    return data;
  }
);

export const addUniversity = createAsyncThunk(
  "university/addUniversity",
  async (university) => {
    const payload = {
      url: 'http://localhost:8080/api/university/add',
      requestBody: university,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getFromLocalStore('user', 'jwttoken')
      }
    }

    const data = callApi(payload);
    return data;
  });

// -------------------------------- Slice --------------------------------

const initialState = {
  universityEntities: []
}

const UniversitySlice = createSlice({
  name: 'university',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserUniversityList.fulfilled, (state, action) => {
        //TODO Добавить логику, чтобы не обновлять все целиком
        state.universityEntities = action.payload;
      })
      .addCase(addUniversity.fulfilled, (state, action) => {
        state.universityEntities.push(action.payload);
      })
  }
});

export default UniversitySlice.reducer;

// -------------------------------- Slice --------------------------------

export const selectUniversityEntities = state => state.university.universityEntities;