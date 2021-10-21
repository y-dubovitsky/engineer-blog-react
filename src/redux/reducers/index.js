import { combineReducers } from "redux";

import postReducer from './postReducer';
import authReducer from './authReducer';
import universityReducer from './universityReducer';
import workReducer from './workReducer';
import skillReducer from './skillReducer';

export default combineReducers(
  {
    post: postReducer,
    university: universityReducer,
    auth: authReducer,
    work: workReducer,
    skill: skillReducer
  }
);