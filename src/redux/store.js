import { configureStore } from '@reduxjs/toolkit';

import authReducer from './features/auth/authSlice';
import userReducer from './features/user/userSlice';
import workReducer from './features/work/workSlice';
import postReducer from './features/post/postSlice';
import skillReducer from './features/skill/skillSlice';
import universityReducer from './features/university/universitySlice';
import fetchUserReposMiddleware from './middleware/fetchUserRepos.middleware';
import loggingMiddleware from './middleware/logging.middleware';

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
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      fetchUserReposMiddleware,
      loggingMiddleware
    ]
  },
  )
  return store;
}

export default configureAppStore;

