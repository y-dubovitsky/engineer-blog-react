import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  IS_USER_AUTH_CHECK
} from "../constants/constants";

export const signIn = (form) => {

  return {
    type: SIGN_IN,
    payload: {
      url: 'http://localhost:8080/authenticate',
      requestBody: form,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }
  }
};

export const signUp = (form) => {
  return {
    type: SIGN_UP,
    payload: {
      url: 'http://localhost:8080/register',
      requestBody: form,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }
  }
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
};

export const isUserAuthCheck = () => {
  return {
    type: IS_USER_AUTH_CHECK
  }
};