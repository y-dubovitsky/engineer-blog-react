import { 
  GET_USER_UNIVERSITY_LIST,
  ADD_UNIVERSITY
 } from '../constants/constants';

const initState = {
  universityList: null
}

const universityReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_UNIVERSITY: {
      console.log('University: ' + action.data + ' was added!');

      return {
        ...state
      }
    }
    case GET_USER_UNIVERSITY_LIST: {
      console.log('GET ALL UNIVERSITY: ' + action.data);

      const universityList = action.data;

      return {
        ...state,
        universityList
      }
    }
    default: {
      return {
        state
      }
    }
  }
}

export default universityReducer;