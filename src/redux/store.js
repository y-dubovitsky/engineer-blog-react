import { configureStore } from '@reduxjs/toolkit';

import authReducer from './features/auth/authSlice';
import userReducer from './features/user/userSlice';
import workReducer from './features/work/workSlice';
import postReducer from './features/post/postSlice';
import skillReducer from './features/skill/skillSlice';
import universityReducer from './features/university/universitySlice';

function configureAppStore() {
  const store = configureStore({
    reducer: {
      auth: authReducer,
      user: userReducer,
      work: workReducer,
      post: postReducer,
      skill: skillReducer,
      university: universityReducer
    },
  })
  return store;
}

export default configureAppStore;

