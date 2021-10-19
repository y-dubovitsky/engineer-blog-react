import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT
} from '../constants/constants';

const initState = {
  user: null,
  jwttoken: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_UP: {

      const { user } = action.data;

      return {
        ...state,
        user
      }
    }
    case SIGN_IN: {
      const { user, jwttoken } = action.data;

      saveTokenToLocalStorage(JSON.stringify(jwttoken));
      console.log(user.username + ' loged in!');

      return {
        ...state,
        user: user,
        jwttoken
      }
    }
    case SIGN_OUT: {

      console.log('User sign out!');

      return initState;
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