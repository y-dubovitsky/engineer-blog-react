import {
  ADD_SKILL,
  GET_USER_SKILL_LIST
} from '../constants/constants';

import { getFromLocalStore } from '../../utils/storeUtil';

export const addSkill = (skill) => (
  {
    type: ADD_SKILL,
    payload: {
      url: 'http://localhost:8080/api/skill/add',
      requestBody: skill,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getFromLocalStore('jwttoken'),
      }
    }
  }
);

export const getUserSkillList = () => (
  {
    type: GET_USER_SKILL_LIST,
    payload: {
      url: 'http://localhost:8080/api/user/skills',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getFromLocalStore('jwttoken'),
      }
    }
  }
)