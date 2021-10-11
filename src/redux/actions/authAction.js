import { SIGN_IN } from "../constants/constants";

export const signIn = (form) => {

  console.log(form);

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