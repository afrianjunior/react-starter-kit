import * as actionTypes from '../actions/planetActions/types'
const initialState = {
  planet: {
    items: [],
    pagination: {}
  },
  status: 'fetching',
  errorMessage: null
}

const planetReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_PLANETS:
      return { ...state, status: action.status }
    case actionTypes.RECEIVE_PLANETS_SUCCESS:
      return { ...state, status: action.status, planet: action.payload }
    case actionTypes.FETCH_PLANETS_GET_ERROR:
      return { ...state, status: action.status, errorMessage: action.message }
    default:
      return state
  }
}

export default planetReducer
