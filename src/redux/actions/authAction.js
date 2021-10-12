import { 
  SIGN_IN,
  SIGN_UP
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
}