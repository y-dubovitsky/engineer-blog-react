import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  IS_USER_AUTH_CHECK
} from '../constants/constants';

import {
  saveToLocalStore,
  getFromLocalStore
} from '../../utils/storeUtil';

const initState = {
  user: null,
  jwttoken: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    // Проверка, если пользователь залогинился и его данные сохранены в localStorage
    case IS_USER_AUTH_CHECK: {
      const savedUser = getFromLocalStore('user');
      if(savedUser) {
        return {
          ...state,
          user: savedUser
        }
      }
      return state;
    }
    case SIGN_UP: {
      const { user } = action.data;
      return {
        ...state,
        user
      }
    }
    case SIGN_IN: {
      const { user, jwttoken } = action.data;

      saveToLocalStore('jwttoken', JSON.stringify(jwttoken));
      saveToLocalStore('user', JSON.stringify(user));

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

export default authReducer;