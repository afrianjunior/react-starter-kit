import * as actionTypes from '../actions/types'
const initialState = {
  todos: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return { ...state, todos: [...state, action.payload] }
    default:
      return state
  }
}

export default rootReducer
