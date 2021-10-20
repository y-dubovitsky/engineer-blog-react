import {
  ADD_WORK,
  GET_USER_WORK_LIST
} from "../constants/constants"

export const addWork = (work) => (
  {
    type: ADD_WORK,
    payload: {
      url: 'http://localhost:8080/api/work/add',
      requestBody: work,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token')),
      }
    }
  }
);

export const getWorkList = () => (
  {
    type: GET_USER_WORK_LIST,
    payload: {
      url: 'http://localhost:8080/api/user/works',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token')),
      }
    }
  }
);