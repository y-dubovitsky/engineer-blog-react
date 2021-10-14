import {
  SIGN_IN,
  SIGN_UP
} from '../constants/constants';

const initState = {
  user: null,
  jwttoken: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_UP: {
      const user = action.data;

      return {
        ...state,
        user
      }
    }
    case SIGN_IN: {
      const { jwttoken, user } = action.data;
      saveTokenToLocalStorage(JSON.stringify(jwttoken));
      
      console.log(user.username + ' loged in!');

      return {
        ...state,
        user: user,
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