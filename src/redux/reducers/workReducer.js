import { 
  ADD_WORK,
  GET_USER_WORK_LIST
 } from '../constants/constants';

const initState = {
  workList: null
}

const workReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_WORK: {
      
      return {
        ...state
      }
    }
    case GET_USER_WORK_LIST: {
      const workList = action.data;
      return {
        ...state,
        workList
      }
    }
    default: {
      return state
    }
  }
}

export default workReducer;