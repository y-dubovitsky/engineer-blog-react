import {
  ADD_SKILL,
  GET_USER_SKILL_LIST
} from "../constants/constants"

const initState = {
  entities: null
}

const skillReducer = (state = initState, action) => {
  switch (action.type) {
    //FIXME Реализовать добавление в state!
    case ADD_SKILL: {
      return {
        ...state,
        entities: state.entities
      }
    }
    case GET_USER_SKILL_LIST: {
      const { data } = action;
      return {
        ...state,
        entities: data
      }
    }
    default: {
      return state
    }
  }
}

export default skillReducer;