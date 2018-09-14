import Api from 'api'
import {
  FETCHING_PLANETS,
  RECEIVE_PLANETS_SUCCESS,
  FETCH_PLANETS_GET_ERROR
} from './types'

export const fetchPlanets = () => ({
  type: FETCHING_PLANETS,
  status: 'fetching'
})

export const receivePlanets = planets => ({
  type: RECEIVE_PLANETS_SUCCESS,
  payload: planets,
  status: 'fetched'
})

export const fetchPlanetsError = error => ({
  type: FETCH_PLANETS_GET_ERROR,
  message: error,
  status: 'error'
})

export const getPlanets = (url = 'planets') => dispatch => {
  dispatch(fetchPlanets())
  let data = {
    items: [],
    pagination: {}
  }
  return Api.get(url)
    .then(res => res.data)
    .then(res => {
      data.items = res.results
      delete res.results
      data.pagination = res
      dispatch(receivePlanets(data))
    })
    .catch(err => {
      dispatch(fetchPlanetsError(err.message))
    })
}
