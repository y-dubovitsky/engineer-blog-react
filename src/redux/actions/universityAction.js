import {
  GET_USER_UNIVERSITY_LIST,
  ADD_UNIVERSITY
} from '../constants/constants';

import { getFromLocalStore } from '../../utils/storeUtil';

export const getUserUniversityList = () => (
  {
    type: GET_USER_UNIVERSITY_LIST,
    payload: {
      url: 'http://localhost:8080/api/university',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getFromLocalStore('jwttoken'),
      }
    }
  }
);

export const addUniversity = (university) => (
  {
    type: ADD_UNIVERSITY,
    payload: {
      url: 'http://localhost:8080/api/university/add',
      requestBody: university,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getFromLocalStore('jwttoken'),
      }
    }
  }
);