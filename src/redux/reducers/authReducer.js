import { SIGN_IN } from '../constants/constants';

const initState = {
  token: null
}
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      const token = action.data;
      console.log(token.token);
      saveTokenToLocalStorage(JSON.stringify(token.token));
      return {
        token: token
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