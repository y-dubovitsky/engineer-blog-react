import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import callApi from '../../requests/requests';
import { getFromLocalStore } from '../../../utils/storeUtil';

// -------------------------------- AsyncThunk --------------------------------

export const addSkill = createAsyncThunk("skill/addSkill", async (skill) => {
  const payload = {
    path: '/api/skill/add',
    requestBody: skill,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getFromLocalStore('userEntity', 'jwttoken')
    }
  }

  const data = callApi(payload);
  return data;
}
);

export const fetchUserSkills = createAsyncThunk("skill/fetchUserSkills", async () => {
  const payload = {
    path: '/api/user/skills',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getFromLocalStore('userEntity', 'jwttoken')
    }
  }
  const data = callApi(payload);
  return data;
}
);

// -------------------------------- Slice --------------------------------

const initialState = {
  skillEntities: [],
  status: 'idle',
  error: null
}

const SkillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserSkills.fulfilled, (state, action) => {
        state.skillEntities = action.payload;
      })
      .addCase(addSkill.fulfilled, (state, action) => {
        state.skillEntities.push(action.payload)
      })
  }
});

export default SkillSlice.reducer;

// -------------------------------- Selectors --------------------------------

export const selectSkillEntities = state => state.skill.skillEntities;

