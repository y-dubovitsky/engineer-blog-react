import {
  SIGN_IN,
  SIGN_UP
} from '../constants/constants';

const initState = {
  username: null,
  jwttoken: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_UP: {
      const user = action.data;

      return {
        ...state,
        user: user
      }
    }
    case SIGN_IN: {
      const { jwttoken, username } = action.data;
      saveTokenToLocalStorage(JSON.stringify(jwttoken));

      return {
        username,
        jwttoken
      }
    }
    default: {
      return state
    }
  }
}

const saveTokenToLocalStorage = (token) => {
  localStorage.setItem('token', token);
}


export default authReducer;